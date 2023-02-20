import { Coffee, CoffeeOrder, coffeeReducer } from "../reducers/reducer";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { updateCoffeeAction } from "../reducers/actions";
import { CoffeeCardProps } from "../@types/types/global";
import { fetchCoffeeData } from "../services/api";

interface CoffeeContextType {  
  availableCoffees: CoffeeCardProps[];
  order: Coffee[];
  updateCoffee: (data: Coffee) => void;
  addNewCoffee?: (data: CoffeeOrder) => void;
  // deleteItem: () => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [availableCoffees, setAvailableCoffes] = useState<CoffeeCardProps[]>([]);
 
  const [coffeeState, dispatch] = useReducer(
    coffeeReducer,
    {
      order: [],
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
 
  function updateCoffee(data: Coffee) {
    const newCoffee: Coffee = {
      id: data.id,
      coffeeTitle: data.coffeeTitle,
      price: data.price,
      quantity: data.quantity,
      image: data.image
    };

    dispatch(updateCoffeeAction(newCoffee));
  }

   
  return (
    <CoffeesContext.Provider
      value={{        
        availableCoffees,
        order: coffeeState.order,
        updateCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
