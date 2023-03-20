import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { useFormContext } from 'react-hook-form'
import { PaymentMethodRadio } from '../PaymentMethodRadio'

import {
  FormWrapper,
  IconContainer,
  PaymentMethodWrapper,
  Subtitle,
} from './styles'

export const paymentMethods = [
  {
    icon: <CreditCard />,
    value: 'credit',
  },
  {
    icon: <Bank />,
    value: 'debit',
  },
  {
    icon: <Money />,
    value: 'money',
  },
]

export function PaymentForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

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
  )
}
