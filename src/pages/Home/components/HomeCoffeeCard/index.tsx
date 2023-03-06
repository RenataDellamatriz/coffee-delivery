import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
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
import { Coffee } from "../../../../@types/types/global";

export function HomeCoffeeCard({ coffee }: { coffee: Coffee }) {
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
            {coffee.price}
          </Price>

          <Buy coffee={coffee} />
        </Footer>
      </div>
    </CardContainer>
  );
}
