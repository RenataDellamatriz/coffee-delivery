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
`
export const EmptyCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  width: 100%;
  border: 1px dashed ${(props) => props.theme.purple};
  border-radius: 6px 44px 6px 44px;
  min-height: 300px;

  span {
    color: ${(props) => props.theme.purple};
  }
`
