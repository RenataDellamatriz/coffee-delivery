import { Quantity, quantityReducer } from '../reducers/reducer'
import { addQuantity } from '../reducers/actions'
import { createContext, ReactNode, useReducer } from 'react'

interface CreateQuantityData {
  coffeeName: string
  quantity: number
}

interface QuantityContextType {
  quantitys: Quantity[]
  coffeeId: string | null
  addQuantity: () => void
  removeQuantity: () => void
  createNewQuantity: (data: CreateQuantityData) => void
  deleteItem: () => void
}

interface QuantityContextProviderProps {
  children: ReactNode
}

export const QuantityContext = createContext({} as QuantityContextType)

// export function QuantityContextProvider({
//   children,
// }: QuantityContextProviderProps) {
//   const [quantityState, dispatch] = useReducer(
//     quantityReducer,
//     {
//       quantitys: [],
//       coffeeId: null,
//     },
//     () => {
//       const storedStateAsJson = localStorage.getItem(
//         '@coffee-delivery:quantity-state-1.0.0',
//       )

//       if (storedStateAsJson) {
//         return JSON.parse(storedStateAsJson)
//       }
//     },
//   )
// }

// const { quantitys, coffeeId } = quantityState

// const coffee = quantitys.find((quantity) => quantity.id === coffeeId)

// const
