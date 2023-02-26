import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";
import { InputForm } from "../InputForm";
import {
  FormInputWrapper,
  FormWrapper,
  IconContainer,
  InputWrapper,
  Subtitle,
  Title,
} from "./style";

export function RegisterForm() {
  const { control } = useFormContext();

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
            <InputForm
              id="cep"
              type="number"
              placeholder="CEP"
              variant="md"
              name="cep"
              control={control}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="street"
              type="text"
              placeholder="Rua"
              variant="lg"
              name="street"
              control={control}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="number"
              type="text"
              placeholder="Número"
              variant="md"
              name="number"
              control={control}
            />
            <InputForm
              id="complement"
              type="text"
              placeholder="Complemento"
              variant="lg"
              name="complement"
              control={control}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              variant="md"
              name="neighborhood"
              control={control}
            />
            <InputForm
              id="city"
              type="text"
              placeholder="Cidade"
              variant="lg"
              name="city"
              control={control}
            />
            <InputForm
              id="uf"
              type="text"
              placeholder="UF"
              variant="sm"
              name="uf"
              control={control}
            />
          </InputWrapper>
        </FormInputWrapper>
      </FormWrapper>
    </div>
  );
}
