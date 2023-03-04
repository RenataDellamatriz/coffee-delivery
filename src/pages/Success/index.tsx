import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import deliveryImage from "../../assets/deliveryImage.svg";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { formatNamePaymentMethod } from "../../utils";
import {
  IconContainer,
  ItemsWrapper,
  MainContent,
  OrderInfoContainer,
  SpanWrapper,
  SubTitle,
  SuccessContainer,
  Title,
  WhiteBoard,
} from "./styles";

export function Success() {
  const { billing } = useContext(CoffeeContext);

  return (
    <>
    {billing !== undefined && <SuccessContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
        <MainContent>
          <OrderInfoContainer>
            <WhiteBoard>
              <ItemsWrapper>
                <IconContainer variant="purple">
                  <MapPin weight="fill" />
                </IconContainer>
                <SpanWrapper>
                  <span>
                    Entrega em {""}
                    <strong>
                      Rua {billing?.street}, {billing?.number}
                    </strong>
                  </span>
                  <span>
                    {billing?.neighborhood} - {billing?.city}, {billing?.uf}
                  </span>
                </SpanWrapper>
              </ItemsWrapper>
              <ItemsWrapper>
                <IconContainer variant="yellow">
                  <Timer weight="fill" />
                </IconContainer>
                <SpanWrapper>
                  <span>Previsão de entrega</span>
                  <strong>
                    <span>20 min - 30 min</span>
                  </strong>
                </SpanWrapper>
              </ItemsWrapper>
              <ItemsWrapper>
                <IconContainer variant="darkYellow">
                  <CurrencyDollar weight="fill" />
                </IconContainer>
                <SpanWrapper>
                  <span>Pagamento na entrega</span>
                  <strong>
                    <span>{formatNamePaymentMethod(billing.paymentMethod)}</span>
                  </strong>
                </SpanWrapper>
              </ItemsWrapper>
            </WhiteBoard>
          </OrderInfoContainer>

          <img src={deliveryImage} alt="" />
        </MainContent>
      </SuccessContainer> }
      
    </>
  );
}
