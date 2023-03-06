import { PaymentMethods } from "../pages/Checkout";

export function formatNamePaymentMethod(billing: PaymentMethods) {
  if (billing === "credit") {
    return "Cartão de Crédito";
  } else if (billing === "debit") {
    return "Cartão de Débito";
  } else {
    return "Dinheiro";
  }
}

