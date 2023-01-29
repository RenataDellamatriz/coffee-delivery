import { CoffeeSelectedContainer, EmptyCards, Title } from './styles'

export function SelectedCoffees() {
  return (
    <div>
      <Title>Cafés selecionados</Title>
      <CoffeeSelectedContainer>
        <EmptyCards>
          <span>Carrinho vazio</span>
        </EmptyCards>
      </CoffeeSelectedContainer>
    </div>
  )
}
