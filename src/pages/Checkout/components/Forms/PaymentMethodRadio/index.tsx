import React, { ReactNode, useContext } from "react";
import { Control, Controller } from "react-hook-form";
import { formatNamePaymentMethod } from "../../../../../utils";
import { ContentContainer, PaymentMethodContainer } from "./styles";

interface PaymentMethodProps {
  control?: Control;
  name: string;
  options: {
    value: string;
    icon?: ReactNode;
  }[];
}

export function PaymentMethodRadio({
  control,
  name,
  options,
}: PaymentMethodProps) {
 
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <PaymentMethodContainer>
            {options.map((method) => (
              <React.Fragment key={method.value}>
                <input
                  id={method.value}
                  type="radio"
                  onChange={onChange}
                  value={method.value}
                  name="paymentMethod"
                  
                />
                <label htmlFor={method.value}>
                  <ContentContainer>
                    {method.icon}
                    {formatNamePaymentMethod(method.value)}
                  </ContentContainer>
                </label>
              </React.Fragment>
            ))}
          </PaymentMethodContainer>
        )}
      />
    </>
  );
}
