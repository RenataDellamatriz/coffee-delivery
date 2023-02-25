import { InputStyled, InputVariant } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  variant: InputVariant;
  id:string
}

export function InputForm({ id,type, placeholder, variant = "lg" }: InputProps) {
  return (
    <InputStyled id={id} type={type} placeholder={placeholder} variant={variant} />
  );
}
