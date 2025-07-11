<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'image' => 'sometimes|required|string|max:255',
            'alt' => 'sometimes|required|string|max:255',
            'cuisine_type' => 'sometimes|required|string|max:255',
            'dietary_preferences' => 'sometimes|required|array',
            'dietary_preferences.*' => 'string|max:255',
            'cooking_difficulty' => 'sometimes|required|in:easy,medium,hard',
            'cooking_way' => 'sometimes|required|string',
        ];
    }
} 