import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'

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
            <Input type="number" placeholder="CEP" variant="md" />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Rua" variant="lg" />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Número" variant="md" />
            <Input type="text" placeholder="Complemento" variant="lg" />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Bairro" variant="md" />
            <Input type="text" placeholder="Cidade" variant="lg" />
            <Input type="text" placeholder="UF" variant="sm" />
          </InputWrapper>
        </FormInputWrapper>
      </FormWrapper>
    </div>
  )
}
