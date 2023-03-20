import styled from 'styled-components'

export type InputVariant = 'lg' | 'md' | 'sm'

interface InputVariantProps {
  variant: InputVariant
  hasError?: boolean
  rightText?: boolean
}

const InputSizeVariants = {
  size: {
    lg: '100%',
    md: '200px',
    sm: '60px',
  },
  minwidth: {
    sm: 'none',
    md: '200px',
    lg: 'none',
  },
  media: {
    size: { lg: '100%', md: '100px', sm: '50px' },
  },
}

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
  position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    display: none;
  }
`

export const InputWrapper = styled.div<InputVariantProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => InputSizeVariants.size[props.variant]};

  span {
    color: red;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    bottom: -0.875rem;
    left: -1.5rem;
  }
  @media (max-width: 768px) {
  }
`
export const InputStyled = styled.input<InputVariantProps>`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  padding: 12px;
  border: ${(props) =>
    props.hasError ? `1px solid red` : '1px solid transparent'};
  border-radius: 6px;

  /* min-width: ${(props) => InputSizeVariants.minwidth[props.variant]}; */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: ${(props) => InputSizeVariants.media.size[props.variant]};
  }
`
