import iconHotel from '../assets/noun-hotel.svg'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { RiUserSharedFill, RiContactsBook3Fill } from 'react-icons/ri'
import { MdDashboard, MdOutlineEmail, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TfiKey } from 'react-icons/tfi'
import { LuCalendarCheck } from 'react-icons/lu'
import { IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io'
import { DivColumn, FooterButton, FooterSubtitle, FooterTitle, FooterWrapper, ItemName, ItemSelect, ItemWrapper, MenuWrapper, SquarePhoto, Subtitle, Title, TitleWrapper, UserEmail, UserName, UserWrapper } from '../styles/styledComp-Menu'
import { Div, Nav, NavWrapper } from '../styles/styledComp-Navbar'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoLogOut } from 'react-icons/io5'

export const Layout = () => {
  // Lógica del Menú
  const navigate = useNavigate()
  const [isHovering, setIsHovering] = useState(false)
  const location = useLocation()

  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Lógica del Navbar
  const [title, setTitle] = useState('Dashboard')
  const [isVisible, setIsVisible] = useState(true)

  const handleLogOut = () => {
    window.localStorage.removeItem('isAuthenticated')
    navigate('/')
  }

  const handleMenu = (event) => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const newTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1)
    setTitle(newTitle)
  }, [location.pathname])

  // Lógica de Proteger las rutas de nuestro dashboard
  const [isAuthenticated] = useState(() => {
    const userStorage = window.localStorage.getItem('isAuthenticated')
    if (userStorage) return userStorage
    else return false
  })

  return (
    <>
      {isVisible
        ? <MenuWrapper $isOpen={isVisible}>
          <TitleWrapper>
            <img src={iconHotel} alt='iconHotel' width={120} height={80} />
            <DivColumn>
              <Title>travl</Title>
              <Subtitle>Hotel Admin Dashboard</Subtitle>
            </DivColumn>
          </TitleWrapper>
          <ItemWrapper $variant='m.top' onClick={() => navigate('/dashboard')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHovering} />
            <MdDashboard />
            <ItemName> Dashboard </ItemName>
          </ItemWrapper>
          <ItemWrapper onClick={() => navigate('/rooms')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHovering} />
            <TfiKey />
            <ItemName> Room </ItemName>
            <MdOutlineKeyboardArrowDown style={{ position: 'absolute', left: '80%' }} />
          </ItemWrapper>
          <ItemWrapper onClick={() => navigate('/bookings')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHovering} />
            <LuCalendarCheck />
            <ItemName> Bookings </ItemName>
          </ItemWrapper>
          <ItemWrapper onClick={() => navigate('/users')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHovering} />
            <RiUserSharedFill />
            <ItemName> Users </ItemName>
          </ItemWrapper>
          <ItemWrapper onClick={() => navigate('/employers')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ItemSelect $isVisible={isHovering} />
            <RiContactsBook3Fill />
            <ItemName> Employers </ItemName>
          </ItemWrapper>
          <UserWrapper>
            <SquarePhoto>
              <img src='' alt='' />
            </SquarePhoto>
            <UserName> Williams Johnsoon</UserName>
            <UserEmail> williams@gmail.com</UserEmail>
            <FooterButton> <IoMdSettings /> </FooterButton>
          </UserWrapper>
          <FooterWrapper>
            <FooterTitle>Travl Hotel Admin Dashboard</FooterTitle>
            <FooterSubtitle>© 2020 All Rights Reserved</FooterSubtitle>
            <FooterSubtitle $variant='p.top'>Made with ♥ by Peterdraw</FooterSubtitle>
          </FooterWrapper>
        </MenuWrapper>

        : ''}
      <Nav $large={isVisible}>
        <NavWrapper $spcbtw>
          <Div>
            <VscArrowSwap size={25} style={{ cursor: 'pointer' }} onClick={handleMenu} />
            <Title>{title}</Title>
          </Div>
          <Div>
            <MdOutlineEmail size={25} color='#135846' />
            <IoMdNotificationsOutline size={25} color='#135846' />
            <IoLogOut size={25} color='#135846' style={{ cursor: 'pointer' }} onClick={handleLogOut} />
          </Div>
        </NavWrapper>
      </Nav>
      {isAuthenticated === 'true' ? <Outlet /> : <Navigate to='/' replace />}
    </>
  )
}
