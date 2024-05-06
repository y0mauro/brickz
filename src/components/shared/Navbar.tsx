import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="bg-primary">
      <div
        className="px-3  py-4 flex justify-between items-center h-fit text-white  relative shadow-sm w-3/4 m-auto"
        role="navigation"
      >
        {/* Left Section for Logo */}
        <div className="">
          <Logo />
        </div>

        {/* Center Section for Links */}
        <div className="hidden md:flex">
          <div className=" antialiased">
            <Link href="#tutorial">
              <Button variant="link" className="text-white " size="sm">
                How does Brickz work?
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="link" className="text-white" size="sm">
                Contact us
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="default" className="" size="sm">
                Join
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
