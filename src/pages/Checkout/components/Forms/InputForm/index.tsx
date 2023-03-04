import { InputStyled, InputVariant, InputWrapper, RightText } from "./styles";
import { Control, Controller, useFormContext } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  variant: InputVariant;
  id: string;
  control?: Control;
  name: string;
  onBlur?: (e: any) => void;
  error?: string;
  rightText?: boolean;
}

export function InputForm({
  id,
  type,
  placeholder,
  control,
  name,
  onBlur,
  variant,
  rightText
}: InputProps) {

const {formState: {errors} } = useFormContext()

  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({
            field: { value, onChange, onBlur: onBlurController },
            fieldState: { invalid, error },
          }) => (
            <InputWrapper variant={variant}>
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
              {rightText && <RightText>Opcional</RightText>}
              {errors && <span>{error?.message}</span>}              
            </InputWrapper>
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
