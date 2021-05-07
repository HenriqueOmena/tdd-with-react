import uuid from "uuid";
import { Todo, TodoActionsTypes } from "./interface";

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
    case value:
      break;

    default:
      break;
  }
};
