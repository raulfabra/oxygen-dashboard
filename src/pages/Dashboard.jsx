import { Navbar } from '../components/Navbar'
import { Menu } from '../components/Menu'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  display: flex;
`

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Menu />
      <Navbar />
    </DashboardWrapper>
  )
}
