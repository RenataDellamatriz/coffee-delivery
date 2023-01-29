import { InputStyled, InputVariant } from './styles'

interface InputProps {
  type: string
  placeholder: string
  variant: InputVariant
}

export function Input({ type, placeholder, variant = 'lg' }: InputProps) {
  return <InputStyled type={type} placeholder={placeholder} variant={variant} />
}
