const BASE_URL = 'https://dummyjson.com' // GET

// https://dummyjson.com/products?limit=5&skip=0

export const fetchProducts = async (limit, skip) => {
  const user = JSON.parse(localStorage.getItem('auth'))

  const RESOURCE_URL = `${BASE_URL}/auth/products?limit=${limit}&skip=${skip}`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  }

  const response = await fetch(RESOURCE_URL, options)

  const data = await response.json()

  return data
}