import {
  CartInfoContainer,
  CartInfoWrapper,
  CartTotalInfoWrapper,
  CoffeeSelectedContainer,
  ConfirmButton,
  Title,
} from './styles'
import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard/index'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeeContext'
// import { EmptyCoffees } from '../EmptyCoffees'

export function SelectedCoffees() {
  const {order} = useContext(CoffeesContext)
 console.log(order)
  return (
    <div>
      <Title>Cafés selecionados</Title>
      <CoffeeSelectedContainer>
        {/* <EmptyCoffees /> */}
        {order?.map((coffee) => { return <CheckoutCoffeeCard />})}
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
  )
}
