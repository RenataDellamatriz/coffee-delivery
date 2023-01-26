import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { fetchCoffeeData } from '../../services/api'
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

interface CoffeeCardProps {
  name: string
  image: string
  tag: [string]
  description: string
  price: string
}

export function CoffeeCard() {
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
          </CardContainer>
        )
      })}
    </>
  )
}
