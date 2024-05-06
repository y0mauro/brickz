"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  city: z.string().min(2, {
    message: "City  must be at least 2 characters.",
  }),
});

export function SearchForm() {
  const form = useForm();

  // ...

  return (
    <Form {...form}>
      <form className="   md:w-1/4 mx-auto flex items-center justify-center gap-3">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder=" Search for a City.. " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="m-0" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
