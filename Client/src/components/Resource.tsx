import { Book, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resource = ({
  whitepaperTitle = "The Art of Flavor: A Guide to Home Cooking Mastery",
  whitepaperType = "Culinary Resource",
  downloadDescription = "Love this guide? Download it for offline inspiration or to share with fellow food lovers.",
  readTime = "7 minutes",
  downloadOptions = [
    { label: "PDF Recipe Book", variant: "default" },
    { label: "Printable Version", variant: "outline" },
  ],
  socialLinks = [
    {
      platform: "Instagram",
      url: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
    },
    {
      platform: "LinkedIn",
      url: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
    },
    {
      platform: "Product Hunt",
      url: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
    },
    {
      platform: "Twitter",
      url: "#",
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
    },
  ],
  articleContent = (
    <>
      <div className="space-y-8 max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <h1 className="text-4xl text-sec sm:text-5xl font-bold manrope">
            Culinary Guide: The Art of Flavor and Home Cooking Mastery
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Once in a quiet village, people cooked with passion. Every home was filled with aromas of spices and sizzling pans. But one day, everything changed — a new law imposed a tax on flavor itself.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl text-sec font-extrabold manrope">
            The Flavor Tax
          </h2>
          <div className="space-y-3">
            <p className="text-base text-muted-foreground">
              The local council decided that flavorful meals were a luxury. To promote blandness and cut food costs, they introduced{" "}
              <a href="#" className="text-sec underline hover:text-sec/80">
                a "Flavor Tax"
              </a>
              : herbs, spices, and sauces would now cost extra.
            </p>
            <blockquote className="border-l-4 border-sec pl-4 italic text-muted-foreground">
              “Too much taste is dangerous,” they said. “Let’s keep cooking simple.”
            </blockquote>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl text-sec font-semibold">Chef Saucier's Rebellion</h3>
          <p className="text-muted-foreground">
            One daring chef, Saucier, refused to serve bland food. Secretly, he taught villagers how to infuse dishes with bold flavors — from garlic confit to smoked paprika.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Pinch of spice: 3 flavor coins</li>
            <li>Fresh herbs: 5 flavor coins</li>
            <li>Homemade sauces: 10 flavor coins</li>
          </ul>
          <p className="text-muted-foreground">
            Despite the tax, people began experimenting in their kitchens, exchanging flavor hacks and passing recipes in secret.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl text-sec font-semibold text-foreground">The Kitchen Revolution</h3>
          <p className="text-muted-foreground">
            Villagers shared spice blends in jars labeled “sugar”, snuck herbs into stews, and hosted underground recipe clubs. The council tried to stop it, but the aroma of rebellion was too strong.
          </p>
          <p className="text-muted-foreground">
            The more they cooked, the more joyful they became. Blandness was banished, and kitchens lit up with creativity.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl text-sec font-semibold">Flavor Wins</h3>
          <p className="text-muted-foreground">
            In the end, the council gave up. Cooking became a communal joy again, and Chef Saucier was honored as a culinary hero.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-border text-left text-sm">
              <thead className="bg-pri text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-semibold">Flavor Usage</th>
                  <th className="px-4 py-2 font-semibold">Happiness Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">Minimal</td>
                  <td className="px-4 py-2">Low</td>
                </tr>
                <tr className="border-t border-border bg-pri/40">
                  <td className="px-4 py-2">Moderate</td>
                  <td className="px-4 py-2">Content</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">Bold & Rich</td>
                  <td className="px-4 py-2">Joyful</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground">
            The story reminds us that cooking is not just a task — it’s a celebration of culture, memory, and creativity.
          </p>
          <p className="text-muted-foreground font-medium">
            Moral: Never compromise on flavor. Great food brings people together.
          </p>
        </div>
      </div>
    </>
  ),
}) => {
  return (
    <section className="py-23 inter px-5 bg-ter">
      <div className="container mx-auto grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="order-last md:order-none md:col-span-4 lg:col-span-3">
          <aside className="flex flex-col gap-2">
            <div className="border-border bg-pri mb-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3 className="flex manrope text-md text-sec items-center font-semibold">
                  <Book className="text-muted-foreground mr-2.5 size-3.5" />
                  {whitepaperType}
                </h3>
              </div>
              <div className="p-5">
                <div className="text-foreground gap-4 text-lg font-semibold leading-snug">
                  <p>{whitepaperTitle}</p>
                </div>
              </div>
            </div>

            <div className="border-border bg-pri mb-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3 className="flex items-center text-md text-sec font-semibold">
                  <Download className="text-muted-foreground mr-2.5 size-3.5" />
                  Download Options
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {downloadDescription}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {downloadOptions.map((option, index) => (
                      <Button
                        key={index}
                        className="w-full justify-between"
                        variant={
                          option.variant as
                            | "default"
                            | "outline"
                            | "link"
                            | "destructive"
                            | "secondary"
                            | "ghost"
                            | null
                            | undefined
                        }
                      >
                        {option.label}
                        <Download className="ml-2 size-4" />
                      </Button>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4 text-center text-xs">
                    Read time: {readTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-border bg-pri mb-6 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-border bg-muted/50 border-b px-5 py-4">
                <h3 className="flex items-center text-sm font-semibold">
                  <Share2 className="text-muted-foreground mr-2.5 size-3.5" />
                  Share this recipe guide
                </h3>
              </div>
              <div className="p-5">
                <ul className="flex items-center gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="border-border bg-muted/50 hover:bg-muted flex size-10 items-center justify-center rounded-full border transition-colors"
                        aria-label={`Share on ${link.platform}`}
                      >
                        <img
                          src={link.icon}
                          alt={link.platform}
                          className="size-5"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <div className="md:col-span-7 md:col-start-5 lg:col-start-6">
          <article className="prose dark:prose-invert prose-sm">
            {articleContent}
          </article>
        </div>
      </div>
    </section>
  );
};

export { Resource };
