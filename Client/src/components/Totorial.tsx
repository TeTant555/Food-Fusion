import {
  MessagesSquare,
  Zap,
  ZoomIn,
  RefreshCw,
} from "lucide-react";

const feature = [
  {
    title: "Step-by-Step Techniques",
    description:
      "Learn essential cooking techniques—from knife skills to sautéing—presented in clear, easy-to-follow tutorials designed for home cooks of all levels.",
    icon: <ZoomIn className="size-6" />,
    videoId: "sv3TXMSv6Lw",
  },
  {
    title: "Creative Recipes",
    description:
      "Discover innovative recipe ideas and plating styles to boost your culinary creativity and make everyday meals more exciting and flavorful.",
    icon: <Zap className="size-6" />,
    videoId: "PcXc8IJXHWw",
  },
  {
    title: "Interactive Support",
    description:
      "Have questions while cooking? Get real-time responses, cooking tips, and personalized guidance from our community and experts.",
    icon: <MessagesSquare className="size-6" />,
    videoId: "qEeg5mnLPzA",
  },
  {
    title: "Trusted Results",
    description:
      "Our tutorials are tested in real home kitchens to ensure consistent, reliable results—no matter your experience level.",
    icon: <RefreshCw className="size-6" />,
    videoId: "Aqc9mcVKgo4",
  },
];

const Tutorial = () => {
  return (
    <section className="py-32 px-3 bg-ter inter">
      <div className="container mx-auto">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-muted-foreground">WHY WE STAND OUT</p>
            <h2 className="text-3xl text-sec font-medium md:text-5xl manrope">
              Elevate Your Home Cooking with Expert Guidance
            </h2>
            <p className="text-muted-foreground md:max-w-2xl">
              Whether you're just starting out or looking to refine your skills, our video tutorials make learning to cook simple, fun, and flavorful—from your own kitchen.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-pri shadow-md p-6 md:min-h-[400px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-sec text-pri">
                {feature.icon}
              </span>
              <div className="flex-1">
                <h3 className="text-lg text-sec font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className="mt-6">
                <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${feature.videoId}`}
                    title={`${feature.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
