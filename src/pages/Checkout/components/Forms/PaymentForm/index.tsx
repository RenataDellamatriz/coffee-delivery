import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethod } from '../../PaymentMethod'
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
          <PaymentMethod>
            <CreditCard />
            CARTÃO DE CRÉDITO
          </PaymentMethod>
          <PaymentMethod>
            <Bank />
            CARTÃO DE DÉBITO
          </PaymentMethod>
          <PaymentMethod>
            <Money />
            DINHEIRO
          </PaymentMethod>
        </PaymentMethodWrapper>
      </FormWrapper>
    </>
  )
}
