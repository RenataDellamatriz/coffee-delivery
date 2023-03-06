import * as Select from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import {
  SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./styles";

export function SelectCoffeeTag({
  value,
  onValueChange,
}: {
  value?: string;
  onValueChange: (tag: string) => void;
}) {
  const { availableCoffees } = useContext(CoffeeContext);

  const avaiableTags = availableCoffees.map((coffee) => coffee.tag);

  const tags = avaiableTags.reduce((acc, current) => {
    acc.push(...current);
    return acc;
  }, [] as string[]);

  const filteredCoffees = tags.filter(
    (tag, index) => tags.indexOf(tag) === index
  );



  return (
    <>
      {availableCoffees && (
        <SelectContainer>
          <Select.Root value={value} onValueChange={onValueChange}>
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
                    
                    <SelectItem value="Todos" >
                      <Select.ItemText>Todos</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check />
                      </Select.ItemIndicator>
                    </SelectItem>

                    {filteredCoffees.map((tag) => {
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
      )}
    </>
  );
}
