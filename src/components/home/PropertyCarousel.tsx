import { fetchProperties } from "../../app/supabase/test";
import PropertyCard from "../shared/PropertyCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const PropertyCarousel = async () => {
  const data = await fetchProperties();
  return (
    <Carousel
      className="  w-5/6  md:w-4/6  m-auto"
      opts={{
        slidesToScroll: "auto",
      }}
    >
      <CarouselContent className="">
        {data.map((property) => (
          <CarouselItem
            key={property.id}
            className="   basis-1/2   md:basis-3/4 lg:basis-1/4"
          >
            <PropertyCard key={property.id} property={property} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
};

export default PropertyCarousel;
