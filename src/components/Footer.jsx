import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4">
      <div className=" p-3 mx-auto flex  md:flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Brickz</h2>
          <p className="text-sm hidden md:block ">
            Discover the best real estate investment opportunities.
          </p>
        </div>
        <nav className="flex flex-wrap  gap-1 justify-center mt-4 md:mt-0">
          <Button variant={"link"} className="text-white">
            <Link href="/about" className="m-2">
              About Us
            </Link>
          </Button>

          <Button variant={"link"} className="text-white">
            <Link href="/contact" className="m-2">
              Contact
            </Link>
          </Button>

          <Button variant={"link"} className="text-white">
            <Link href="/terms" className="m-2">
              Terms
            </Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
