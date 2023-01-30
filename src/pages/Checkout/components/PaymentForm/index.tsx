import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { SelectButton } from '../SelectButton'

import {
  FormWrapper,
  IconContainer,
  PaymentMethodWrapper,
  Subtitle,
} from './styles'

export function PaymentForm() {
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
          <SelectButton>
            <CreditCard />
            CARTÃO DE CRÉDITO
          </SelectButton>
          <SelectButton>
            <Bank />
            CARTÃO DE DÉBITO
          </SelectButton>
          <SelectButton>
            <Money />
            DINHEIRO
          </SelectButton>
        </PaymentMethodWrapper>
      </FormWrapper>
    </>
  )
}
