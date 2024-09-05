import { Children } from 'react'

const UserContext = React.createContext()

export const AuthContext = () => {
  return <UserContext.Provider value={user}>{Children}</UserContext.Provider>
}
