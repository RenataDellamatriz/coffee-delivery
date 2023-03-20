import { produce } from 'immer'
import { Coffee } from '../@types/types/global'
import { RegisterFormValidationData } from '../pages/Checkout'
import { ActionTypes } from './actions'

export interface CoffeeOrder {
  billing: RegisterFormValidationData
  order: Coffee[]
}

export interface AvailableCoffees {
  coffees: Coffee[]
}

export function coffeeReducer(state: CoffeeOrder, action: any) {
  switch (action.type) {
    case ActionTypes.UPDATE_ORDER:
      return produce(state, (draft) => {
        const selectedCoffeeIdx = draft.order
          .map((item) => item.id)
          .indexOf(action.payload.coffee.id)
        if (selectedCoffeeIdx === -1) {
          draft.order.push(action.payload.coffee)
        } else {
          draft.order[selectedCoffeeIdx].quantity =
            action.payload.coffee.quantity
        }
      })

    case ActionTypes.CREATE_NEW_BILLING:
      return produce(state, (draft) => {
        draft.billing = action.payload
      })

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const filteredCoffees = state.order.filter(
          (item) => item.id !== action.payload.coffee.id,
        )

        draft.order = filteredCoffees
      })

    case ActionTypes.RESET_ORDER:
      return produce(state, (draft) => {
        draft.order.length = 0
      })

    default:
      return state
  }
}
