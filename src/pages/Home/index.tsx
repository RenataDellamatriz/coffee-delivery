import {
  CoffeeCardContainer,
  HomeContainer,
  IconContainer,
  ItemsContainer,
  ItemsWrapper,
  MainContent,
  MainText,
  Subtitle,
  Title,
} from './styles'
import mainImage from '../../assets/mainImage.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeCoffeeCard } from './components/HomeCoffeeCard'
import { SelectCoffeeTag } from './components/SelectCoffeeTag'

export function Home() {

 
  return (
    <HomeContainer>
      <MainContent>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <MainText>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </MainText>

          <ItemsContainer>
            <div>
              <ItemsWrapper>
                <IconContainer variant="darkYellow">
                  <ShoppingCart weight="fill" />
                </IconContainer>
                <span>Compra simples e segura</span>
              </ItemsWrapper>

              <ItemsWrapper>
                <IconContainer variant="yellow">
                  <Timer weight="fill" />
                </IconContainer>
                <span>Entrega rápida e rastreada</span>
              </ItemsWrapper>
            </div>

            <div>
              <ItemsWrapper>
                <IconContainer variant="gray">
                  <Package weight="fill" />
                </IconContainer>
                <span>Embalagem mantém o café intacto</span>
              </ItemsWrapper>

              <ItemsWrapper>
                <IconContainer variant="purple">
                  <Coffee weight="fill" />
                </IconContainer>
                <span>O café chega fresquinho até você</span>
              </ItemsWrapper>
            </div>
          </ItemsContainer>
        </div>

        <div>
          <img src={mainImage} alt="" />
        </div>
      </MainContent>

      <div style={{ display: 'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '3.125rem'}}>
        <Subtitle>Nossos cafés</Subtitle>
        <SelectCoffeeTag/>
      </div>

      <CoffeeCardContainer>
        <HomeCoffeeCard />
      </CoffeeCardContainer>
    </HomeContainer>
  )
}
