import {
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
import { CoffeeCard } from '../../components/CoffeeCard'

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
                <p>Compra simples e segura</p>
              </ItemsWrapper>
              <ItemsWrapper>
                <IconContainer variant="yellow">
                  <Timer weight="fill" />
                </IconContainer>
                <p>Entrega rápida e rastreada</p>
              </ItemsWrapper>
            </div>

            <div>
              <ItemsWrapper>
                <IconContainer variant="gray">
                  <Package weight="fill" />
                </IconContainer>
                <p>Embalagem mantém o café intacto</p>
              </ItemsWrapper>
              <ItemsWrapper>
                <IconContainer variant="purple">
                  <Coffee weight="fill" />
                </IconContainer>
                <p>O café chega fresquinho até você</p>
              </ItemsWrapper>
            </div>
          </ItemsContainer>
        </div>
        <div>
          <img src={mainImage} alt="" />
        </div>
      </MainContent>

      <div>
        <Subtitle>Nossos cafés</Subtitle>
      </div>

      <CoffeeCard />
    </HomeContainer>
  )
}
