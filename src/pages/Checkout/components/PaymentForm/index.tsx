import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegisterFormValidationData } from "../..";
import { PaymentMethodButton } from "../PaymentMethodButton";

import {
  FormWrapper,
  IconContainer,
  PaymentMethodWrapper,
  Subtitle,
} from "./styles";

export function PaymentForm() {
  const { control, setValue } = useFormContext();

  // function handlePaymentMethod(e:any){
  //
  // }

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
          <PaymentMethodButton
            control={control}
            name="credito"
            // onClick={handlePaymentMethod}
          >
            <CreditCard />
            CARTÃO DE CRÉDITO
          </PaymentMethodButton>
          <PaymentMethodButton
            control={control}
            name="debito"
            // onClick={handlePaymentMethod}
          >
            <Bank />
            CARTÃO DE DÉBITO
          </PaymentMethodButton>
          <PaymentMethodButton
            control={control}
            name="dinheiro"
            // onClick={handlePaymentMethod}
          >
            <Money />
            DINHEIRO
          </PaymentMethodButton>
        </PaymentMethodWrapper>
      </FormWrapper>
    </>
  );
}
