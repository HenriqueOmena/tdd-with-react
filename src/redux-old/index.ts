import { v1 as uuid } from "uuid";
import {
  CreateTodoActionType,
  EditTodoActionTYpe,
  ToggleActionType,
  DeleteTodoActionType,
  SelectTodoActionType,
} from "./interface";
import { CREATE_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO, SELECT_TODO } from "./types";

export const createTodoActionCreator = ({ desc }: { desc: string }): CreateTodoActionType => ({
  type: CREATE_TODO,
  payload: {
    id: uuid(),
    desc,
    isComplete: false,
  },
});

export const editTodoActionCreator = ({
  id,
  desc,
}: EditTodoActionTYpe["payload"]): EditTodoActionTYpe => ({
  type: EDIT_TODO,
  payload: {
    id,
    desc,
  },
});

export const toogleTodoActionCreator = ({ id, isComplete }: ToggleActionType["payload"]) => ({
  type: TOGGLE_TODO,
  payload: { id, isComplete },
});

export const deleteTodoActionCreator = ({
  id,
}: DeleteTodoActionType["payload"]): DeleteTodoActionType => ({
  type: DELETE_TODO,
  payload: { id },
});

export const selectTodoActionCreator = ({
  id,
}: SelectTodoActionType["payload"]): SelectTodoActionType => ({
  type: SELECT_TODO,
  payload: { id },
});
