import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

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
  cursor: pointer;

  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const SelectItem = styled(Select.Item)`
  line-height: 1;
  padding: 0.75rem;
  position: relative;
`;
