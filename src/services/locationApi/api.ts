import axios from 'axios'

export async function fetchStateData() {
  try {
    const {data} = await axios('https://servicodados.ibge.gov.br/api/v1/localidades/estados')

    return data

  } catch (error){
    console.log(error)
  }
}

