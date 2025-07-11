import { ChefHat, Flag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
      <Badge className="manrope bg-sec text-md font-bold"><Flag />{cuisine_type}</Badge>
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
        <DialogContent className="sm:max-w-md bg-pri !border-0 shadow-xl">
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
          <DialogFooter className="justify-between flex items-center gap-2">
            <DialogClose asChild>
              <Button type="button" className="bg-sec mr-auto w-30 text-white hover:bg-sec/80">
                Close
              </Button>
            </DialogClose>
              {/* {dietary_preferences.map((preference) => (
                <Button key={preference} className="bg-sec text-white">{preference}</Button>
              ))} */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </Card>
);

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
  columns = { sm: 2, lg: 3 }
}) => {
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
            {cardData.map((card, index) => (
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
        </div>
      </div>
    </section>
  );
};

export { Collection, type FeatureProps, type CardItem };