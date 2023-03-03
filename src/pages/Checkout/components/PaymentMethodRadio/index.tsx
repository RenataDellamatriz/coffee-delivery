import React, { ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import { ContentContainer, PaymentMethodContainer } from "./styles";

interface PaymentMethodProps {
  icon?: ReactNode;
  control?: Control;
  name: string;
  options: {
    title: string;
    value: string;
  }[];
}

export function PaymentMethodRadio({
  icon,
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
            {options.map((i) => (
              <React.Fragment key={i.value + i.title}>
                <input
                  id={i.value}
                  type="radio"
                  onChange={onChange}
                  value={i.value}
                  name='paymentMethod'
                />
                <label htmlFor={i.value}>
                  <ContentContainer>
                    {icon}
                    {i.title}
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
