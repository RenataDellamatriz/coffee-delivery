import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;
`

export const Tag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  border-radius: 9999px;
  padding: 4px 8px;
  margin-top: 0.75rem;
`

export const Title = styled.h5`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;

  color: ${(props) => props.theme['base-subtitle']};

  margin-top: 1rem;
`

export const Description = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  text-align: center;

  color: ${(props) => props.theme['base-label']};

  margin-top: 0.5rem;
`

export const Footer = styled.div`
  display: flex;
`

export const Price = styled.span``

export const QuantityInput = styled.div`
  display: flex;

  input[type='number'],
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    width: 30px;
  }
`

export const ShoppingCartContainer = styled(NavLink)``
