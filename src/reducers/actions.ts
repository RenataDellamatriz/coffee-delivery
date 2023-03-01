import { Coffee } from "../@types/types/global";
import { RegisterFormValidationData } from "../pages/Checkout";

export enum ActionTypes {
  UPDATE_ORDER = "UPDATE_ORDER",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER"
}

export function createNewBillingAction(newBilling: RegisterFormValidationData){
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      cep: newBilling.cep,
      street: newBilling.street,
      number: newBilling.number,
      neighborhood: newBilling.neighborhood,
      city: newBilling.city,
      uf: newBilling.uf      
    }
}
}

export function updateCoffeeAction(coffee: Coffee) {
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

export function removeCoffeeAction(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee: {
        id: coffee.id,
      },
    },
  };
}

