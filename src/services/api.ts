import axios from 'axios'

const url = 'http://localhost:3000/coffees'

export async function fetchCoffeeData() {
  try {
    const { data } = await axios(url)

    return data
  } catch (error) {
    console.log(error)
  }
}
console.log(fetchCoffeeData)
fetchCoffeeData()
