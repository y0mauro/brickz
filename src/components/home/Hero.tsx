import React from "react";
import Image from "next/image";
import PropertyCarousel from "./PropertyCarousel";
import Subtitle from "../shared/Subtitle";

const Hero = () => {
  return (
    <div className="">
      <section className="main-section flex  text-center md:text-left  text-pretty items-center justify-center">
        <div>
          <Subtitle isHero={true}>
            Investing made real. Real easy.
            <br />
            <p className="text-center mt-1">
              Real returns with{" "}
              <span className="font-bold  text-primary animate-fade-in  animate-delay-300">
                Brickz!
              </span>
            </p>
          </Subtitle>
        </div>
      </section>
    </div>
  );
};

export default Hero;
