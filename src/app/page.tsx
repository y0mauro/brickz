
import { Button } from "@/src/components/ui/button";
import MainSection from "./MainSection";
import { fetchProperties } from "./supabase/test";
import Image from 'next/image'
import { Property } from '@/src/types'
import PropertyCarousel from "../components/molecules/PropertyCarousel";
import { SearchForm } from "../components/molecules/SearchForm";
export default async function Home() {
  const data: Property[] = await fetchProperties()




  return (
    <div className=" flex flex-col gap-10"  >
      <MainSection />
      <SearchForm />
      <PropertyCarousel />
    </div>
  );
}
