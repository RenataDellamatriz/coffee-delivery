import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: red;  

  input {
    
    
  }

  input:checked + label div {
    background: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-subtitle"]};

  font-size: 0.75rem;
  text-transform: uppercase;

  width: 100%;
  min-width: 178px;

  border: 1px solid transparent;
  border-radius: 6px;
  height: 3rem;
  padding: 0 1rem;

  transition: 0.4s;

  :hover {
    background: ${(props) => props.theme["base-hover"]};
  }
  svg {
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
  }

  user-select: none;
`;
