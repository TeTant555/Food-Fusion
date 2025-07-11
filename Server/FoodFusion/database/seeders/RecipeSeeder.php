<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipe::create([
            'id' => '0001',
            'title' => 'Lasagna',
            'description' => 'A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.',
            'image' => 'https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg',
            'alt' => 'Lasagna',
            'cuisine_type' => 'Italian',
            'dietary_preferences' => ['Gluten Free'],
            'cooking_difficulty' => 'medium',
            'cooking_way' => 'To cook lasagna, begin by preparing the main components. Start with the sauce by sautéing chopped onions and garlic in a pan, then add ground meat or vegetables depending on your preference. Pour in tomato sauce, season it with herbs and spices, and let it simmer until it thickens. If you\'re using a white sauce (béchamel), melt butter in a separate pan, stir in flour to form a roux, and slowly whisk in milk until the mixture becomes smooth and creamy. For the cheese layer, mix ricotta cheese with an egg and some seasoning. Next, prepare the lasagna noodles—boil them if they\'re not oven-ready or fresh. Once all components are ready, assemble the lasagna in a baking dish. Begin with a thin layer of sauce at the bottom, then add a layer of noodles, followed by the cheese mixture or béchamel, and sprinkle with shredded cheese. Repeat these layers until the dish is filled, finishing with a layer of sauce and cheese on top. Preheat your oven to 375°F (190°C), cover the lasagna with foil, and bake it for 25 to 30 minutes. Then remove the foil and bake for another 10 to 15 minutes until the top is golden and bubbling. After baking, let the lasagna rest for about 10 to 15 minutes before slicing and serving, allowing the layers to set properly.'
        ]);
    }
} 