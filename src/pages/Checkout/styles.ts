import styled from "styled-components";

export const CheckoutContainer = styled.div`
  form {
    padding: 0 10rem 5rem 10rem;
    margin: auto;

    max-width: 1440px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 16px;
  }
`;
export const ConfirmButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 12px 0;
  border: 1px solid transparent;
  border-radius: 6px;
  margin-top: 8px;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  :hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
