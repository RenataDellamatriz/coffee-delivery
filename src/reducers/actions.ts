import { Quantity } from './reducer'

export enum ActionTypes {
  ADD_QUANTITY = 'ADD_QUANTITY',
  REMOVE_QUANTITY = 'REMOVE_QUANTITY',
}

export function addQuantity(newQuantity: Quantity) {
  return {
    type: ActionTypes.ADD_QUANTITY,
    payload: {
      newQuantity,
    },
  }
}
