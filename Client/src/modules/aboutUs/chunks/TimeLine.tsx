import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "2010",
    title: "The Spark of Food Fusion",
    content:
      "Born from a passion for cooking at home, Food Fusion began as a small blog sharing simple, flavorful recipes for everyday cooks. It quickly resonated with food lovers seeking authentic, home-cooked meals over takeout.",
  },
  {
    date: "2014",
    title: "Building a Community of Home Cooks",
    content:
      "As interest grew, so did the platform. We introduced video recipes, tips from real home chefs, and opened our doors to community-submitted creations—turning Food Fusion into a shared culinary space.",
  },
  {
    date: "2018",
    title: "Redefining Culinary Creativity",
    content:
      "Food Fusion embraced the idea that cooking is an art anyone can master. We expanded into fusion cuisines, visual storytelling, and encouraged experimentation in the kitchen through workshops and recipe challenges.",
  },
  {
    date: "2024",
    title: "More Than Recipes — A Culinary Movement",
    content:
      "Today, Food Fusion is a global community inspiring millions to rediscover the joy of cooking at home. We continue to promote culinary creativity, food education, and the emotional connection shared over meals.",
  },
];

const TimeLine = () => {
  return (
    <section className="bg-ter px-5 py-32">
      <div className="container mx-auto">
        <h1 className="text-sec manrope mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl">
          Food Fusion: Our Culinary Philosophy
        </h1>
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="bg-ter absolute left-2 top-4"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="bg-foreground absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full" />
              <h4 className="rounded-xl text-txt inter py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md -left-34 text-muted-foreground inter top-3 rounded-xl tracking-tight xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-5 border-none bg-ter shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose inter dark:prose-invert text-txt"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TimeLine };