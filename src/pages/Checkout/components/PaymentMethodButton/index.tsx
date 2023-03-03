import { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import { RegisterFormValidationData } from "../..";
import { PaymentMethodContainer } from "./styles";

interface PaymentMethodProps {
  children?: ReactNode | string;  
  control?: Control;
  name: string;
  // onClick: (e: any) => void;
}

export function PaymentMethodButton({
  children,
  control,
  name,  
}: PaymentMethodProps) {
  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <PaymentMethodContainer value={value} onChange={onChange}>
              {children}
            </PaymentMethodContainer>
          )}
        />
      ) : (
        "null"
      )}
    </>
  );
}
