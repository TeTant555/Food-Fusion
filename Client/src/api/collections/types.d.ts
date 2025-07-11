type recipesType = {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    cuisine_type: string;
    dietary_preferences: string[]; // array of strings, e.g. ["Vegan", "Gluten-Free"]
    cooking_difficulty: "easy" | "medium" | "hard"; // limited to these values
    cooking_way: string;
}

type addRecipesType = {
    title: string;
    description: string;
    image: string;
    alt: string;
    cuisine_type: string;
    dietary_preferences: string[]; // array of strings, e.g. ["Vegan", "Gluten-Free"]
    cooking_difficulty: "easy" | "medium" | "hard"; // limited to these values
    cooking_way: string;
}