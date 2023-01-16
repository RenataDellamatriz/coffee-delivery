import styled from 'styled-components'

export type IconVariant = 'darkYellow' | 'yellow' | 'gray' | 'purple'

interface IconContainerProps {
  variant: IconVariant
}

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 2rem 10rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;

  color: ${(props) => props.theme['base-title']};
`
export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`
export const ItemsContainer = styled.div`
  display: flex;
  gap: 40px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    font-size: 1rem;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`

const iconBackgroundVariants = {
  background: {
    darkYellow: (props: any) => props.theme[`yellow-dark`],
    yellow: (props: any) => props.theme.yellow,
    gray: (props: any) => props.theme[`base-text`],
    purple: (props: any) => props.theme.purple,
  },
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 32px;
  height: 32px;

  border-radius: 999px;
  padding: 8px;

  background-color: ${(props) =>
    iconBackgroundVariants.background[props.variant]};
  color: ${(props) => props.theme.white};

  svg {
    font-size: 1rem;
  }
`
