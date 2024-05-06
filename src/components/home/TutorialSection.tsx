import React from "react";
import Subtitle from "../shared/Subtitle";
import { Search, Scale, Info, Send } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

// browse worldwide properties with interesting ROI
// compare with other investment options
// find all the information you need to make an informed decision
// contact the property owner directly
type Props = {};

const features = [
  {
    icon: <Search />,
    title: "Browse properties",
    description: "Browse worldwide properties with interesting ROI",
  },
  {
    icon: <Scale />,
    title: "Compare investments",
    description: "Compare with other investment options",
  },
  {
    icon: <Info />,
    title: "Get informed",
    description:
      "Find all the information you need to make an informed decision",
  },
  {
    icon: <Send />,
    title: "Contact owners",
    description: "Contact the property owner directly",
  },
];

function TutorialSection({}: Props) {
  return (
    <div id="features" className="w-full bg-primary/20 p-3 md:p-4">
      <Subtitle>
        How does <span className="font-bold  text-primary">Brickz</span> work?
      </Subtitle>{" "}
      <div className="   grid  grid-cols-2 w-full  md:grid-cols-2  justify-around   md:w-2/4 m-auto  h-full gap-2 items-center  mt-5">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className=" md:p-5 bg-transparent  border-0 shadow-none "
          >
            <CardHeader className="p-1 md:p-6">
              <CardTitle className="flex gap-2  text-xl md:text-2xl  items-center   justify-center ">
                <span className="hidden md:block">{feature.icon}</span>{" "}
                <span> {feature.title} </span>
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TutorialSection;
