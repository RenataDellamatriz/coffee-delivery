import { CoffeeCardProps } from '../@types/types/global'


export enum ActionTypes {
  UPDATE_ORDER = 'UPDATE_ORDER',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_COFFEES = 'SET_COFFEES'
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
        image: coffee.image
      }
    },
  }
}

export function removeCoffeeAction(coffeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeId,
    },
  }
}
