import axios from "axios";
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
  const {
    control,
    setValue,    
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  async function handleGetAddress(e: any) {
    if (errors.cep) return;
    const cep = e.target.value.replace(/\D/g, "");
    if(!cep) return;
    try {
      const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`);
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
            <div>
              <InputForm
                id="cep"
                type="text"
                placeholder="CEP"
                variant="md"
                name="cep"
                control={control}
                onBlur={handleGetAddress}
                hasError={!!errors.cep}
              />             
            </div>
          </InputWrapper>
          <InputWrapper>
            <div>
              <InputForm
                id="street"
                type="text"
                placeholder="Rua"
                variant="lg"
                name="street"
                control={control}
                hasError={!!errors.street}
              />
            </div>
          </InputWrapper>
          <InputWrapper>
            <div>
              <InputForm
                id="number"
                type="text"
                placeholder="Número"
                variant="md"
                name="number"
                control={control}
                hasError={!!errors.street}
              />
            </div>
            <div>
              <InputForm
                id="complement"
                type="text"
                placeholder="Complemento"
                variant="lg"
                name="complement"
                control={control}
                hasError={!!errors.street}
              />
            </div>
          </InputWrapper>
          <InputWrapper>
            <div>
              <InputForm
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                variant="md"
                name="neighborhood"
                control={control}
                hasError={!!errors.street}
              />
            </div>
            <div>
              <InputForm
                id="city"
                type="text"
                placeholder="Cidade"
                variant="lg"
                name="city"
                control={control}
                hasError={!!errors.street}
              />
            </div>
            <div>
              <InputForm
                id="uf"
                type="text"
                placeholder="UF"
                variant="sm"
                name="uf"
                control={control}
                hasError={!!errors.street}
              />
            </div>
          </InputWrapper>
        </FormInputWrapper>
      </FormWrapper>
    </div>
  );
}
