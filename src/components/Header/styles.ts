import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
  max-width: 1440px;
  margin: auto;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    a {
      text-decoration: none;
    }
  }
`

export const LocationContainer = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  padding: 10px;
  border-radius: 6px;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartContainer = styled(NavLink)`
  display: flex;
  justify-content: center;

  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme['yellow-light']};
  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
