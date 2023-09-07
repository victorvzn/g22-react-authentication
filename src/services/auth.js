const ENDPOINT_URL = 'https://dummyjson.com/auth/login' // POST

export const login = async ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 240 // 4h
    })
  }

  const response = await fetch(ENDPOINT_URL, options)

  const data = await response.json()

  return data
}