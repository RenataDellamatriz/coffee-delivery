import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  display: flex;  
  gap: 6px;

 
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};
  }

  @media (max-width: 768px) {    
    flex-direction: column;
    width: 100%;    
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

  @media (max-width: 768px) {
    label div {
      display: flex;
      justify-content: center;
    }
  }
`;
