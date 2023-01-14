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
        <NavLink to="/" title="Home">
          <LocationContainer>
            <MapPin weight="fill" />
            Porto Alegre, RS
          </LocationContainer>
        </NavLink>
        <NavLink to="/checkout" title="Home">
          <ShoppingCartContainer>
            <ShoppingCart weight="fill" />
          </ShoppingCartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
