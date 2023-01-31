import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeCardProps } from '../../../../@types/types/global'
import { QuantityInput } from '../../../../components/QuantityInput'
import { fetchCoffeeData } from '../../../../services/api'
import {
  CardContainer,
  Footer,
  MainContent,
  Price,
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
                  <QuantityInput />

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
