import styled from 'styled-components'
import { IconContainerProps } from '../../../../@types/types/global'
import { IconColorsVariant } from '../RegisterForm/style'

export const FormWrapper = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  margin-top: 0.75rem;
  border-radius: 6px;
`
export const Title = styled.h2`
  font-family: 'Baloo 2', monospace;
  font-size: 1.125rem;
`
export const Subtitle = styled.h5`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;

  svg {
    font-size: 1.25rem;
  }
`
export const IconContainer = styled.div<IconContainerProps>`
  svg {
    color: ${(props) => IconColorsVariant.color[props.variant]};
  }
`
export const PaymentMethodWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2rem;
`
