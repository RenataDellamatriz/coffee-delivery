import styled from 'styled-components'

export const PaymentMethodContainer = styled.button`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-subtitle']};

  font-size: 0.75rem;

  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 16px 0 16px 0;

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
  }
`
