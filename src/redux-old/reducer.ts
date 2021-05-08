import { combineReducers } from "redux";
import uuid from "uuid";
import { SelectTodoActionType, Todo, TodoActionsTypes } from "./interface";
import { CREATE_TODO, DELETE_TODO, EDIT_TODO, SELECT_TODO, TOGGLE_TODO } from "./types";

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

const todosReducer = (state: Todo[] = todosInitialState, action: TodoActionsTypes) => {
  switch (action.type) {
    case CREATE_TODO: {
      return [...state, action.payload];
    }
    case EDIT_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, desc: action.payload.desc } : todo
      );
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isComplete: action.payload.isComplete } : todo
      );
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return {
        state,
      };
  }
};

type SelectedTodoActionsTypes = SelectTodoActionType;
const selectedTodoReducer = (state: string | null = null, action: SelectedTodoActionsTypes) => {
  switch (action.type) {
    case SELECT_TODO: {
      return action.payload.id;
    }
    default: {
      return state;
    }
  }
};

const counterReducer = (state: number = 0, action: TodoActionsTypes) => {
  switch (action.type) {
    case CREATE_TODO: {
      return state + 1;
    }
    case EDIT_TODO: {
      return state + 1;
    }
    case TOGGLE_TODO: {
      return state + 1;
    }
    case DELETE_TODO: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};
