import axios from 'axios'

const url = 'http://localhost:3000/coffees'

function getCoffeeData() {
  axios
    .get(url)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

getCoffeeData()
