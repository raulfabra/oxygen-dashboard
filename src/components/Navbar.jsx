import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoLogOut } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'poppinssemibold--offline';
  font-size: 28px;
  color: '#262626';
`

const Nav = styled.nav`
  display: inline-block;
  position: fixed;
  width: 85%;
  height: 70px;
  background-color: cornflowerblue;
`

const Div = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${(props) => props.$spcbtw ? 'space-between' : 'flex-start'};
`

const IconWrapper = styled.div`
  padding: 1em;
  cursor: pointer;
`

export const Navbar = () => {
  const location = useLocation()
  const [title, setTitle] = useState('Dashboard')
  const navigate = useNavigate()

  const handleLogOut = () => {
    window.localStorage.removeItem('isAuthenticated')
    navigate('/')
  }

  useEffect(() => {
    const newTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1)
    setTitle(newTitle)
  }, [location.pathname])

  return (
    <Nav>
      <Div $spcbtw>
        <Div>
          <IconWrapper>
            <VscArrowSwap />
          </IconWrapper>
          <Title>{title}</Title>
        </Div>
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
      </Div>
    </Nav>
  )
}
