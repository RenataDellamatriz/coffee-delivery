/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import axios from 'axios'
import { CaretDown, CaretUp, Check, MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { fetchStateData } from '../../services/locationApi/api'

import {
  LocationContent,
  LocationOverlay,
  LocationTitle,
  LocationTrigger,
  SelectContainer,
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
} from './styles'

export interface UfProps {
  sigla: string
  id: number
  nome: string
}

export interface CityProps {
  id: number
  nome: string
}

export function LocationDialog() {
  const [uf, setUf] = useState<UfProps[]>([])
  const [selectedUf, setSelectedUf] = useState<string>()
  const [city, setCity] = useState<CityProps[]>([])
  const [selectedCity, setSelectedCity] = useState<string>()
  const [inputUfValue, setInputUfValue] = useState('')
  const [inputCityValue, setInputCityValue] = useState('')

  useEffect(() => {
    async function getUfData() {
      const getUf = await fetchStateData()
      setUf(getUf)
    }
    getUfData()
  }, [])

  useEffect(() => {
    async function getCityData() {
      try {
        const { data } = await axios(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
        )

        setCity(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedUf) {
      getCityData()
    }
  }, [selectedUf])

  function handleUfChange(uf: string) {
    setSelectedUf(uf)
    setSelectedCity(undefined)
  }

  function handleCityChange(city: string) {
    setSelectedCity(city)
  }

  const orderedStatesByName = uf.sort(function (a, b) {
    if (a.sigla < b.sigla) {
      return -1
    }
    if (a.sigla > b.sigla) {
      return 1
    }
    return 0
  })

  useEffect(() => {
    if (selectedUf && selectedCity) {
      localStorage.setItem('selectedUf', selectedUf)
      localStorage.setItem('selectedCity', selectedCity)
    }
  }, [selectedUf, selectedCity])

  useEffect(() => {
    const savedUf = localStorage.getItem('selectedUf')
    const savedCity = localStorage.getItem('selectedCity')

    if (savedUf) {
      setSelectedUf(savedUf)
    }

    if (savedCity) {
      setSelectedCity(savedCity)
    }
  }, [])

  return (
    <Dialog.Root>
      <LocationTrigger>
        <MapPin weight="fill" />
        {selectedCity ? `${selectedCity}, ${selectedUf}` : 'Localização'}
      </LocationTrigger>
      <Dialog.Portal>
        <LocationOverlay />
        <LocationContent>
          <LocationTitle>Selecione sua localização</LocationTitle>

          <SelectContainer>
            <Select.Root
              required
              value={selectedUf}
              onValueChange={handleUfChange}
            >
              <SelectTrigger>
                <Select.Value placeholder="UF" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </SelectTrigger>

              <SelectPortal itemRef="input">
                <SelectContent>
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    value={inputUfValue}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      e.stopPropagation()
                    }
                    onChange={(e) => setInputUfValue(e.target.value)}
                  />
                  <SelectScrollUpButton>
                    <CaretUp />
                  </SelectScrollUpButton>
                  <Select.Viewport>
                    <Select.Group>
                      {orderedStatesByName
                        .filter((uf) => {
                          if (inputUfValue === '') {
                            return uf
                          } else if (
                            uf.sigla
                              .toLowerCase()
                              .includes(inputUfValue.toLowerCase())
                          ) {
                            return uf
                          }
                        })
                        .map((uf) => {
                          return (
                            <SelectItem
                              key={uf.id}
                              value={uf.sigla}
                              textValue=""
                            >
                              <Select.ItemText>{uf.sigla}</Select.ItemText>
                              <Select.ItemIndicator>
                                <Check />
                              </Select.ItemIndicator>
                            </SelectItem>
                          )
                        })}
                    </Select.Group>
                  </Select.Viewport>
                  <SelectScrollDownButton>
                    <CaretDown />
                  </SelectScrollDownButton>
                </SelectContent>
              </SelectPortal>
            </Select.Root>

            <Select.Root value={selectedCity} onValueChange={handleCityChange}>
              <SelectTrigger>
                <Select.Value placeholder="Cidade" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </SelectTrigger>

              <SelectPortal>
                <SelectContent>
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    value={inputCityValue}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                      e.stopPropagation()
                    }
                    onChange={(e) => {
                      setInputCityValue(e.target.value)
                    }}
                  />
                  <SelectScrollUpButton>
                    <CaretUp />
                  </SelectScrollUpButton>

                  <Select.Viewport>
                    <Select.Group>
                      {selectedUf &&
                        city
                          .filter((cityName) => {
                            if (inputCityValue === '') {
                              return cityName
                            } else if (
                              cityName.nome
                                .toLowerCase()
                                .includes(inputCityValue.toLowerCase())
                            ) {
                              return cityName
                            }
                          })
                          .map((city) => {
                            return (
                              <SelectItem
                                disabled={!selectedUf}
                                key={city.id}
                                value={city.nome}
                              >
                                <Select.ItemText>{city.nome}</Select.ItemText>
                                <Select.ItemIndicator>
                                  <Check />
                                </Select.ItemIndicator>
                              </SelectItem>
                            )
                          })}
                    </Select.Group>
                  </Select.Viewport>
                  <SelectScrollDownButton>
                    <CaretDown />
                  </SelectScrollDownButton>
                </SelectContent>
              </SelectPortal>
            </Select.Root>
          </SelectContainer>

          <Dialog.Close />
        </LocationContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
