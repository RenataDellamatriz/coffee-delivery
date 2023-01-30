import { ReactNode } from 'react'
import { PaymentMethodContainer } from './styles'

interface PaymentMethodProps {
  children?: ReactNode | string
}

export function SelectButton({ children }: PaymentMethodProps) {
  return <PaymentMethodContainer>{children}</PaymentMethodContainer>
}
