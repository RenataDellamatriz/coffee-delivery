import {
  CartInfoContainer,
  CartInfoWrapper,
  CartTotalInfoWrapper,
  CoffeeSelectedContainer,
  ConfirmButton,
  Title,
} from "./styles";
import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard/index";
import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";
import { EmptyCoffees } from "../EmptyCoffees";

export function SelectedCoffees() {
  const { order } = useContext(CoffeesContext);
  
  return (
    <div>
      <Title>Cafés selecionados</Title>
      <CoffeeSelectedContainer>
        {order.length >= 1 ? (
          order?.map((coffee) => {
            return <CheckoutCoffeeCard coffee={coffee} key={coffee.id}/>;
          })
        ) : (
          <EmptyCoffees />
        )}
        <CartInfoContainer>
          <CartInfoWrapper>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </CartInfoWrapper>
          <CartInfoWrapper>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </CartInfoWrapper>
          <CartTotalInfoWrapper>
            <span>Total</span>
            <span>R$ 33,20</span>
          </CartTotalInfoWrapper>
        </CartInfoContainer>

        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </CoffeeSelectedContainer>
    </div>
  );
}
