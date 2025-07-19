import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import api from "@/api";
import { hideLoader, openLoader } from "@/store/features/loaderSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import Auth from "@/modules/auth/Auth";

const items = [
  {
    id: "vegetarian",
    label: "Vegetarian",
  },
  {
    id: "vegan",
    label: "Vegan",
  },
  {
    id: "gluten-free",
    label: "Gluten-Free",
  },
  {
    id: "dairy-free",
    label: "Dairy-Free",
  },
  {
    id: "nut-free",
    label: "Nut-Free",
  },
  {
    id: "pescatarian",
    label: "Pescatarian",
  },
  {
    id: "low-carb",
    label: "Low-Carb",
  },
  {
    id: "halal",
    label: "Halal",
  },
  {
    id: "kosher",
    label: "Kosher",
  },
  {
    id: "no-restrictions",
    label: "No Restrictions",
  },
  {
    id: "low-sodium",
    label: "Low Sodium",
  },
  {
    id: "high-protein",
    label: "High Protein",
  },
  {
    id: "low-fat",
    label: "Low Fat",
  },
  {
    id: "sugar-free",
    label: "Sugar-Free",
  },
  {
    id: "egg-free",
    label: "Egg-Free",
  },
  {
    id: "soy-free",
    label: "Soy-Free",
  },
  {
    id: "shellfish-free",
    label: "Shellfish-Free",
  },
  {
    id: "diabetic-friendly",
    label: "Diabetic-Friendly",
  },
  {
    id: "paleo",
    label: "Paleo",
  },
  {
    id: "keto",
    label: "Keto",
  },
  {
    id: "whole30",
    label: "Whole30",
  },
  {
    id: "raw-food",
    label: "Raw Food",
  },
  {
    id: "lacto-vegetarian",
    label: "Lacto-Vegetarian",
  },
  {
    id: "ovo-vegetarian",
    label: "Ovo-Vegetarian",
  },
  {
    id: "lacto-ovo-vegetarian",
    label: "Lacto-Ovo Vegetarian",
  }
] as const;

const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  alt: z.string().min(1, "Image alt text is required"),
  image: z.string().url("Please enter a valid URL").min(1, "Image URL is required"),
  cooking_way: z.string().min(1, "Cooking guide is required"),
  cuisine_type: z.string().min(1, "Please select a cuisine type"),
  cooking_difficulty: z.string().min(1, "Please select a difficulty level"),
  dietary_preferences: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one dietary preference.",
  }),
});

