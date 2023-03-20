import {
  CartItemsCounter,
  HeaderContainer,
  ShoppingCartContainer,
} from './styles'
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { LocationDialog } from '../LocationDialog'

export function Header() {
  const { order } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationDialog />

        <ShoppingCartContainer to="/checkout" title="Home">
          {order.length >= 1 ? (
            <CartItemsCounter>{order.length}</CartItemsCounter>
          ) : null}

          <ShoppingCart weight="fill" />
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  )
}
