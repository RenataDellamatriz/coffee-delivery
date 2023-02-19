import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 16rem;
  height: 310px;
  border-radius: 6px 44px 6px 44px;
  padding: 0 24px 20px 24px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: -20%;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
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
  margin-top: 2rem;
  align-items: center;

  gap: 1.25rem;
`

export const Price = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  font-weight: 800;

  color: ${(props) => props.theme['base-text']};
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`


