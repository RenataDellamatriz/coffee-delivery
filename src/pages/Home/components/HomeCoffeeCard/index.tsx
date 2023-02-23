import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";
import { Buy } from "../../../../components/Buy";

import {
  Tag,
  Description,
  Title,
  Price,
  CardContainer,
  Footer,
  TagContainer,
} from "./styles";
import { CoffeeCardProps } from "../../../../@types/types/global";


export function HomeCoffeeCard() {
  const { availableCoffees, order } = useContext(CoffeesContext);


  const price  = availableCoffees.map(coffee => { return Number(coffee.price.replace(',', '.'))})  

  const quantity = order.map(coffee => { return coffee.quantity})

  

   return (
    <>
      {availableCoffees?.map((coffee) => {
        return (
          <CardContainer key={coffee.id}>
            <img src={coffee.image} alt="" />

            <TagContainer>
              {coffee.tag.map((item, index) => {
                return <Tag key={index}>{item.toUpperCase()}</Tag>;
              })}
            </TagContainer>
            <div>
              <Title>{coffee.name}</Title>

              <Description>{coffee.description}</Description>

              <Footer>
                <Price>
                  <span>R$</span>
                  <span>{Number(coffee.price.replace(',', '.')).toFixed(2)}</span>
                </Price>

                <Buy coffee={coffee}/>
              </Footer>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
}
