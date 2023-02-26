import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PaymentForm } from "./components/PaymentForm";
import { RegisterForm } from "./components/RegisterForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer, ConfirmButton } from "./styles";
import { useContext, useEffect } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";

const registerFormValidationSchema = zod.object({
  cep: zod.number().positive().min(8).max(8),
  street: zod.string().min(1, "Informe o nome da rua"),
  number: zod
    .number()
    .positive()
    .min(2, "Mínimo de dois dígitos")
    .max(4, "Máximo de 4 dígitos"),
  complement: zod.string().min(1, "Informe o complemento"),
  neighborhood: zod.string().min(1, "Informe o nome do bairro"),
  city: zod.string().min(1, "Informe o nome da cidade"),
  uf: zod.string().min(1, "Informe o estado"),
});

export type RegisterFormValidationData = zod.infer<
  typeof registerFormValidationSchema
>;

export function Checkout() {
  const { billing, setBilling } = useContext(CoffeesContext);

  const registerForm = useForm<RegisterFormValidationData>({
    resolver: zodResolver(registerFormValidationSchema),
    defaultValues: {
      cep: 0,
      street: "",
      number: 0,
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });

  const { handleSubmit, reset } = registerForm;

  function handleCreateNewOrder(data: RegisterFormValidationData) {
    
    setBilling(data);
    // reset()
  }

 
  

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <div>
          <FormProvider {...registerForm}>
            <RegisterForm />
          </FormProvider>
          <PaymentForm />
        </div>

        <SelectedCoffees>
        </SelectedCoffees>
          <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
      </form>
    </CheckoutContainer>
  );
}
