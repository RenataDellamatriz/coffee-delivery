import * as Select from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./styles";

export function SelectCoffeeTag() {
  const { availableCoffees } = useContext(CoffeeContext);

  const avaiableTags = availableCoffees.map((coffee) => coffee.tag);

  const tags = avaiableTags.reduce((acc, current) => {
    acc.push(...current);
    return acc;
  }, [] as string[]);

  const filteredTags = tags.filter((tag, index) => tags.indexOf(tag) === index);

  return (
    <SelectContainer>
      <Select.Root
      // value={}
      // onValueChange={}
      >
        <SelectTrigger>
          <Select.Value placeholder="Tipos de cafés" />
          <Select.Icon>
            <CaretDown />
          </Select.Icon>
        </SelectTrigger>

        <Select.Portal>
          <SelectContent>
            <Select.Viewport>
              <Select.Group>
                {filteredTags.map((tag) => {
                  return (
                    <SelectItem key={tag} value={tag}>
                      <Select.ItemText>{tag}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check />
                      </Select.ItemIndicator>
                    </SelectItem>
                  );
                })}
              </Select.Group>
            </Select.Viewport>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </SelectContainer>
  );
}
