import { useEffect } from 'react'
import useAuth from '../hooks/useAuth.js'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      // redirige al login en caso de que no esté autenticado
      navigate('/login')
    }
  }, [isAuth])

  return (
    <Outlet />
  )
}

export default PrivateRoute