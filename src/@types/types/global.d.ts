export type IconVariant = 'darkYellow' | 'yellow' | 'gray' | 'purple'

export interface IconContainerProps {
  variant: IconVariant
}

export interface CoffeeCardProps {
  name: string
  image: string
  tag: [string]
  description: string
  price: string
}
