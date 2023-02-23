import { CoffeeCardProps } from "../@types/types/global";

export enum ActionTypes {
  UPDATE_ORDER = "UPDATE_ORDER",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  // DELETE_COFFEE_WITH_ZERO_QUANTITY = "DELETE_COFFEE_WITH_ZERO_QUANTITY",
}

export function updateCoffeeAction(coffee: CoffeeCardProps) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      coffee: {
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        quantity: coffee.quantity,
        image: coffee.image,
      },
    },
  };
}

export function removeCoffeeAction(coffee: CoffeeCardProps) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee: {
        id: coffee.id,
      },
    },
  };
}

// export function deleteCoffeeWithZeroQuantityAction(coffee: CoffeeCardProps){
//   return {
//     type: ActionTypes.DELETE_COFFEE_WITH_ZERO_QUANTITY,
//     payload: {
//       coffee: {
//         quantity: coffee.quantity
//       }
//     }
//   }
// }
