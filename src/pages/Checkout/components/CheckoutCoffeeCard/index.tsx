import { Minus, Plus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeCardProps } from '../../../../@types/types/global'
import { fetchCoffeeData } from '../../../../services/api'
import {
  CardContainer,
  Footer,
  MainContent,
  Price,
  QuantityInput,
  RemoveButton,
  Title,
} from './styles'

export function CheckoutCoffeeCard() {
  const [coffees, setCoffees] = useState<CoffeeCardProps[]>()

  useEffect(() => {
    async function getCoffeeData() {
      const coffee = await fetchCoffeeData()
      setCoffees(coffee)
    }
    getCoffeeData()
  }, [])

  return (
    <>
      {coffees?.map((coffee, index) => {
        return (
          <CardContainer key={`${coffee} - ${index}`}>
            <MainContent>
              <img src={coffee.image} alt="" />
              <div>
                <Title>{coffee.name}</Title>

                <Footer>
                  <QuantityInput>
                    <Minus weight="bold" />
                    <input
                      type="number"
                      size={2}
                      min={0}
                      max={10}
                      defaultValue={0}
                    />
                    <Plus weight="bold" />
                  </QuantityInput>
                  <RemoveButton>
                    <Trash /> REMOVER
                  </RemoveButton>
                </Footer>
              </div>
            </MainContent>
            <Price>
              <span>
                R$
                {coffee.price}
              </span>
            </Price>
          </CardContainer>
        )
      })}
    </>
  )
}
