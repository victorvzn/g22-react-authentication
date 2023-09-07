import { useState } from "react"

const useAuth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('auth')) || {}
  )

  const isAuth = Boolean(user?.token) // Si estoy logueado

  const setAuth = (user) => {
    setUser(user)
    localStorage.setItem('auth', JSON.stringify(user))
  }

  const logout = () => {
    localStorage.removeItem('auth')
  }

  return {
    user,
    isAuth,
    setAuth,
    logout
  }
}

export default useAuth