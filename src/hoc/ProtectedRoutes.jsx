import { useState } from 'react'

export const ProtectedRoutes = () => {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    const userStorage = window.localStorage.getItem('isAuthenticated')
    if (userStorage) return userStorage
    else return null
  })
  return (
    {}
  )
}
