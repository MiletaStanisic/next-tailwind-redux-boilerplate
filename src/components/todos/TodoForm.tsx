"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useToast } from "@/hooks/use-toast";
import { useTodoStore } from "@/store/hooks/todoStore";
import { setTodos } from "@/store/features/todo/todoSlice";

export default function TodoForm() {
  const dispatch = useAppDispatch();
  const { todos } = useTodoStore();
  const { toast } = useToast();

  const formSchema = z.object({
    text: z
      .string()
      .min(1, "Must be at least 1 character long")
      .max(50, "Must be 50 characters or less"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(setTodos([...todos, values]));
    form.reset();
    toast({
      title: "Todo added",
      description: "Your todo has been added successfully!",
      duration: 3000,
      variant: "success",
    });
  }

  return (
    <div className="shadow-lg p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Add Todo</h1>
      <hr className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Enter todo..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-4" variant="default" type="submit">
            Add
          </Button>
        </form>
      </Form>
    </div>
  );
}
