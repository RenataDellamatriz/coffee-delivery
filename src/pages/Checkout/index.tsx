import { PaymentForm } from './components/Forms/PaymentForm'
import { RegisterForm } from './components/Forms/RegisterForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <RegisterForm />
        <PaymentForm />
      </div>
      <div>
        <SelectedCoffees />
      </div>
    </CheckoutContainer>
  )
}
