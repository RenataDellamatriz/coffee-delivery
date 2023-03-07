import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 2.5rem;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    height: 5rem;
    padding: 2rem 5%;    
    margin-bottom: 1rem;
  }
`;


export const ShoppingCartContainer = styled(NavLink)`
  display: flex;
  justify-content: center;
  position: relative;

  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme["yellow-light"]};
  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const CartItemsCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme[`yellow-dark`]};
  color: ${(props) => props.theme["white"]};

  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;

  border-radius: 9999px;

  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  right: -25%;
  top: -25%;
`;
