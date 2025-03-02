import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./todoTypes";
import { getTodos } from "./todoThunks";

interface IntervalState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: IntervalState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    resetTodos(state) {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.error = action.payload || null;
      state.loading = false;
    });
  },
});

export default todoSlice.reducer;

export const { setTodos, resetTodos } = todoSlice.actions;
