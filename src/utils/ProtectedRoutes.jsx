import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const [isAuthenticated] = useState(() => {
    const userStorage = window.localStorage.getItem('isAuthenticated')
    if (userStorage) return userStorage
    else return false
  })
  return (
    <>
      {isAuthenticated === 'true' ? <Outlet /> : <Navigate to='/' replace />}
    </>
  )
}
