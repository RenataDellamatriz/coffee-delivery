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
import { useContext, useMemo, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Home() {
  const { availableCoffees } = useContext(CoffeeContext)
  const [selectedTag, setSelectedTag] = useState<string>()

  const filteredCoffeesTags = useMemo(() => {
    if (selectedTag) {
      return availableCoffees.filter((coffee) =>
        coffee.tag.includes(selectedTag),
      )
    }
    return availableCoffees
  }, [selectedTag, availableCoffees])

  function handleSelectedTag(tag: string) {
    if (tag === 'Tipos de café') {
      setSelectedTag(undefined)
    } else {
      setSelectedTag(tag)
    }
  }

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3.125rem',
        }}
      >
        <Subtitle>Nossos cafés</Subtitle>
        <SelectCoffeeTag
          placeholder="Tipos de cafés"
          value={selectedTag === undefined ? 'Tipos de café' : selectedTag}
          onValueChange={handleSelectedTag}
        />
      </div>

      <CoffeeCardContainer>
        {filteredCoffeesTags.map((coffee) => (
          <HomeCoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeCardContainer>
    </HomeContainer>
  )
}
