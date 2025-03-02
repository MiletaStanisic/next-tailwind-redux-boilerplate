import { api } from "./axios";
import { QueryParams } from "@/types/api";
import { Todo } from "@/store/features/todo/todoTypes";

export const getTodos = async (params?: QueryParams): Promise<Todo[]> => {
  const {
    data: { result },
  } = await api.get("/todos", params);
  return result;
};
