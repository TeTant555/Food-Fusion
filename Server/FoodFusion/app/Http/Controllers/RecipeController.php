<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use App\Http\Requests\StoreRecipeRequest;
use App\Http\Requests\UpdateRecipeRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class RecipeController extends Controller
{
    /**
     * Display a listing of the recipes.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Recipe::query();
        if ($request->has('cuisine_type')) {
            $query->cuisineType($request->input('cuisine_type'));
        }
        if ($request->has('cooking_difficulty')) {
            $query->cookingDifficulty($request->input('cooking_difficulty'));
        }
        if ($request->has('dietary_preference')) {
            $query->whereJsonContains('dietary_preferences', $request->input('dietary_preference'));
        }
        $recipes = $query->get();
        return response()->json($recipes);
    }

    /**
     * Store a newly created recipe in storage.
     */
    public function store(StoreRecipeRequest $request): JsonResponse
    {
        $data = $request->validated();
        $recipe = Recipe::create($data);
        return response()->json($recipe, 201);
    }

    /**
     * Display the specified recipe.
     */
    public function show($id): JsonResponse
    {
        $recipe = Recipe::find($id);
        if (!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }
        return response()->json($recipe);
    }

    /**
     * Update the specified recipe in storage.
     */
    public function update(UpdateRecipeRequest $request, $id): JsonResponse
    {
        $recipe = Recipe::find($id);
        if (!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }
        $recipe->update($request->validated());
        return response()->json($recipe);
    }

    /**
     * Remove the specified recipe from storage.
     */
    public function destroy($id): JsonResponse
    {
        $recipe = Recipe::find($id);
        if (!$recipe) {
            return response()->json(['error' => 'Recipe not found'], 404);
        }
        $recipe->delete();
        return response()->json(['message' => 'Recipe deleted successfully']);
    }

    /**
     * Add a new recipe (POST /api/recipes).
     * Custom ID logic: Thread-safe, auto-increment string (0001, 0002, ...).
     */
    public function addRecipes(Request $request): JsonResponse
    {
        // Validation rules
        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|string|max:255',
            'alt' => 'required|string|max:255',
            'cuisine_type' => 'required|string|max:255',
            'dietary_preferences' => 'required|array',
            'dietary_preferences.*' => 'string|max:255',
            'cooking_difficulty' => 'required|in:easy,medium,hard',
            'cooking_way' => 'required|string',
        ];
        try {
            $validated = validator($request->all(), $rules);
            if ($validated->fails()) {
                return response()->json([
                    'message' => 'Validation failed',
                    'status' => 'error',
                    'data' => ['errors' => $validated->errors()]
                ], 400);
            }

            // Thread-safe custom ID generation
            $recipe = null;
            DB::transaction(function () use (&$recipe, $validated) {
                // Lock the table for update to prevent race conditions
                $maxId = Recipe::lockForUpdate()->max('id');
                $nextId = $maxId ? str_pad(((int) $maxId) + 1, 4, '0', STR_PAD_LEFT) : '0001';
                $data = $validated->validated();
                $data['id'] = $nextId;
                $recipe = Recipe::create($data);
            });

            return response()->json([
                'message' => 'Recipe added successfully',
                'status' => 'success',
                'data' => $recipe
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to add recipe',
                'status' => 'error',
                'data' => ['errors' => $e->getMessage()]
            ], 500);
        }
    }

    /**
     * Get all recipes (GET /api/recipes).
     * Returns all recipes in specified format.
     */
    public function getRecipes(): JsonResponse
    {
        try {
            $recipes = Recipe::all();
            return response()->json([
                'message' => 'Recipes retrieved successfully',
                'status' => 'success',
                'data' => $recipes
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to retrieve recipes',
                'status' => 'error',
                'data' => ['errors' => $e->getMessage()]
            ], 500);
        }
    }
} 