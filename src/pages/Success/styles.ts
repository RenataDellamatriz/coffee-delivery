import styled from "styled-components";
import { IconContainerProps } from "../../@types/types/global";

export const SuccessContainer = styled.div`
  padding: 5rem 10rem 5rem 10rem;
  margin: auto;

  max-width: 1440px;

  @media (max-width: 768px) {
    padding: 5%;
   
  }
`;

export const Title = styled.h2`
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SubTitle = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 0;

  @media (max-width: 768px) {   
      
      flex-direction: column;
      
      gap: 1.5rem;
      img {
        width: 100%;      
      }
     
      
   
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme["yellow"]},
    ${(props) => props.theme["purple"]}
  );
  border-radius: 6px 36px 6px 36px;

  min-width: 526px;
  max-height: 280px;
  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const WhiteBoard = styled.div`
  padding: 40px;
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 5px 35px 5px 35px;

  @media (max-width: 768px) {
    width:100%
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

export const SpanWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const iconBackgroundVariants = {
  background: {
    darkYellow: (props: any) => props.theme[`yellow-dark`],
    yellow: (props: any) => props.theme.yellow,
    gray: (props: any) => props.theme[`base-text`],
    purple: (props: any) => props.theme.purple,
  },
};

export const IconContainer = styled.div<IconContainerProps>`
  width: 32px;
  height: 32px;

  border-radius: 999px;
  padding: 8px;

  background-color: ${(props) =>
    iconBackgroundVariants.background[props.variant]};
  color: ${(props) => props.theme.white};

  svg {
    font-size: 1rem;
  }
`;
