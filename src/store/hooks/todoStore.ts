import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useTodoStore = () => {
  const state = useSelector((state: RootState) => state.todo);
  return state;
};
