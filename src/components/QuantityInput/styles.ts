import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  svg {
    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }

  input,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;

    border: none;
    text-align: center;

    background-color: transparent;
  }
`
export const RemoveQuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`
export const AddQuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`
