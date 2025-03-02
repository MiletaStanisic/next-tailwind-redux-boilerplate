import { Todo } from "@/store/features/todo/todoTypes";
import React from "react";
import { Button } from "../ui/button";

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <div className="shadow-lg p-4 rounded-lg">
      <h1 className="text-xl font-bold truncate">{todo.text}</h1>
      <hr className="my-4" />
      <Button className="w-full" onClick={onDelete} variant="destructive">
        Delete
      </Button>
    </div>
  );
}

export default TodoItem;
