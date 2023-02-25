import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PaymentForm } from "./components/PaymentForm";
import { RegisterForm } from "./components/RegisterForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer, ConfirmButton } from "./styles";

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

type RegisterFormValidationData = zod.infer<
  typeof registerFormValidationSchema
>;

export function Checkout() {
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

  const { handleSubmit, watch, reset } = registerForm;

  function handleCreateNewOrder(data: RegisterFormValidationData) {
    //chamar função para registrar novo pedido
    reset()
  }

  const register = watch('cep')

  const isSubmitDisabled = !register

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <div>
          <FormProvider {...registerForm}>
            <RegisterForm />
            <PaymentForm />
          </FormProvider>
        </div>
        <div>
          <SelectedCoffees>
            <ConfirmButton disabled={isSubmitDisabled} type="submit">CONFIRMAR PEDIDO</ConfirmButton>
          </SelectedCoffees>
        </div>
      </form>
    </CheckoutContainer>
  );
}
