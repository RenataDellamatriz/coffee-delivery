import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeCardProps } from "../../../../@types/types/global";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";

import { fetchCoffeeData } from "../../../../services/api";
import { Buy } from "../../../Home/components/Buy";
import {
  CardContainer,
  Footer,
  MainContent,
  Price,
  RemoveButton,
  Title,
} from "./styles";

export function CheckoutCoffeeCard({coffee}: {coffee: CoffeeCardProps}) {
  const { order } = useContext(CoffeesContext);

  console.log(order);
  return (
    <CardContainer key={coffee.id}>
      <MainContent>
        <img src={coffee.image} alt="" />
        <div>
          <Title>{coffee.name}</Title>

          <Footer>
            <Buy coffee={coffee} />
            <RemoveButton>
              <Trash /> REMOVER
            </RemoveButton>
          </Footer>
        </div>
      </MainContent>
      <Price>
        <span>
          R$
          {coffee.price}
        </span>
      </Price>
    </CardContainer>
  );
}
