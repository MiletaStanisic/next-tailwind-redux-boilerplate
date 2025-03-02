"use client";

import React from "react";
import { useTodoStore } from "@/store/hooks/todoStore";
import TodoItem from "./TodoItem";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { setTodos } from "@/store/features/todo/todoSlice";
import { useToast } from "@/hooks/use-toast";

function TodoList() {
  const dispatch = useAppDispatch();
  const { todos } = useTodoStore();
  const { toast } = useToast();

  const onDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    dispatch(setTodos(newTodos));

    toast({
      title: "Todo deleted",
      description: "Your todo has been deleted successfully!",
      duration: 3000,
      variant: "success",
    });
  };

  return (
    <div className="shadow-lg p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Todos</h1>
      <hr className="my-4" />
      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-8">No todos found</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
