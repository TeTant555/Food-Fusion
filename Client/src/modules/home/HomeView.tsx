import { Hero } from "./chunks/Hero";
import Mission from "./chunks/Mission";
import chefone from "@/assets/images/chefone.jpg";
import cheftwo from "@/assets/images/cheftwo.jpg";
import chefthree from "@/assets/images/chefthree.jpg";;
import Events from "./chunks/Events";
import { Collection } from "@/components/Collection";

const HomeView = () => {
  return (
    <div>
      <div className="bg-pri">
        <Hero />
      </div>
      <div className="bg-ter">
        <Mission
          tagline="Our Mission"
          heading="A Taste of Purpose"
          description="At FoodFusion, we believe in bringing people together through the art of home cooking. Our mission is to inspire culinary creativity and make home-cooked meals a joyful experience for food lovers everywhere."
          buttonText="Explore Recipes & Stories"
          buttonUrl="https://your-actual-foodfusion-link.com"
          posts={[
            {
              id: "post-1",
              title: "Empowering Home Chefs",
              summary:
                "Discover how FoodFusion is helping home cooks express their creativity in the kitchen through step-by-step recipes and engaging cooking tutorials.",
              label: "Community",
              author: "Chef Aisha Khan",
              published: "5 July 2025",
              url: chefone,
              image: chefone,
            },
            {
              id: "post-2",
              title: "From Kitchen to Community",
              summary:
                "Learn how our platform connects food enthusiasts from around the world, turning individual passions into a global community of culinary inspiration.",
              label: "Inspiration",
              author: "Daniel Tanaka",
              published: "5 July 2025",
              url: cheftwo,
              image: cheftwo,
            },
            {
              id: "post-3",
              title: "Creativity on Every Plate",
              summary:
                "Explore how FoodFusion fosters experimentation and innovation in home cooking, helping you elevate everyday meals into creative experiences.",
              label: "Creativity",
              author: "Sofia Martinez",
              published: "5 July 2025",
              url: chefthree,
              image: chefthree,
            },
          ]}
        />
      </div>
      <div>
       <Collection />
      </div>
      <div>
        <Events/>
      </div>
    </div>
  );
};

export default HomeView;
