import React from "react";
import { Gallery } from "./chunks/Gallery";
import italy from "@/assets/images/italian.jpg";
import english from "@/assets/images/english.jpg";
import german from "@/assets/images/german.jpg";
import french from "@/assets/images/french.jpg";
import japan from "@/assets/images/japan.jpg";
import { Collection } from "@/components/Collection";
import { Logo } from "../../components/Logo";

const RecipeCollection = () => {

  return (
    <div>
      <div>
        <Gallery
          title="Recipe Collection"
          description="Discover a global collection of recipes that celebrate culinary traditions and creativity. Each recipe brings the authentic taste of its culture straight to your kitchen."
          items={[
            {
              id: "recipe1",
              title: "Italian Recipe",
              description:
                "Experience the comfort of Italy with Spaghetti Carbonara — a creamy pasta made with pancetta, eggs, cheese, and freshly cracked pepper.",
              href: "#",
              image: italy,
            },
            {
              id: "recipe2",
              title: "English Recipe",
              description:
                "Delight in Chicken Tikka Masala — tender chicken pieces simmered in a spiced tomato and cream sauce, a staple of Indian cuisine.",
              href: "#",
              image: english, 
            },
            {
              id: "recipe3",
              title: "German Recipe",
              description:
                "Try a hearty German Vegetable Stir Fry — packed with seasonal produce and rich flavors inspired by rustic German cooking.",
              href: "#",
              image: german,
            },
            {
              id: "recipe4",
              title: "French Recipe",
              description:
                "Enjoy classic French cuisine with Ratatouille — a dish of layered vegetables slow-cooked with olive oil and herbs de Provence.",
              href: "#",
              image: french,
            },
            {
              id: "recipe5",
              title: "Japanese Recipe",
              description:
                "Savor a Teriyaki Vegetable Bowl — fresh veggies glazed in sweet-savory teriyaki sauce, served with steamed Japanese rice.",
              href: "#",    
              image: japan,
            }
          ]}
        />
      </div>
      <div>
        <Collection title="Find Your Recipe" />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default RecipeCollection;
