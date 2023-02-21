import { produce } from "immer";
import { CoffeeCardProps } from "../@types/types/global";
import { ActionTypes } from "./actions";


export interface CoffeeOrder {
  order: CoffeeCardProps[];
}

export interface AvailableCoffees {
  coffees: CoffeeCardProps[];
}

export function coffeeReducer(state: CoffeeOrder, action: any) {
  switch (action.type) {
    case ActionTypes.UPDATE_ORDER:
      return produce(state, (draft) => {
        const selectedCoffeeIdx = draft.order
          .map((i) => i.id)
          .indexOf(action.payload.coffee.id);
        if (selectedCoffeeIdx === -1) {
          draft.order.push(action.payload.coffee);
        } else {
          draft.order[selectedCoffeeIdx].quantity =
            action.payload.coffee.quantity;
        }
      });

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const selectedCoffeeIdx = state.order.findIndex(
          (element) => element.id === action.payload.id
        );

        if (selectedCoffeeIdx !== -1) {
          draft.order.splice(selectedCoffeeIdx, 1);
        }
      });
    default:
      return state;
  }
}
