import { coffeeReducer } from "../reducers/reducer";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  createNewBillingAction,
  removeCoffeeAction,
  updateCoffeeAction,
} from "../reducers/actions";
import { Coffee } from "../@types/types/global";
import { fetchCoffeeData } from "../services/coffeeApi/api";
import { RegisterFormValidationData } from "../pages/Checkout";

interface CoffeeContextType {
  availableCoffees: Coffee[];
  order: Coffee[];
  billing: RegisterFormValidationData;
  // setBilling: (data: RegisterFormValidationData) => void;
  createNewOrder: (data: RegisterFormValidationData) => void;
  updateCoffee: (data: Coffee) => void;
  deleteItem: (data: Coffee) => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}


export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [availableCoffees, setAvailableCoffes] = useState<Coffee[]>([]);

  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      order: [],
      billing: {
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        uf: "",
        paymentMethod: "",
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffees-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  useEffect(() => {
    const stateJson = JSON.stringify(coffeeState);

    localStorage.setItem("@coffee-delivery:coffees-state-1.0.0", stateJson);
  }, [coffeeState]);

  useEffect(() => {
    async function getCoffeeData() {
      const coffee = await fetchCoffeeData();
      setAvailableCoffes(coffee);
    }
    getCoffeeData();
  }, []);

  function createNewOrder(data: RegisterFormValidationData) {
    const newOrder: RegisterFormValidationData = {
      cep: data.cep,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.city,
      uf: data.uf,
      paymentMethod: data.paymentMethod
    };
    dispatch(createNewBillingAction(newOrder));
  }

  function updateCoffee(data: Coffee) {
    const newCoffee: Coffee = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      image: data.image,
      tag: data.tag,
    };

    dispatch(updateCoffeeAction(newCoffee));
  }

  function deleteItem(data: Coffee) {
    dispatch(removeCoffeeAction(data));
  }

  return (
    <CoffeeContext.Provider
      value={{
        availableCoffees,
        order: coffeeState.order,
        updateCoffee,
        deleteItem,
        billing: coffeeState.billing,
        createNewOrder,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
