import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const Events = () => {
  const services = [
    {
      title: "Cooking With Kids",
      description: "Fun and easy meals the whole family can enjoy.",
      image: "https://i.pinimg.com/736x/b0/3f/92/b03f92b7ab93857cfc7b40b1c3a1e085.jpg",
      link: "#",
    },
    {
      title: "Cooking With Ricardo",
      description: "Delicious recipes and expert tips from Ricardo.",
      image: "https://i.pinimg.com/736x/a9/9c/e8/a99ce81df391b420d7852a14d0aa0af7.jpg",
      link: "#",
    },
    {
      title: "Bardaner Real Estate",
      description: "Your trusted guide in finding the perfect home.",
      image: "https://i.pinimg.com/736x/7b/b6/5c/7bb65c8f01597cc7106bf6557f3489f1.jpg",
      link: "#",
    },
    {
      title: "The Taste Of New",
      description: "Discover bold flavors in every exciting bite.",
      image: "https://i.pinimg.com/736x/9c/98/9d/9c989d614dc9242d67a84494b8b9a490.jpg",
      link: "#",
    },
    {
      title: "ASMA Cooking Class",
      description: "Delicious indian recipes and expert tips from ASMA.",
      image: "https://i.pinimg.com/736x/93/1d/c1/931dc1021508fd0219dd32050811d051.jpg",
      link: "#",
    }
  ]

  return (
    <section className="py-12 bg-ter">
      <div className="container min-w-full flex flex-col items-center text-center">
        <h1 className="my-6 text-3xl pb-7 font-bold text-sec text-pretty manrope sm:text-4xl lg:text-5xl">
          Our Upcoming Events
        </h1>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-2">
                  <Card className="overflow-hidden bg-pri">
                    <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto aspect-[3/4] sm:aspect-[9/16] object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg sm:text-xl font-bold manrope mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 inter mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <a
                        href={service.link}
                        className="text-blue-500 manrope font-bold hover:underline text-sm sm:text-base"
                      >
                        Learn More
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-7">
            <CarouselPrevious className="static bg-pri hover:bg-pri/80 text-gray-800 w-10 h-10 rounded-none" />
            <CarouselNext className="static bg-pri hover:bg-pri/80 text-gray-800 w-10 h-10 rounded-none" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Events