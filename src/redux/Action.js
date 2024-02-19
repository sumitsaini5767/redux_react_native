import { ADD_ITEM, REMOVE_ITEM } from "./Constants";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
}
