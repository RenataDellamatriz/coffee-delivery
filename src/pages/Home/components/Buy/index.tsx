import { Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeCardProps } from "../../../../@types/types/global";

import { CoffeesContext } from "../../../../contexts/CoffeeContext";
import { Coffee } from "../../../../reducers/reducer";
import { AddCoffeeCartButton } from "../AddCoffeeCartButton";
import {
  AddQuantityButton,
  BuyContainer,
  QuantityInputContainer,
  RemoveQuantityButton,
} from "./styles";

export function Buy({ coffee, orderedCoffee }: { coffee: CoffeeCardProps , orderedCoffee: Coffee}) {
  const { updateCoffee, order } = useContext(CoffeesContext);
  const [quantity, setQuantity] = useState(getOrderQuantity(coffee));

  function getOrderQuantity(coffee: CoffeeCardProps) {
    const coffeeOrder = order?.find((item) => item.id === coffee.id);
    if (coffeeOrder) {
      return coffeeOrder.quantity;
    } else {
      return 0;
    }
  }

  function handleDecrement() {
    if (quantity > 0) {
      setQuantity((quantity) => {
        return quantity - 1;
      });
    }
  }

  function handleIncrement() {
    if (quantity < 10) {
      setQuantity((quantity) => {
        return quantity + 1;
      });
    }
  }
  console.log(order);

  return (
    <BuyContainer>
      <QuantityInputContainer>
        <RemoveQuantityButton onClick={handleDecrement}>
          <Minus weight="bold" />
        </RemoveQuantityButton>
        <input
          type="number"
          disabled
          size={2}
          min={0}
          max={10}
          value={quantity}
        />
        <AddQuantityButton onClick={handleIncrement}>
          <Plus weight="bold" />
        </AddQuantityButton>
      </QuantityInputContainer>
      <AddCoffeeCartButton
        onClick={() =>
          updateCoffee({
            ...coffee,
            coffeeTitle: coffee.name,
            id: coffee.id,
            quantity: quantity,
          })
        }
      />
    </BuyContainer>
  );
}
