import { Property } from "@/src/types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const PropertyCard = ({ property }: { property: Property }) => {
  const price = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Card key={property.id} className="">
      <CardHeader>
        <CardTitle>{property.location}</CardTitle>
        <CardDescription>{property.name}</CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <Image
          src={"/mockhouse.jpeg"}
          alt={property.name}
          width={400}
          height={300}
        />{" "}
      </CardContent>
      <CardFooter className="w-full p-4 h-full flex justify-between font-semibold text-sm text-center">
        <div>{price}</div>
        <Badge className="text-sm  bg-primary/20 border-primary border-2 text-primary ">
          {property.ROI}%
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
