import { InputStyled, InputVariant } from "./styles";
import { Control, Controller } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  variant: InputVariant;
  id: string;
  control?: Control;
  name: string
}

export function InputForm({
  id,
  type,
  placeholder,
  control,
  name,
  variant = "lg",
}: InputProps) {
  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <InputStyled
              id={id}
              type={type}
              placeholder={placeholder}
              variant={variant}              
              value={value}
              onChange={onChange}
            />
          )}
        />
      ) : (
        <InputStyled
          id={id}
          type={type}
          placeholder={placeholder}
          variant={variant}
        />
      )}
    </>
  );
}
