import produce from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  coffeeTitle: string
  quantity: number
  price: string
}

interface QuantityState {
  quantitys: Coffee[]
}

export function quantityReducer(state: QuantityState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_QUANTITY:
      return produce(state, (draft) => {
        draft.quantitys.push(action.payload.quantity)
      })
    // case ActionTypes.REMOVE_QUANTITY:
  }
}
