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
    <div id="features" className="w-3/4 mx-auto">
      <Subtitle>
        How does <span className="font-bold  text-primary">Brickz</span> work?
      </Subtitle>{" "}
      <div className="   grid  grid-cols-1    md:grid-cols-2  justify-around    h-full gap-2 items-center mt-5">
        {features.map((feature, idx) => (
          <Card key={idx} className="p-5">
            <CardHeader>
              <CardTitle className="flex gap-2 items-center  justify-center ">
                {" "}
                {feature.icon} {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TutorialSection;
