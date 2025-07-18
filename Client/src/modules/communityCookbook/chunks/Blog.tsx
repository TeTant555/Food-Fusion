import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface BlogProps {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Blog = ({
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts = [
    {
      id: "post-1",
      title: "Sharing Family Favourites: Recipes from Our Community",
      summary:
        "Explore heartwarming recipes submitted by our community members. From traditional dishes to modern twists, each one comes with a story and a flavour worth trying.",
      label: "Community Cookbook",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://plus.unsplash.com/premium_photo-1683707120070-0c8c77bf44b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://plus.unsplash.com/premium_photo-1683707120070-0c8c77bf44b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Recipes", "Community", "Cooking"],
    },
    {
      id: "post-2",
      title: "Tips & Traditions: Culinary Wisdom from Home Kitchens",
      summary:
        "Discover handy kitchen tips, cooking hacks, and timeless traditions shared by home cooks from the Food Fusion community.",
      label: "Community Cookbook",
      author: "Emily Watson",
      published: "22 Feb 2024",
      url: "https://plus.unsplash.com/premium_photo-1682092170538-9ebcb3a09ac1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://plus.unsplash.com/premium_photo-1682092170538-9ebcb3a09ac1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Cooking Tips", "Traditions", "Community"],
    }    
  ],
}: BlogProps) => {
  return (
    <section className="py-20 bg-pri">
      <div className="container min-w-full px-5 flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-sec text-3xl manrope font-semibold text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto inter max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs inter tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl text-sec manrope font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 inter text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 inter flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 inter flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span className="text-sec">Read more</span>
                      <ArrowRightIcon className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-16/9 overflow-clip shadow-xl rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };
