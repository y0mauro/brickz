
import { Button } from "@/src/components/ui/button";
import MainSection from "./MainSection";
import { fetchProperties } from "./supabase/test";
import Image from 'next/image'
import { Property } from '@/src/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import PropertyCarousel from "../components/PropertyCarousel";
export default async function Home() {
  const data: Property[] = await fetchProperties()




  return (
    <div className=" flex flex-col gap-10"  >
      <MainSection />
      <PropertyCarousel />
    </div>
  );
}
