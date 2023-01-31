import { Minus, Plus } from 'phosphor-react'
import {
  AddQuantityButton,
  QuantityInputContainer,
  RemoveQuantityButton,
} from './styles'
import { useState } from 'react'

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0)

  function AddQuantity() {
    setQuantity((quantity) => {
      return quantity + 1
    })
  }

  function RemoveQuantity() {
    setQuantity((quantity) => {
      return quantity - 1
    })
  }

  return (
    <QuantityInputContainer>
      <RemoveQuantityButton onClick={RemoveQuantity}>
        <Minus weight="bold" />
      </RemoveQuantityButton>
      <input
        type="number"
        size={2}
        min={0}
        max={10}
        defaultValue={0}
        value={quantity}
      />
      <AddQuantityButton onClick={AddQuantity}>
        <Plus weight="bold" />
      </AddQuantityButton>
    </QuantityInputContainer>
  )
}
