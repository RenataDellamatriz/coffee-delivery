import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
export const CoffeeSelectedContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px 44px 6px 44px;
  height: auto;
  min-height: 500px;
  max-height: 1027px;
  width: 448px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 0.875rem;
`

export const CartInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartTotalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
`
