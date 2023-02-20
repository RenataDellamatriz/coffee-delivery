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

export function CheckoutCoffeeCard() {
  const { order, availableCoffees } = useContext(CoffeesContext);
  const [coffees, setCoffees] = useState<CoffeeCardProps[]>()

  useEffect(() => {
    async function getCoffeeData() {
      const coffeeInfo = await fetchCoffeeData();
      setCoffees(coffeeInfo);
    }
    getCoffeeData();
  }, []);

  console.log(JSON.stringify(coffees))
  return (
    <>
      {order?.map((coffee, index) => {
        return (
          <CardContainer key={coffee.id}>
            <MainContent>
              <img src={coffee.image} alt="" />
              <div>
                <Title>{coffee.coffeeTitle}</Title>

                <Footer>
                  {/* <Buy orderedCoffee={coffee} /> */}
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
      })}
    </>
  );
}
