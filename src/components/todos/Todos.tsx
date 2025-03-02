import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todos() {
  return (
    <div className="p-4 grid grid-cols-3 gap-4 ">
      <div className="col-span-1">
        <TodoForm />
      </div>
      <div className="col-span-2">
        <TodoList />
      </div>
    </div>
  );
}

export default Todos;
