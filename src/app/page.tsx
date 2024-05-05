import { Button } from "@/src/components/ui/button";
import MainSection from "../components/home/Hero";
import { fetchProperties } from "./supabase/test";
import Image from "next/image";
import { Property } from "@/src/types";
import PropertyCarousel from "../components/home/PropertyCarousel";
import { SearchForm } from "../components/home/SearchForm";
import Fire from "../components/icons/fire";
export default async function Home() {
  const data: Property[] = await fetchProperties();

  return (
    <div className=" flex flex-col gap-10">
      <MainSection />
      <SearchForm />
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-semibold flex  gap-1 justify-center items-center w-full">
          <h2>Hot Right now </h2>
          <span>🔥</span>
        </div>
        <PropertyCarousel />
      </div>
    </div>
  );
}
