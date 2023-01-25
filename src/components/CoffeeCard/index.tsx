import { ShoppingCart } from 'phosphor-react'
import {
  Tag,
  Description,
  Title,
  Price,
  QuantityInput,
  ShoppingCartContainer,
  CardContainer,
  Footer,
} from './style'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src="https://iili.io/Hax0Xh7.png" alt="" />
      <Tag>TRADICIONAL</Tag>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <Footer>
        <Price>
          <span>R$</span>
          9,90
        </Price>

        <QuantityInput>
          <button>-</button>
          <input type="number" size={2} min={0} max={10} defaultValue={0} />
          <button>+</button>
        </QuantityInput>

        <ShoppingCartContainer to="/checkout" title="Home">
          <ShoppingCart weight="fill" />
        </ShoppingCartContainer>
      </Footer>
    </CardContainer>
  )
}
