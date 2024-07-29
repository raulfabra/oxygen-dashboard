import { useNavigate } from 'react-router-dom'
import { Button, Title } from '../utils/utils'

export const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    window.localStorage.removeItem('isAuthenticated')
    navigate('/')
  }
  return (
    <>
      <Button onClick={handleLogOut}>LOG OUT</Button>
      <Title>DASHBOARD</Title>
    </>
  )
}
