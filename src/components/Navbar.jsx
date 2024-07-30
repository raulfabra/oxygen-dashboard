import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoLogOut } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'poppinssemibold--offline';
  font-size: 28px;
  color: '#262626';
  padding: 0 1em;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: cornflowerblue;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled.div`
  padding: 1em;
`

export const Navbar = () => {
  const [title] = useState('Dashboard')
  const navigate = useNavigate()

  const handleLogOut = () => {
    window.localStorage.removeItem('isAuthenticated')
    navigate('/')
  }

  return (
    <Nav>
      <Div>
        <IconWrapper>
          <VscArrowSwap />
        </IconWrapper>
      </Div>
      <Title>{title}</Title>
      <Div>
        <IconWrapper>
          <MdOutlineEmail />
        </IconWrapper>
        <IconWrapper>
          <IoMdNotificationsOutline />
        </IconWrapper>
        <IconWrapper onClick={handleLogOut}>
          <IoLogOut />
        </IconWrapper>
      </Div>
    </Nav>
  )
}
