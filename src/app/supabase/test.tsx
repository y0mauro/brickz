import { Property } from "@/src/types";
import { createClient } from "./server";

// Assuming this is your fetch function based on the shared code.
export async function fetchProperties(): Promise<Property[]> {
  console.log("Attempting to fetch data from Supabase...");

  const supabase = createClient(); // Make sure this is correctly initializing Supabase.
  const { data, error } = await supabase.from('property').select('*');

  if (error) {
    console.error('Error fetching data from Supabase:', error);
    throw error;
  }

  console.log('Successfully fetched data from Supabase:', data);
  return data;
}
