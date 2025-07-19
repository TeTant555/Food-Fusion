import { Hero } from "./chunks/Hero";
import Mission from "./chunks/Mission";
import chefone from "@/assets/images/chefone.jpg";
import cheftwo from "@/assets/images/cheftwo.jpg";
import chefthree from "@/assets/images/chefthree.jpg";;
import Events from "./chunks/Events";
import { Collection } from "@/components/Collection";
import { useState, useEffect } from "react";
import Auth from "../auth/Auth";
import useAuth from "@/hooks/useAuth";

const ANIMATION_DURATION = 350; // ms, matches modal-animate-in

const HomeView = () => {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Only show login popup if user is not authenticated and we've checked auth status
    if (authChecked) {
      setShowLogin(!isAuthenticated);
    }
  }, [isAuthenticated, authChecked]);

  useEffect(() => {
    // Mark that we've checked authentication status
    setAuthChecked(true);
  }, []);

  const handleCloseLogin = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowLogin(false);
      setIsClosing(false);
    }, ANIMATION_DURATION);
  };

  const handleAuthSuccess = () => {
    handleCloseLogin();
    // toast is handled in Login/SignUp
  };

  return (
    <div>
      {/* Login Popup Modal - Only show if user is not authenticated and auth has been checked */}
      {showLogin && !isAuthenticated && authChecked && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/40"
          onClick={handleCloseLogin}
        >
          <div
            className={`relative z-50 modal-animate-in${isClosing ? " animate-modal-exit" : ""}`}
            style={isClosing ? { animation: `modal-animate-in ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1) reverse` } : {}}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={handleCloseLogin}
              aria-label="Close Login"
            >
              ×
            </button>
            <Auth onAuthSuccess={handleAuthSuccess} />
          </div>
        </div>
      )}
      <div id="hero" className="bg-pri">
        <Hero />
      </div>
      <div id="mission" className="bg-ter">
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
      <div id="featured">
       <Collection title="Featured" />
      </div>
      <div id="events">
        <Events/>
      </div>
    </div>
  );
};

export default HomeView;
