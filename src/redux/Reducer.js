import { ADD_ITEM, REMOVE_ITEM } from "./Constants";
const initalState = 0;

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state + action.payload;
      break;
    case REMOVE_ITEM:
      return state - action.payload;
      break;

    default:
      return state;
      break;
  }
};
