<?php

namespace Database\Factories;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    protected $model = Recipe::class;

    public function definition(): array
    {
        static $id = 1;
        $customId = str_pad($id++, 4, '0', STR_PAD_LEFT);
        return [
            'id' => $customId,
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(640, 480, 'food'),
            'alt' => $this->faker->word(),
            'cuisine_type' => $this->faker->randomElement(['Italian', 'Chinese', 'Indian', 'French', 'Mexican']),
            'dietary_preferences' => [$this->faker->randomElement(['Gluten Free', 'Vegan', 'Vegetarian', 'Nut Free'])],
            'cooking_difficulty' => $this->faker->randomElement(['easy', 'medium', 'hard']),
            'cooking_way' => $this->faker->paragraphs(3, true),
        ];
    }
} 