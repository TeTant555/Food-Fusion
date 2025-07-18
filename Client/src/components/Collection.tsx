import { ChefHat, CloudDownload, Flag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import api from "@/api";

// Default card data (can be imported from a separate file)
const defaultCardData = [
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook lasagna, begin by preparing the main components..."
  },
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook lasagna, begin by preparing the main components..."
  },
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook lasagna, begin by preparing the main components..."
  },
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook lasagna, begin by preparing the main components..."
  },
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook quiche lorraine, begin by preparing the main components..."
  },
  {
    title: "Quiche Lorraine",
    description: "A classic French tart with creamy custard, crispy bacon, and melted cheese in a flaky crust.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Quiche Lorraine",
    cuisine_type: "Italian",
    dietary_preferences: ["Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Medium",
    cooking_way: "To cook lasagna, begin by preparing the main components..."
  },
  // Adding more default items to demonstrate pagination
  {
    title: "Pasta Carbonara",
    description: "Creamy Italian pasta with eggs, cheese, pancetta, and black pepper.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Pasta Carbonara",
    cuisine_type: "Italian",
    dietary_preferences: ["Non-Vegetarian"],
    cooking_difficulty: "Easy",
    cooking_way: "Cook pasta, mix with eggs and cheese, add pancetta..."
  },
  {
    title: "Chicken Tikka Masala",
    description: "Tender chicken in a creamy tomato-based curry sauce.",
    image: "https://i.pinimg.com/736x/66/60/10/666010f9912f8135c47275479b961b5a.jpg",
    alt: "Chicken Tikka Masala",
    cuisine_type: "Indian",
    dietary_preferences: ["Non-Vegetarian", "Gluten-Free"],
    cooking_difficulty: "Hard",
    cooking_way: "Marinate chicken, cook in curry sauce..."
  },
];

// Card item type
type CardItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
  alt: string;
  cuisine_type: string;
  cooking_difficulty: string;
  cooking_way: string;
  dietary_preferences: string[];
};

// Individual Card Component
type FeatureCardProps = CardItem;

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, alt, cuisine_type, cooking_difficulty, cooking_way, dietary_preferences }) => (
  <Card className="bg-ter !border-0 shadow-xl w-full max-w-xs flex flex-col">
    <CardHeader className="pb-1 flex justify-between">
      <p><ChefHat size={30} strokeWidth={2} /></p>
      <div className="flex gap-3">
        <Badge className="manrope bg-sec text-md font-bold"><Flag />{cuisine_type}</Badge>
      </div>
    </CardHeader>
    <CardContent className="text-left flex-grow">
      <h2 className="mb-1 text-xl font-bold inter">{title}</h2>
      <p className="leading-snug text-muted-foreground inter line-clamp-2">{description}</p>
    </CardContent>
    <CardFooter className="justify-center pb-0 flex-shrink-0">
      <img
        className="h-40 w-full rounded-md object-cover object-center"
        src={image}
        alt={alt}
      />
    </CardFooter>
    <div className="flex items-center justify-between mx-6">
      <Dialog>
        <div className="flex w-100 items-center gap-2">
          <DialogTrigger asChild>
            <Button className="bg-sec text-white text-sm w-1/2 hover:bg-sec/80">Read More</Button>
          </DialogTrigger>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-sec text-white text-sm w-1/2 hover:bg-sec/80">Preference</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-white inter">{dietary_preferences.map((preference) => (
                preference + " "
              ))}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <DialogContent className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-pri !border-0 shadow-xl p-2 sm:p-6 overflow-y-auto overflow-x-auto max-h-[90vh] rounded-none sm:rounded-lg">
          <DialogHeader>
            <DialogTitle className="inter space-x-2 items-center flex text-xl font-bold">
              <div>{title}</div>
              <div>
              <Badge className="w-15 h-6 bg-yellow-500 text-white">{cooking_difficulty}</Badge>
              </div>
            </DialogTitle>
            <DialogDescription className="inter">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              {cooking_way}
            </div>
          </div>
          {/* If you have an image inside the dialog, ensure it is responsive: */}
          {/* <img src={image} alt={alt} className="w-full max-w-full h-auto rounded-md" /> */}
          <DialogFooter className="justify-around flex items-center gap-2">
            <div>
              <DialogClose asChild>
                <Button type="button" className="bg-sec mr-auto w-30 text-white hover:bg-sec/80">
                  Close
                </Button>
              </DialogClose>
            </div>
            <Button type="button" className="bg-sec mr-auto w-30 text-white hover:bg-sec/80">
                <CloudDownload className="mr-1" size={20} strokeWidth={2} /> Download
            </Button>
              {/* {dietary_preferences.map((preference) => (
                <Button key={preference} className="bg-sec text-white">{preference}</Button>
              ))} */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </Card>
);

// Pagination helper function
const usePagination = <T,>(data: T[], itemsPerPage: number = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    goToPrevious,
    goToNext,
    hasNext: currentPage < totalPages,
    hasPrevious: currentPage > 1
  };
};

