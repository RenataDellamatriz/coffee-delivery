import styled from 'styled-components'

export type InputVariant = 'lg' | 'md' | 'sm'

interface InputSizeProps {
  variant: InputVariant
}

const InputSizeVariants = {
  size: {
    lg: `${100}%`,
    md: `${200}px`,
    sm: `${60}px`,
  },
}

export const InputStyled = styled.input<InputSizeProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  padding: 12px;
  border: none;
  border-radius: 6px;
  width: ${(props) => InputSizeVariants.size[props.variant]};

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
