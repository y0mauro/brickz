import { Property } from '@/src/types';
import { Badge } from './badge';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
const PropertyCard = ({ property }: { property: Property }) => {
    return (
        <Card key={property.id} className=''>
            <CardHeader>
                <CardTitle>{property.name}</CardTitle>
                <CardDescription>{property.location}</CardDescription>
            </CardHeader>

            <CardContent>
                <Image
                    src={"/mockhouse.jpeg"}
                    alt={property.name}
                    width={400}
                    height={300}
                />  </CardContent>
                <CardFooter>
                    <Badge className="">{property.price}</Badge>
                    <Badge className="">{property.ROI}</Badge>
                </CardFooter>
          
        </Card>
    );
}

export default PropertyCard;