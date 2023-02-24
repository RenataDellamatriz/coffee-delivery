import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;

  width: 100%;
  height: auto;
  padding: 8px 4px 40px 4px;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const MainContent = styled.header`
  display: flex;
  gap: 20px;
`;

export const Title = styled.h5`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;

  color: ${(props) => props.theme["base-subtitle"]};
`;
export const Footer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  align-items: center;

  gap: 8px;
`;
export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RemoveButton = styled.button`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-subtitle"]};

  font-size: 0.75rem;

  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px;

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["base-text"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
  }
`;
export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 700;

  color: ${(props) => props.theme["base-text"]};
`;
