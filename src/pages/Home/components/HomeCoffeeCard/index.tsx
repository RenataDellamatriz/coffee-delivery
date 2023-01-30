import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CoffeeCardProps } from '../../../../@types/types/global'
import { fetchCoffeeData } from '../../../../services/api'
import {
  Tag,
  Description,
  Title,
  Price,
  QuantityInput,
  ShoppingCartContainer,
  CardContainer,
  Footer,
  BuyContainer,
  TagContainer,
} from './style'

export function HomeCoffeeCard() {
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
            <img src={coffee.image} alt="" />

            <TagContainer>
              {coffee.tag.map((item, index) => {
                return <Tag key={index}>{item.toUpperCase()}</Tag>
              })}
            </TagContainer>
            <div>
              <Title>{coffee.name}</Title>

              <Description>{coffee.description}</Description>

              <Footer>
                <Price>
                  <span>R$</span>
                  {coffee.price}
                </Price>

                <BuyContainer>
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

                  <ShoppingCartContainer to="/checkout" title="Checkout">
                    <ShoppingCartSimple weight="fill" />
                  </ShoppingCartContainer>
                </BuyContainer>
              </Footer>
            </div>
          </CardContainer>
        )
      })}
    </>
  )
}
