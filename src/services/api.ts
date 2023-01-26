import axios from 'axios'

export async function fetchCoffeeData() {
  try {
    const { data } = await axios('http://localhost:3000/coffees')

    return data
  } catch (error) {
    console.log(error)
  }
}