export default function Stacked() {

  // Chunk
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  // State - You might not need these separate states if you're using React Hook Form
  const [title, setTitle] = useState("Enter your recipe title");
  const [description, setDescription] = useState("Enter your recipe description");
  const [alt, setAlt] = useState("Enter your image alt");
  const [url, setUrl] = useState("Enter your image URL");
  const [guide, setGuide] = useState("Write how to make your recipe");

  // Initialize the form with Zod validation
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      alt: "",
      image: "",
      cooking_way: "",
      cuisine_type: "",
      cooking_difficulty: "",
      dietary_preferences: [],
    },
  });

  // API
  const { mutate: addRecipe } = api.collections.addRecipes.useMutation({
    onMutate: () => {
      dispatch(openLoader());
    },
    onSuccess: (data) => {
      toast.success(`${data.title} added successfully!`, {
        style: {
          background: 'var(--color-ter)',
          color: 'var(--color-sec)',
        },
      });
      // Reset form after successful submission
      form.reset();
      // Reset local states
      setTitle("Enter your recipe title");
      setDescription("Enter your recipe description");
      setAlt("Enter your image alt");
      setUrl("Enter your image URL");
      setGuide("Write how to make your recipe");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to add recipe. Please try again.");
    },
    onSettled: () => {
      dispatch(hideLoader());
    }
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Check if user is authenticated before submitting
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }

    // Convert cooking_difficulty to the correct type if necessary
    const fixedData = {
      ...data,
      cooking_difficulty: data.cooking_difficulty as "easy" | "medium" | "hard",
    };
    addRecipe(fixedData);

    // Optional: Show the submitted data in console for debugging
    console.log("Submitted data:", fixedData);
  }

  // Handle authentication success
  const handleAuthSuccess = () => {
    setShowLogin(false);
    toast.success("Login successful! You can now add recipes.");
  };

  // Get error message for a field
  const getErrorMessage = (fieldName: keyof z.infer<typeof FormSchema>) => {
    return form.formState.errors[fieldName]?.message;
  };

  // If user is not authenticated, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen min-w-screen bg-ter mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl py-4 sm:py-6 md:py-8 lg:py-10">
        <Card className="bg-ter !border-none shadow-none">
          <CardHeader className="px-4 sm:px-6 text-center">
            <CardTitle className="manrope text-sec text-xl sm:text-2xl lg:text-3xl font-bold">
              Share Your Favourite Recipes
            </CardTitle>
            <p className="text-muted-foreground mt-4">
              Please log in to share your recipes with the community.
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 flex justify-center">
            <Button 
              onClick={() => setShowLogin(true)}
              className="bg-sec hover:bg-sec/80 inter px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            >
              Login to Continue
            </Button>
          </CardContent>
        </Card>

        {/* Login Modal */}
        {showLogin && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/40"
            onClick={() => setShowLogin(false)}
          >
            <div
              className="relative z-50 modal-animate-in"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={() => setShowLogin(false)}
                aria-label="Close Login"
              >
                ×
              </button>
              <Auth onAuthSuccess={handleAuthSuccess} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen bg-ter mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl py-4 sm:py-6 md:py-8 lg:py-10">
      <Card className="bg-ter !border-none shadow-none">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="manrope text-sec text-xl sm:text-2xl lg:text-3xl font-bold">
            Share Your Favourite Recipes
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              {/* Profile section */}
              <div className="space-y-4 sm:space-y-6 inter">
                {/* Title and Description Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="w-full sm:w-1/4">
                        <FormLabel className="text-sec text-sm sm:text-base">Title</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`!ring-sec text-muted-foreground !border-0 shadow-md !bg-pri w-full ${
                              getErrorMessage('title') ? 'placeholder:text-red-500' : ''
                            }`}
                            placeholder={getErrorMessage('title') || title}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="w-full sm:w-3/4">
                        <FormLabel className="text-sec text-sm sm:text-base">Description</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`!ring-sec text-muted-foreground !border-0 shadow-md !bg-pri w-full ${
                              getErrorMessage('description') ? 'placeholder:text-red-500' : ''
                            }`}
                            placeholder={getErrorMessage('description') || description}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Image Alt and URL Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <FormField
                    control={form.control}
                    name="alt"
                    render={({ field }) => (
                      <FormItem className="w-full sm:w-1/4">
                        <FormLabel className="text-sec text-sm sm:text-base">Image Alt</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`!ring-sec text-muted-foreground !border-0 shadow-md !bg-pri w-full ${
                              getErrorMessage('alt') ? 'placeholder:text-red-500' : ''
                            }`}
                            placeholder={getErrorMessage('alt') || alt}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem className="w-full sm:w-3/4">
                        <FormLabel className="text-sec text-sm sm:text-base">Image URL</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`!ring-sec text-muted-foreground !border-0 shadow-md !bg-pri w-full ${
                              getErrorMessage('image') ? 'placeholder:text-red-500' : ''
                            }`}
                            placeholder={getErrorMessage('image') || url}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Cooking Guide */}
                <FormField
                  control={form.control}
                  name="cooking_way"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sec text-sm sm:text-base">Cooking Guide</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className={`!ring-sec text-muted-foreground !border-0 shadow-md !bg-pri w-full min-h-[100px] sm:min-h-[120px] ${
                              getErrorMessage('cooking_way') ? 'placeholder:text-red-500' : ''
                            }`}
                            placeholder={getErrorMessage('cooking_way') || guide}
                          />
                        </FormControl>
                    </FormItem>
                  )}
                />

                {/* Cuisine Type, Difficulty, and Dietary Preferences */}
                <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-6">
                  {/* Cuisine Type and Difficulty Row */}
                  <div className="flex flex-col items-start sm:flex-row gap-4 sm:gap-5 lg:w-2/5">
                    <FormField
                      control={form.control}
                      name="cuisine_type"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel className="text-sec text-sm sm:text-base">Cuisine Type</FormLabel>
                          <Select 
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={`w-full !bg-pri !border-0 shadow-md ${
                                getErrorMessage('cuisine_type') ? '!text-red-500' : ''
                              }`}>
                                <SelectValue placeholder={getErrorMessage('cuisine_type') || "Select cuisine"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="!border-0 shadow-md inter text-muted-foreground !bg-pri">
                              <SelectGroup>
                                <SelectLabel>Cuisine Type</SelectLabel>
                                <SelectItem value="italian">Italian</SelectItem>
                                <SelectItem value="french">French</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="spanish">Spanish</SelectItem>
                                <SelectItem value="european">European</SelectItem>
                                <SelectItem value="indian">Indian</SelectItem>
                                <SelectItem value="thai">Thai</SelectItem>
                                <SelectItem value="chinese">Chinese</SelectItem>
                                <SelectItem value="japanese">Japanese</SelectItem>
                                <SelectItem value="middle-eastern">Middle Eastern</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cooking_difficulty"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel className="text-sec text-sm sm:text-base">Cooking Difficulty</FormLabel>
                          <Select 
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={`w-full !bg-pri !border-0 shadow-md ${
                                getErrorMessage('cooking_difficulty') ? '!text-red-500' : ''
                              }`}>
                                <SelectValue placeholder={getErrorMessage('cooking_difficulty') || "Select difficulty"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="!border-0 shadow-md inter text-muted-foreground !bg-pri">
                              <SelectGroup>
                                <SelectLabel>Difficulty</SelectLabel>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Dietary Preferences */}
                  <div className="space-y-2 lg:w-3/5">
                    <FormField
                      control={form.control}
                      name="dietary_preferences"
                      render={() => (
                        <FormItem className="space-y-2">
                          <FormLabel className={`text-sec text-sm sm:text-base ${
                            getErrorMessage('dietary_preferences') ? 'text-red-500' : ''
                          }`}>
                            {getErrorMessage('dietary_preferences') || "Dietary Preference"}
                          </FormLabel>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                            {items.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="dietary_preferences"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-center gap-2 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox 
                                          className="!border-0 !bg-pri flex-shrink-0"
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            const newValue = checked
                                              ? [...field.value, item.id]
                                              : field.value.filter((value) => value !== item.id);
                                            field.onChange(newValue);
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-xs sm:text-sm text-sec font-normal leading-tight">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-end pt-4">
                <Button 
                  className="bg-sec hover:bg-sec/80 inter w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base" 
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}