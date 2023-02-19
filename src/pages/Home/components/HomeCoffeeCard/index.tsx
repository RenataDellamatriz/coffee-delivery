import { useContext} from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CoffeesContext } from '../../../../contexts/CoffeeContext'
import { AddCoffeeCartButton } from '../AddCoffeeCartButton'

import {
  Tag,
  Description,
  Title,
  Price,
  CardContainer,
  Footer,
  BuyContainer,
  TagContainer,
} from './styles'

export function HomeCoffeeCard() {
  const {availableCoffees, updateCoffee} =useContext(CoffeesContext)

  return (
    <>
      {availableCoffees?.map((coffee, index) => {
        return (
          <CardContainer key={coffee.id}>
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
                  <QuantityInput />
                  {/* <AddCoffeeCartButton onClick={updateCoffee({coffeeTitle: coffee.name, id: coffee.id, price: coffee.price, quantity:})}/> */}
                </BuyContainer>
              </Footer>
            </div>
          </CardContainer>
        )
      })}
    </>
  )
}
