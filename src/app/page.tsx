import { Button } from "@/src/components/ui/button";
import MainSection from "../components/home/Hero";
import { fetchProperties } from "./supabase/test";
import Image from "next/image";
import { Property } from "@/src/types";
import PropertyCarousel from "../components/home/PropertyCarousel";
import { SearchForm } from "../components/home/SearchForm";
import Subtitle from "../components/shared/Subtitle";
import TutorialSection from "../components/home/TutorialSection";
export default async function Home() {
  const data: Property[] = await fetchProperties();

  return (
    <div className=" flex flex-col gap-20">
      <MainSection />
      <SearchForm />
      <div className="flex flex-col gap-8">
        <Subtitle className="text-2xl">
          <h2>Hot Right now 🔥 </h2>
        </Subtitle>
        <PropertyCarousel />
      </div>
      <TutorialSection />
    </div>
  );
}
