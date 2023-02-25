import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
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
  const { register } = useFormContext();

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
              {...register("cep", { valueAsNumber: true })}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="street"
              type="text"
              placeholder="Rua"
              variant="lg"
              {...register("street")}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="number"
              type="text"
              placeholder="Número"
              variant="md"
              {...register("number", { valueAsNumber: true })}
            />
            <InputForm
              id=""
              type="text"
              placeholder="Complemento"
              variant="lg"
              {...register("complement")}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              variant="md"
              {...register("neighborhood")}
            />
            <InputForm
              id="city"
              type="text"
              placeholder="Cidade"
              variant="lg"
              {...register("city")}
            />
            <InputForm
              id="uf"
              type="text"
              placeholder="UF"
              variant="sm"
              {...register("uf")}
            />
          </InputWrapper>
        </FormInputWrapper>
      </FormWrapper>
    </div>
  );
}
