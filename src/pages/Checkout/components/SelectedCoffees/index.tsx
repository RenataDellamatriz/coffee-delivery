import {
  CartInfoContainer,
  CartInfoWrapper,
  CartTotalInfoWrapper,
  CoffeeSelectedContainer, 
  Title,
} from "./styles";
import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard/index";
import { ReactNode, useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { EmptyCoffees } from "../EmptyCoffees";

export function SelectedCoffees({children}: {children: ReactNode}) {
  const { order } = useContext(CoffeeContext);

  const totalItemsPrice = order.reduce((acc, coffee) => {
    return acc + coffee.quantity * Number(coffee.price.replace(",", "."));
  }, 0);

  const deliveryPrice = 3.5;

  const totalPrice = totalItemsPrice + deliveryPrice;

  return (
    <div>
      <Title>Cafés selecionados</Title>
      <CoffeeSelectedContainer>
        {order.length >= 1 ? (
          order?.map((coffee) => {
            return <CheckoutCoffeeCard coffee={coffee} key={coffee.id} />;
          })
        ) : (
          <EmptyCoffees />
        )}
        {order.length >= 1 && (
          <>
            <CartInfoContainer>
              <CartInfoWrapper>
                <span>Total de itens</span>
                <span>R$ {totalItemsPrice.toFixed(2).replace(".", ",")}</span>
              </CartInfoWrapper>
              <CartInfoWrapper>
                <span>Entrega</span>
                <span>R$ {deliveryPrice.toFixed(2).replace(".", ",")}</span>
              </CartInfoWrapper>
              <CartTotalInfoWrapper>
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
              </CartTotalInfoWrapper>
              {children}
            </CartInfoContainer>            
          </>
        )}
      </CoffeeSelectedContainer>
    </div>
  );
}
