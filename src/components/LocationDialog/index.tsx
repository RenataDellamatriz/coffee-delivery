import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import axios from "axios";
import { CaretDown, MapPin } from "phosphor-react";
import { useEffect, useState } from "react";
import { fetchStateData } from "../../services/locationApi/api";

import {
  LocationContent,
  LocationOverlay,
  LocationTitle,
  LocationTrigger,
} from "./styles";

export interface StateProps {
  sigla: string;
  id: number;
  name: string;
}

export interface CityProps {
  id: number;
  name: string;
}

export function LocationDialog() {
  const [state, setState] = useState<StateProps[]>([]);
  const [city, setCity] = useState<CityProps[]>([]);

  useEffect(() => {
    async function getStateData() {
      const getState = await fetchStateData();
      setState(getState);
    }
    getStateData();
  }, []);

  // useEffect(() => {
  //   async function getCityData() {
  //     async function fetchCityData() {
  //       try {
  //         const { data } = await axios(
  //           `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
  //         );
  //         return data;
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     const getCity = await fetchCityData();
  //     setCity(getCity);
  //   }
  //   getCityData();
  // }, []);


  

  const orderedStatesByName = state.sort(function (a, b) {
    if (a.sigla < b.sigla) {
      return -1;
    }
    if (a.sigla > b.sigla) {
      return 1;
    }
    return 0;
  });
  console.log(orderedStatesByName);

  // const orderedCitiesByName =

  return (
    <Dialog.Root>
      <LocationTrigger>
        <MapPin weight="fill" />
        Porto Alegre, RS
      </LocationTrigger>
      <Dialog.Portal>
        <LocationOverlay />
        <LocationContent>
          <LocationTitle>Selecione sua localização</LocationTitle>

          <Select.Root onValueChange={() =>setState(value)} required>
            <Select.Trigger>
              <Select.Value placeholder="Selecione um Estado" />
              <Select.Icon>
                <CaretDown />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content>
                <Select.Viewport>
                  {orderedStatesByName.map((state) => {
                    return (
                      <Select.Item value={state.sigla}>
                        <Select.ItemText key={state.id}>
                          {state.sigla}
                        </Select.ItemText>
                      </Select.Item>
                    );
                  })}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <Select.Root>
            <Select.Trigger>
              <Select.Value placeholder="Selecione um Estado" />
              <Select.Icon>
                <CaretDown />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content>
                <Select.Viewport>
                  {orderedStatesByName.map((state) => {
                    return (
                      <Select.Item value={state.sigla}>
                        <Select.ItemText key={state.id}>
                          {state.sigla}
                        </Select.ItemText>
                      </Select.Item>
                    );
                  })}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <Dialog.Close />
        </LocationContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
