import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "uuid";
import { Todo } from "../redux-old/interface";

const todosInitialState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    edit: (state, { payload }: PayloadAction<{ id: string; desc: string }>) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) todoToEdit.desc = payload.desc;
    },
  },
});
