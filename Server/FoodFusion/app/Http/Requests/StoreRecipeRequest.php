<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRecipeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
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
    }
} 