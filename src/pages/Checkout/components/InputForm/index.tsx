import { InputStyled, InputVariant } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  variant: InputVariant;
}

export function InputForm({ type, placeholder, variant = "lg" }: InputProps) {
  return (
    <InputStyled type={type} placeholder={placeholder} variant={variant} />
  );
}
