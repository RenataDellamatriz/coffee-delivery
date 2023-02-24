import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
`
export const CoffeeSelectedContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  margin-top: 0.75rem;
  border-radius: 6px 44px 6px 44px;
  height: auto;
  min-height: 500px;
  width: 448px;
  
  
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1.5rem;
 

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
export const ConfirmButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 12px 0;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
