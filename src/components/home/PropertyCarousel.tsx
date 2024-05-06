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
    <Carousel className="w-3/4 m-auto">
      <CarouselContent className="">
        {data.map((property) => (
          <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/4">
            <PropertyCard key={property.id} property={property} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PropertyCarousel;
