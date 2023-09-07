const ENDPOINT_URL = 'https://dummyjson.com/auth/products' // GET

export const fetchProducts = async () => {
  const user = JSON.parse(localStorage.getItem('auth'))

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  }

  const response = await fetch(ENDPOINT_URL, options)

  const data = await response.json()

  return data
}