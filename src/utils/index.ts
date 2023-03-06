
export function formatNamePaymentMethod(billing: string) {
  if (billing === "credit") {
    return "Cartão de Crédito";
  } else if (billing === "debit") {
    return "Cartão de Débito";
  } else {
    return "Dinheiro";
  }
}

