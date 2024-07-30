import styled from 'styled-components'
import { RiUserSharedFill, RiContactsBook3Fill } from 'react-icons/ri'
import { MdDashboard, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TfiKey } from 'react-icons/tfi'
import { LuCalendarCheck } from 'react-icons/lu'
import iconHotel from '../assets/noun-hotel.svg'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
background-color: #EBF1EF;
color: ${props => props.$primary ? 'white' : '#BF4F74'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #EBF1EF;
border-radius: 8px;
`

const MenuWrapper = styled.section`
  position: relative;
  display: inline-block;
  width: 15%;
  height: 100vh;
  background-color: green;
`

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'poppinsextrabold--offline';
  background-color: violet;
  width: 100%;
`

const PagesWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid lightgrey;
  position: relative;
  cursor: pointer;
  background-color: violet;
`

const NameWrapper = styled.span`
  margin-left: 1em;
  font-family: 'poppinssemibold--offline';
  font-size: 18px;
`

const UserWrapper = styled.article`
  padding: 2em;
`
const SquarePhoto = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: grey;
`

export const Menu = () => {
  const navigate = useNavigate()

  return (
    <MenuWrapper>
      <TitleWrapper>
        <img src={iconHotel} alt='iconHotel' width={80} height={80} style={{ backgroundColor: 'violet' }} />
        <Title>travl</Title>
      </TitleWrapper>
      <PagesWrapper onClick={() => navigate('/dashboard')}>
        <MdDashboard />
        <NameWrapper> Dashboard </NameWrapper>
      </PagesWrapper>
      <PagesWrapper onClick={() => navigate('/rooms')}>
        <TfiKey />
        <NameWrapper> Room </NameWrapper>
        <MdOutlineKeyboardArrowDown />

      </PagesWrapper>
      <PagesWrapper onClick={() => navigate('/bookings')}>
        <LuCalendarCheck />
        <NameWrapper> Bookings </NameWrapper>
      </PagesWrapper>
      <PagesWrapper onClick={() => navigate('/users')}>
        <RiUserSharedFill />
        <NameWrapper> Users </NameWrapper>
      </PagesWrapper>
      <PagesWrapper onClick={() => navigate('/employers')}>
        <RiContactsBook3Fill />
        <NameWrapper> Employers </NameWrapper>
      </PagesWrapper>
      <UserWrapper>
        <SquarePhoto>
          <img src='' alt='' />
        </SquarePhoto>
        <p> Williams Johnsoon</p>
        <p> williams@gmail.com</p>
        <Button> Settings </Button>
      </UserWrapper>
      <footer>
        <p />
        <p />
        <p />
      </footer>
    </MenuWrapper>
  )
}
