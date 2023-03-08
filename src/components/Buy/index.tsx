import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Coffee} from "../../@types/types/global";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import {
  AddCoffeeCartButton,
  AddQuantityButton,
  BuyContainer,
  QuantityInputContainer,
  RemoveQuantityButton,
} from "./styles";

export function Buy({
  coffee,
  autoUpdate,
}: {
  coffee: Coffee;
  autoUpdate?: boolean;
}) {
  const { updateCoffee, order, deleteItem } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(getOrderQuantity(coffee));

  function getOrderQuantity(coffee: Coffee) {
    const coffeeOrder = order?.find((item) => item.id === coffee.id);
    if (coffeeOrder) {
      return coffeeOrder.quantity;
    } else {
      return 0;
    }
  }

  function handleDecrement() {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (autoUpdate) {
        updateCoffee({
          ...coffee,
          quantity: newQuantity,
        });
      }
      if (newQuantity === 0) {
        deleteItem(coffee);
      }
    }
  }

  function handleIncrement() {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (autoUpdate) {
        updateCoffee({
          ...coffee,
          quantity: newQuantity,
        });
      }
    }
  }

  return (
    <BuyContainer>
      <QuantityInputContainer>
        <RemoveQuantityButton type="button" onClick={handleDecrement}>
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
        <AddQuantityButton type="button" onClick={handleIncrement}>
          <Plus weight="bold" />
        </AddQuantityButton>
      </QuantityInputContainer>
      {window.location.pathname === "/" ? (
        <AddCoffeeCartButton
          onClick={() =>
            updateCoffee({
              ...coffee,
              name: coffee.name,
              id: coffee.id,
              quantity: quantity,
            })
          }
          title="Comprar"
        >
          <ShoppingCartSimple weight="fill" />
        </AddCoffeeCartButton>
      ) : null}
    </BuyContainer>
  );
}
