import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";

export const LocationTrigger = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};

  padding: 10px;
  border-radius: 6px;
  border: none;

  cursor: pointer;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme.purple};
  }
`;

export const LocationOverlay = styled(Dialog.Overlay)`
  background-color: ${(props) => props.theme["purple"]};
  opacity: 0.5;
  position: fixed;
  inset: 0;
  /* transition:2s ease-in-out;  */
`;

export const LocationContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
`;

export const LocationTitle = styled(Dialog.Title)`
  font-family: "Baloo 2", cursive;
  text-align: center;
  font-size: 1.5rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 0 1rem 0;

  gap: 1rem;
  width: 200px;
`;

export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  position: relative;

  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};

  padding: 0.75rem;
  border-radius: 6px;
  border: none;

  cursor: pointer;
`;

export const SelectContent = styled(Select.Content)`
  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};

  padding: 0.75rem;
  border-radius: 6px;

  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const SelectItem = styled(Select.Item)`
  line-height: 1;
  padding: 0.75rem;
  position: relative;
`;
