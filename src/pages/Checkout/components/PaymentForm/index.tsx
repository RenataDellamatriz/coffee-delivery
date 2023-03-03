import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodRadio } from "../PaymentMethodRadio";

import {
  FormWrapper,
  IconContainer,
  PaymentMethodWrapper,
  Subtitle,
} from "./styles";

export const paymentMethods = [
  {
    title: "Cartão de crédito",
    icon: <CreditCard />,
    value: "credit",
  },
  {
    title: "Cartão de débito",
    icon: <Bank />,
    value: "debit",
  },
  {
    title: "Dinheiro",
    icon: <Money />,
    value: "efectivo",
  },
];

export function PaymentForm() {
  const {
    getValues,
    control,
    formState: { errors },
  } = useFormContext();  

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <>
      <FormWrapper>
        <Subtitle>
          <IconContainer variant="purple">
            <CurrencyDollar />
          </IconContainer>
          Pagamento
        </Subtitle>
        <span>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </span>

        <PaymentMethodWrapper>
          <div>
            <PaymentMethodRadio
              name="paymentMethod"
              options={paymentMethods}
              control={control}
            />
          </div>
          <div>{paymentMethodError && <span>{paymentMethodError}</span>}</div>
        </PaymentMethodWrapper>
      </FormWrapper>
    </>
  );
}
