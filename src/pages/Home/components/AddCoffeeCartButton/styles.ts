import styled from "styled-components";

export const ShoppingCartContainer = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  padding: 7.5px 8px 3.5px 8px;
  border-radius: 6px;
  border: transparent;
  cursor:pointer;
  
  svg {
    font-size: 20px;
  }
`