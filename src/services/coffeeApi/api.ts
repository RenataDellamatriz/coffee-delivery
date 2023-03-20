import axios from 'axios'

export async function fetchCoffeeData() {
  try {
    const { data } = await axios(
      'https://coffee-delivery-json-server.vercel.app/coffees',
    )

    return data
  } catch (error) {
    console.log(error)
  }
}
