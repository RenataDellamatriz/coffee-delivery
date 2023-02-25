import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import axios from "axios";
import { CaretDown, Check, MapPin } from "phosphor-react";
import { useEffect, useState } from "react";
import { fetchStateData } from "../../services/locationApi/api";

import {
  LocationContent,
  LocationOverlay,
  LocationTitle,
  LocationTrigger,
  SelectContainer,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "./styles";

export interface UfProps {
  sigla: string;
  id: number;
  nome: string;
}

export interface CityProps {
  id: number;
  nome: string;
}

export function LocationDialog() {
  const [uf, setUf] = useState<UfProps[]>([]);
  const [seletedUf, setSelectedUf] = useState<string>();
  const [city, setCity] = useState<CityProps[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>();

  useEffect(() => {
    async function getUfData() {
      const getUf = await fetchStateData();
      setUf(getUf);
    }
    getUfData();
  }, []);

  useEffect(() => {
    async function getCityData() {
      try {
        const { data } = await axios(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${seletedUf}/municipios`
        );

        setCity(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (seletedUf) {
      getCityData();
    }
  }, [seletedUf]);

  function handleUfChange(uf: string) {
    setSelectedUf(uf);
    setSelectedCity(undefined);
  }

  function handleCityChange(city: string) {
    setSelectedCity(city);
  }

  const orderedStatesByName = uf.sort(function (a, b) {
    if (a.sigla < b.sigla) {
      return -1;
    }
    if (a.sigla > b.sigla) {
      return 1;
    }
    return 0;
  });

  return (
    <Dialog.Root>
      <LocationTrigger>
        <MapPin weight="fill" />
        {selectedCity && seletedUf
          ? `${selectedCity}, ${seletedUf}`
          : "Escolha sua localização"}
      </LocationTrigger>
      <Dialog.Portal>
        <LocationOverlay />
        <LocationContent>
          <LocationTitle>Selecione sua localização</LocationTitle>

          <SelectContainer>
            <Select.Root
              required
              value={seletedUf}
              onValueChange={handleUfChange}
            >
              <SelectTrigger>
                <Select.Value placeholder="UF" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </SelectTrigger>

              <Select.Portal>
                <SelectContent>
                  <Select.Viewport>
                    <Select.Group>
                      {orderedStatesByName.map((state) => {
                        return (
                          <SelectItem key={state.id} value={state.sigla}>
                            <Select.ItemText>{state.sigla}</Select.ItemText>
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

            <Select.Root value={selectedCity} onValueChange={handleCityChange}>
              <SelectTrigger>
                <Select.Value placeholder="Cidade" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </SelectTrigger>

              <Select.Portal>
                <SelectContent>
                  <Select.Viewport>
                    {seletedUf &&
                      city.map((state) => {
                        return (
                          <SelectItem
                            disabled={!seletedUf}
                            key={state.id}
                            value={state.nome}
                          >
                            <Select.ItemText>{state.nome}</Select.ItemText>
                            <Select.ItemIndicator>
                              <Check />
                            </Select.ItemIndicator>
                          </SelectItem>
                        );
                      })}
                  </Select.Viewport>
                </SelectContent>
              </Select.Portal>
            </Select.Root>
          </SelectContainer>

          <Dialog.Close />
        </LocationContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
