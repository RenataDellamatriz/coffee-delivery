import { ShoppingCartSimple } from "phosphor-react";
import { ShoppingCartContainer } from "./styles";

interface AddCoffeeCartButtonProps {
  onClick: () => void;  
  }

export function AddCoffeeCartButton({onClick}: AddCoffeeCartButtonProps) {
  return (
    <ShoppingCartContainer onClick={onClick} title="Checkout" >
      <ShoppingCartSimple weight="fill" />
    </ShoppingCartContainer>
  );
}
