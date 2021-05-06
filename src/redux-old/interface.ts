import { CREATE_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO, SELECT_TODO } from "./types";

export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export interface EditTodoActionTYpe {
  type: typeof EDIT_TODO;
  payload: { id: string; desc: string };
}

export interface ToggleActionType {
  type: typeof TOGGLE_TODO;
  payload: { id: string; isComplete: boolean };
}

export interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: { id: string };
}

export interface SelectTodoActionType {
  type: typeof SELECT_TODO;
  payload: { id: string };
}
