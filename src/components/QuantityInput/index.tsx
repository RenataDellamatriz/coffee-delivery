import { Minus, Plus } from "phosphor-react";
import {
  AddQuantityButton,
  QuantityInputContainer,
  RemoveQuantityButton,
} from "./styles";
import { useState } from "react";

export function QuantityInput({ value }: { value: number }) {
  const [quantity, setQuantity] = useState(value);

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

  function handleInputChange(event: any) {
    setQuantity(event.target.value);
  }

  return (
    <QuantityInputContainer>
      <RemoveQuantityButton onClick={handleDecrement}>
        <Minus weight="bold" />
      </RemoveQuantityButton>
      <input
        type="number"
        size={2}
        min={0}
        max={10}
        value={quantity}
        onChange={handleInputChange}
      />
      <AddQuantityButton onClick={handleIncrement}>
        <Plus weight="bold" />
      </AddQuantityButton>
    </QuantityInputContainer>
  );
}
