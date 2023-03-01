import { Trash } from "phosphor-react";
import { useContext } from "react";
import { Coffee } from "../../../../@types/types/global";
import { Buy } from "../../../../components/Buy";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  CardContainer,
  Footer,
  MainContent,
  Price,
  RemoveButton,
  Title,
} from "./styles";

export function CheckoutCoffeeCard({ coffee }: { coffee: Coffee }) {
  const { deleteItem } = useContext(CoffeeContext);

  const priceMultipliedByQuantity = coffee.quantity * Number(coffee.price.replace(",", "."));

  

  return (
    <CardContainer key={coffee.id}>
      <MainContent>
        <img src={coffee.image} alt="" />
        <div>
          <Title>{coffee.name}</Title>

          <Footer>
            <Buy coffee={coffee} autoUpdate/>
            <RemoveButton onClick={() => deleteItem(coffee)}>
              <Trash /> REMOVER
            </RemoveButton>
          </Footer>
        </div>
      </MainContent>
      <Price>
        <span>
          R$
          {priceMultipliedByQuantity.toFixed(2).replace(".", ",")}
        </span>
      </Price>
    </CardContainer>
  );
}
