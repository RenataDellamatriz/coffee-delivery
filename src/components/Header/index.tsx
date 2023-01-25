import {
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationContainer to="/" title="Home">
          <MapPin weight="fill" />
          Porto Alegre, RS
        </LocationContainer>

        <ShoppingCartContainer to="/checkout" title="Home">
          <ShoppingCart weight="fill" />
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  )
}
