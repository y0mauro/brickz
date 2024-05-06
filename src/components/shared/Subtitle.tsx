import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
};

function Subtitle({ children, className, isHero }: Props) {
  const baseClass =
    " text-2xl  md:text-3xl font-medium justify-center items-center w-full";
  const heroClass = isHero ? "  md:text-4xl font-semibold" : "";

  return (
    <div className={`${baseClass} ${heroClass} ${className || ""}`}>
      {children}
    </div>
  );
}

export default Subtitle;
