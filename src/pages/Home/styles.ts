import styled from 'styled-components'
import { IconContainerProps } from '../../@types/types/global'

export const HomeContainer = styled.div`
  padding: 0 10rem 5rem 10rem;
  margin: auto;

  max-width: 1440px;
  @media (max-width: 768px) {
    display: block;
    padding: 0 5%;
    height: auto;
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  margin: 5.75rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    img:first-child {
      width: 100%;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;

  color: ${(props) => props.theme['base-title']};

  @media (max-width: 768px) {
    font-size: 2.1em;
    line-height: 2.5rem;
  }
`
export const MainText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
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
export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;

  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`
