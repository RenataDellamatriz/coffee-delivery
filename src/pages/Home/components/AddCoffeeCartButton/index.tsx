import { ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";
import { ShoppingCartContainer } from "./styles";

export function AddCoffeeCartButton({ onClick }: { onClick: () => void }) {
  return (
    <ShoppingCartContainer onClick={onClick} title="Checkout">
      <ShoppingCartSimple weight="fill" />
    </ShoppingCartContainer>
  );
}
