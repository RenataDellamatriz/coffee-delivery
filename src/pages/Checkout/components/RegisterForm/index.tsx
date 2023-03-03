import axios from "axios";
import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Input } from "../Input";
import {
  FormInputWrapper,
  FormWrapper,
  IconContainer,
  InputWrapper,
  Subtitle,
  Title,
} from "./style";

export function RegisterForm() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  async function handleGetAddress(e: any) {
    if (errors.cep) return;
    const cep = e.target.value.replace(/\D/g, "");
    const formatedCep = cep.slice(0,5) + '-' + cep.slice(5,8)
    if (!cep) return;
    try {
      const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`);
      setValue("cep", formatedCep)
      setValue("street", data.logradouro);
      setValue("neighborhood", data.bairro);
      setValue("city", data.localidade);
      setValue("uf", data.uf);
    } catch (error) {
      console.log(error);
    }
  }

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
            <Input
              id="cep"
              type="text"
              placeholder="CEP"
              variant="md"
              name="cep"
              control={control}
              onBlur={handleGetAddress}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="street"
              type="text"
              placeholder="Rua"
              variant="lg"
              name="street"
              control={control}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="number"
              type="text"
              placeholder="Número"
              variant="md"
              name="number"
              control={control}
            />
            <Input
              id="complement"
              type="text"
              placeholder="Complemento"
              variant="lg"
              name="complement"
              control={control}
              rightText
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              variant="md"
              name="neighborhood"
              control={control}
            />

            <Input
              id="city"
              type="text"
              placeholder="Cidade"
              variant="lg"
              name="city"
              control={control}
            />

            <Input
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
