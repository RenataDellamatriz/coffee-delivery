import { CoffeeCardProps } from '../@types/types/global'
import { Coffee} from './reducer'

export enum ActionTypes {
  UPDATE_ORDER = 'UPDATE_ORDER',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_COFFEES = 'SET_COFFEES'
}

export function updateCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      coffee,
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
