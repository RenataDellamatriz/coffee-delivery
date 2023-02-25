import styled from 'styled-components'

export const EmptyCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  width: 100%;
  margin-bottom:1.25rem;
  border: 1px dashed ${(props) => props.theme.purple};
  border-radius: 6px 44px 6px 44px;
  min-height: 400px;

  span {
    color: ${(props) => props.theme.purple};
  }
`
