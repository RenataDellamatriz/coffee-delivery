// import * as Checkbox from '@radix-ui/react-checkbox'
import styled from "styled-components";
import { IconContainerProps } from "../../../../../@types/types/global";


export const IconColorsVariant = {
  color: {
    darkYellow: (props: any) => props.theme[`yellow-dark`],
    yellow: (props: any) => props.theme.yellow,
    gray: (props: any) => props.theme[`base-text`],
    purple: (props: any) => props.theme.purple,
  },
};

export const FormWrapper = styled.div`

  background: ${(props) => props.theme["base-card"]};
  padding: 40px;
  margin-top: 0.75rem;
  border-radius: 6px;

  input {
    background: ${(props) => props.theme["base-input"]};
    color: black;    
    ::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  span {
    font-size: 0.875rem;
    margin-left: 30px;
  }
`;
export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px; 
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 12px; 
`;

export const Title = styled.h2`
  font-family: "Baloo 2", monospace;
  font-size: 1.125rem;
`;
export const Subtitle = styled.h5`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;

  svg {
    font-size: 1.25rem;
  }
`;
export const IconContainer = styled.div<IconContainerProps>`
  svg {
    color: ${(props) => IconColorsVariant.color[props.variant]};
  }
`;

export const PaymentMethodWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2rem;
`;
