import styled from 'styled-components'
import { RiUserSharedFill, RiContactsBook3Fill } from 'react-icons/ri'
import { MdDashboard, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TfiKey } from 'react-icons/tfi'

import { LuCalendarCheck } from 'react-icons/lu'

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
  width: 15%;
  height: 100vh;
  background-color: green;
`

const PagesWrapper = styled.div`
display: flex;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid lightgrey;
  position: relative;
  
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
const Square = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: grey;
`

export const Menu = () => {
  return (
    <MenuWrapper>
      <PagesWrapper>
        <img src='' alt='' />
      </PagesWrapper>
      <PagesWrapper>
        <MdDashboard />
        <NameWrapper> Dashboard </NameWrapper>
      </PagesWrapper>
      <PagesWrapper>
        <TfiKey />
        <NameWrapper> Room </NameWrapper>
        <MdOutlineKeyboardArrowDown />

      </PagesWrapper>
      <PagesWrapper>
        <LuCalendarCheck />
        <NameWrapper> Bookings </NameWrapper>
      </PagesWrapper>
      <PagesWrapper>
        <RiUserSharedFill />
        <NameWrapper> Users </NameWrapper>
      </PagesWrapper>
      <PagesWrapper>
        <RiContactsBook3Fill />
        <NameWrapper> Contacts </NameWrapper>
      </PagesWrapper>
      <UserWrapper>
        <Square>
          <img src='' alt='' />
        </Square>
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
