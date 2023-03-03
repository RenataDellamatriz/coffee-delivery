import { InputStyled, InputVariant } from "./styles";
import { Control, Controller } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  variant: InputVariant;
  id: string;
  control?: Control;
  name: string;
  onBlur?: (e: any) => void;
}

export function InputForm({
  id,
  type,
  placeholder,
  control,
  name,
  onBlur,
  variant = "lg",
}: InputProps) {
  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={name}
          render={({
            field: { value, onChange, onBlur: onBlurController },
            fieldState: { invalid },
          }) => (
            <InputStyled
              id={id}
              type={type}
              placeholder={placeholder}
              variant={variant}
              value={value}
              onChange={onChange}
              onBlur={(e) => {
                onBlurController();
                onBlur && onBlur(e);
              }}
              hasError={invalid}
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