// Custom Pagination Component
const CustomPagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}> = ({ currentPage, totalPages, onPageChange, onPrevious, onNext, hasNext, hasPrevious }) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="mt-8 inter">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={onPrevious}
            className={`${!hasPrevious ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-sec/10'}`}
          />
        </PaginationItem>
        
        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(1)} className="cursor-pointer hover:bg-sec/10">
                1
              </PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}
        
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              isActive={currentPage === page}
              className={`cursor-pointer ${
                currentPage === page 
                  ? 'bg-sec text-white hover:bg-sec/80' 
                  : 'hover:bg-sec/10'
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(totalPages)} className="cursor-pointer hover:bg-sec/10">
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        
        <PaginationItem>
          <PaginationNext 
            onClick={onNext}
            className={`${!hasNext ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-sec/10'}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

// Main Feature Component Props
type FeatureProps = {
  title?: string;
  subtitle?: string;
  cardData?: CardItem[];
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  gridClassName?: string;
  sectionClassName?: string;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  itemsPerPage?: number;
};

const Collection: React.FC<FeatureProps> = ({
  title = "Featured Recipes",
  subtitle,
  cardData = defaultCardData,
  className = "",
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  gridClassName = "",
  sectionClassName = "py-32 bg-pri",
  columns = { sm: 2, lg: 3 },
  itemsPerPage = 6
}) => {
  // API
  const { data: recipe, isLoading, error } = api.collections.getRecipes.useQuery();

  // Transform API data to match component structure
  const transformApiData = (apiData: unknown) => {
    // If it's a single recipe object, wrap it in an array
    type ApiRecipe = {
      title?: string;
      description?: string;
      image?: string;
      alt?: string;
      cuisine_type?: string;
      cooking_difficulty?: string;
      cooking_way?: string;
      dietary_preferences?: string[];
    };

    const recipesArray: ApiRecipe[] = Array.isArray(apiData) ? apiData : [apiData];

    return recipesArray.map((recipe) => ({
      title: recipe.title || '',
      description: recipe.description || '',
      image: recipe.image || '',
      alt: recipe.alt || recipe.title || '',
      cuisine_type: recipe.cuisine_type || '',
      cooking_difficulty: recipe.cooking_difficulty || '',
      cooking_way: recipe.cooking_way || '',
      dietary_preferences: recipe.dietary_preferences || []
    }));
  };

  // Use API data if available, otherwise fall back to cardData prop or defaultCardData
  const recipesToDisplay = recipe ? transformApiData(recipe) : cardData;

  // Pagination hook
  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    goToPrevious,
    goToNext,
    hasNext,
    hasPrevious
  } = usePagination(recipesToDisplay, itemsPerPage);

  // Generate grid column classes based on columns prop
  const getGridClasses = () => {
    const baseClasses = "mt-10 grid grid-cols-1 place-items-center gap-8";
    const columnClasses = [];
    
    if (columns.sm) columnClasses.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) columnClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) columnClasses.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) columnClasses.push(`xl:grid-cols-${columns.xl}`);
    
    return `${baseClasses} ${columnClasses.join(' ')} ${gridClassName}`;
  };

  // Handle loading state
  if (isLoading) {
    return (
      <section className={`${sectionClassName} ${className}`}>
        <div className={`container min-w-full ${containerClassName}`}>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className={`mb-6 text-4xl text-sec font-semibold text-pretty manrope lg:text-5xl ${titleClassName}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg text-muted-foreground max-w-3xl ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-sec"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle error state
  if (error) {
    return (
      <section className={`${sectionClassName} ${className}`}>
        <div className={`container min-w-full ${containerClassName}`}>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className={`mb-6 text-4xl text-sec font-semibold text-pretty manrope lg:text-5xl ${titleClassName}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-lg text-muted-foreground max-w-3xl ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
            <div className="mt-10 text-center">
              <p className="text-red-500 mb-4">Failed to load recipes. Showing default recipes instead.</p>
              <div className={getGridClasses()}>
                {currentData.map((card, index) => (
                  <FeatureCard
                    key={index}
                    icon={ChefHat}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    alt={card.alt}
                    cuisine_type={card.cuisine_type}
                    cooking_difficulty={card.cooking_difficulty}
                    cooking_way={card.cooking_way}
                    dietary_preferences={card.dietary_preferences}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <CustomPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                  onPrevious={goToPrevious}
                  onNext={goToNext}
                  hasNext={hasNext}
                  hasPrevious={hasPrevious}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${sectionClassName} ${className}`}>
      <div className={`container min-w-full ${containerClassName}`}>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className={`mb-6 text-4xl text-sec font-semibold text-pretty manrope lg:text-5xl ${titleClassName}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg text-muted-foreground max-w-3xl ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
          <div className={getGridClasses()}>
            {currentData.map((card, index) => (
              <FeatureCard
                key={index}
                icon={ChefHat}
                title={card.title}
                description={card.description}
                image={card.image}
                alt={card.alt}
                cuisine_type={card.cuisine_type}
                cooking_difficulty={card.cooking_difficulty}
                cooking_way={card.cooking_way}
                dietary_preferences={card.dietary_preferences}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              onPrevious={goToPrevious}
              onNext={goToNext}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Collection, type FeatureProps, type CardItem };