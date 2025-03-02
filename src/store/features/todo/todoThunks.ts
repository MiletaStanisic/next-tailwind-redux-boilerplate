import { createAsyncThunk } from "@reduxjs/toolkit";
import * as todosAPI from "@/api/todo";
import { APIError } from "@/types/api";
import { Todo } from "./todoTypes";

export const getTodos = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  "todo/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const result = await todosAPI.getTodos();
      return result;
    } catch (error) {
      const err: APIError = error as APIError;
      return rejectWithValue(err.message);
    }
  }
);
