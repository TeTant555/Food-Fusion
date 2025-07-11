import { Button } from "@/components/ui/button";
import chef from "@/assets/images/chefposter.jpg";
import gatone from "@/assets/images/gatonechef.jpg";
import food from "@/assets/images/foodplate.jpg";
import { ChefHat } from "lucide-react";

interface AboutProps {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Recipes Published", value: "1 200+" },
  { label: "Live Cooking Classes", value: "150+" },
  { label: "Happy Home Cooks", value: "99%" },
  { label: "Culinary Awards Won", value: "10+" },
];

const AboutContent = ({
  // --- HERO ---
  title = "About",
  description = "FoodFusion is a culinary platform devoted to inspiring home cooking and unleashing creativity in kitchens everywhere.",

  mainImage = { src: chef, alt: "placeholder" },
  secondaryImage = { src: gatone, alt: "placeholder" },

  // --- BREAKOUT BANNER ---
  breakout = {
    src: "https://i.pinimg.com/736x/7a/0b/9a/7a0b9a6daf563e0ecb5281b61ac77c78.jpg",
    alt: "logo",
    title: "Thousands of step‑by‑step recipes on FoodFusion.com",
    description:
      "From quick weeknight dinners to show‑stopping desserts, we guide food lovers with clear instructions, pro tips, and a welcoming community.",
    buttonText: "Explore Recipes",
    buttonUrl: "#",
  },

  // --- PARTNERS ---
  companiesTitle = "Trusted by foodies worldwide",
  companies = defaultCompanies,

  // --- ACHIEVEMENTS ---
  achievementsTitle = "Our Journey in Numbers",
  achievementsDescription = "Serving passionate cooks with inspiration, resources, and support every single day.",
  achievements = defaultAchievements,
}: AboutProps = {}) => {
  return (
    <section className="py-25 bg-ter">
      <div className="container mx-auto px-10">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl manrope font-semibold text-sec">{title}</h1>
          <p className="text-muted-foreground inter">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] shadow-xl rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="relative rounded-xl shadow-xl md:w-1/2 lg:w-auto overflow-hidden">
              {/* Background image with blur */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-xs scale-110"
                style={{ backgroundImage: `url(${food})` }}
              />

              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Foreground content */}
              <div className="relative z-10 flex flex-col justify-between gap-6 p-7">
                <ChefHat size={35} className="mr-auto text-white h-12 mix-blend-multiply" />
                <div>
                  <p className="mb-2 text-lg text-white inter font-semibold">
                    {breakout.title}
                  </p>
                  <p className="text-gray-200 inter">{breakout.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="mr-auto inter font-semibold shadow-md bg-sec/80 hover:bg-sec/90 text-white hover:text-white !border-0"
                  asChild
                >
                  <a href={breakout.buttonUrl} target="_blank">
                    {breakout.buttonText}
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl shadow-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-32">
          <p className="text-center inter">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-pri shadow-xl p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold manrope">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-sm sm:text-md text-muted-foreground inter">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center sm:justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="inter">{item.label}</p>
                <span className="text-4xl inter font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { AboutContent };
