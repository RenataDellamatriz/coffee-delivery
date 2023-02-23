import {
  CartItemsCounter,
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from "./styles";
import logoCoffeeDelivery from "../../assets/logoCoffeeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";

export function Header() {
  const { order } = useContext(CoffeesContext);

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
          
          {order.length >= 1 ? (
            <CartItemsCounter>{order.length}</CartItemsCounter>
          ) : null}

          <ShoppingCart weight="fill" />
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
