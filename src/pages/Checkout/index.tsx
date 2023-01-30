import { PaymentForm } from './components/PaymentForm'
import { RegisterForm } from './components/RegisterForm'
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
