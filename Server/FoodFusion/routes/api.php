<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::apiResource('recipes', RecipeController::class);
Route::post('/recipes', [RecipeController::class, 'addRecipes']);
Route::get('/recipes', [RecipeController::class, 'getRecipes']); 