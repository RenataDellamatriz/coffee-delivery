import { Minus, Plus } from "phosphor-react";
import {
  AddQuantityButton,
  QuantityInputContainer,
  RemoveQuantityButton,
} from "./styles";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";

export function QuantityInput() {
  
  const {order, quantity ,updateCoffee, addQuantity, removeQuantity} = useContext(CoffeesContext)


  function handleInputChange( data : any) {
      if(quantity > 1) {
        return updateCoffee(data)
      }
  }


  return (
    <QuantityInputContainer>
      <RemoveQuantityButton onClick={removeQuantity}>
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
      <AddQuantityButton onClick={addQuantity}>
        <Plus weight="bold" />
      </AddQuantityButton>
    </QuantityInputContainer>
  );
}
