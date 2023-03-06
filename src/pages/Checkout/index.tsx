import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentForm } from "./components/Forms/PaymentForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer, ConfirmButton } from "./styles";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import axios from "axios";
import { RegisterForm } from "./components/Forms/RegisterForm";

export enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const registerFormValidationSchema = zod.object({
  cep: zod
    .string({invalid_type_error: 'invalido'})
    .min(8, "*Obrigatório")
    .regex(/^\d{5}(?:-?\d{3})?$/),
  street: zod.string().min(1, "*Obrigatório"),
  number: zod.string().min(2, "*Obrigatório").max(4, "Máximo de 4 dígitos"),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, "*Obrigatório"),
  city: zod.string().min(1, "*Obrigatório"),
  uf: zod.string().min(1, "*Obrigatório"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { 
        message: "*Informe o método de pagamento",     
    };
    },
  }),
});

export type RegisterFormValidationData = zod.infer<
  typeof registerFormValidationSchema
>;

export function Checkout() {
  const { createNewOrder } = useContext(CoffeeContext);

  const registerForm = useForm<RegisterFormValidationData>({
    resolver: zodResolver(registerFormValidationSchema),
    mode: "onChange",
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = registerForm;

  function handleCreateNewOrder(data: RegisterFormValidationData) {
    createNewOrder(data);
    console.log("data", data.paymentMethod);
    window.location.href = "/success";
  }

  async function handlePostNewOrderApi(data: RegisterFormValidationData) {
    axios.post("http://localhost:3000/orders", {
      cep: data.cep,
    });
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <div>
          <FormProvider {...registerForm}>
            <RegisterForm />
            <PaymentForm />
          </FormProvider>
        </div>

        <SelectedCoffees>
          <ConfirmButton type="submit" onClick={() => handlePostNewOrderApi}>
            Confirmar Pedido
          </ConfirmButton>
        </SelectedCoffees>
      </form>
    </CheckoutContainer>
  );
}
