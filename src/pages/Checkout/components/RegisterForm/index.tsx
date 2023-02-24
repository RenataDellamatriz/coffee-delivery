import { MapPinLine } from 'phosphor-react'
import { InputForm } from '../InputForm'
import {
  FormInputWrapper,
  FormWrapper,
  IconContainer,
  InputWrapper,
  Subtitle,
  Title,
} from './style'

export function RegisterForm() {
  return (
    <div>
      <Title>Complete seu pedido</Title>
      <FormWrapper>
        <Subtitle>
          <IconContainer variant="darkYellow">
            <MapPinLine />
          </IconContainer>
          Endereço de Entrega
        </Subtitle>
        <span>Informe o endereço onde deseja receber seu pedido</span>

        <FormInputWrapper>
          <InputWrapper>
            <InputForm type="number" placeholder="CEP" variant="md" />
          </InputWrapper>
          <InputWrapper>
            <InputForm type="text" placeholder="Rua" variant="lg" />
          </InputWrapper>
          <InputWrapper>
            <InputForm type="text" placeholder="Número" variant="md" />
            <InputForm type="text" placeholder="Complemento" variant="lg" />
          </InputWrapper>
          <InputWrapper>
            <InputForm type="text" placeholder="Bairro" variant="md" />
            <InputForm type="text" placeholder="Cidade" variant="lg" />
            <InputForm type="text" placeholder="UF" variant="sm" />
          </InputWrapper>
        </FormInputWrapper>
      </FormWrapper>
    </div>
  )
}
