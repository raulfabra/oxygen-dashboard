import styled from 'styled-components'
import { RiUserSharedFill, RiContactsBook3Fill } from 'react-icons/ri'
import { MdDashboard, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { TfiKey } from 'react-icons/tfi'
import { LuCalendarCheck } from 'react-icons/lu'
import { IoMdSettings } from 'react-icons/io'
import iconHotel from '../assets/noun-hotel.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const MenuWrapper = styled.section`
  position: relative;
  display: inline-block;
  width: 15%;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 13px 3px 40px #00000005;
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0;
  height: 100px;
`
const DivColumn = styled.div`
  /* ${(props) => props.$variant === 'm.left' ? 'margin-left: 1em' : ''}; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Title = styled.h1`
  font-family: 'poppinsextrabold--offline';
`
const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  color: #5D5449;
  font-family: 'poppinslight--offline';
  font-size: 0.6rem;
`

const ItemWrapper = styled.div`
    display: flex;
    position: relative;
    ${(props) => props.$variant === 'm.top' ? 'margin-top: 2em' : ''};
    font-family: 'poppinsregular--offline';
    font-size: 1.2rem;
    padding: 1.5em 2em;
    text-align: left;
    background-color: #ffffff;
    color: #799283;

    cursor: pointer;

    &:hover{
        font-family: 'poppinssemibold--offline';
        color: #E23428;
    }
`
const ItemSelect = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: absolute;
  top: 10%;
  left: 2%;
  width: 5px;
  height: 80%;
  border-radius: 8px;
  background-color: red;
`
const ItemName = styled.span`
  margin-left: 1em;
  font-family: 'poppinssemibold--offline';
  font-size: 18px;
`

const UserWrapper = styled.article`
  margin: 0 auto;
  padding: 2em;
  width: 80%;
  text-align: center;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
`
const UserName = styled.p`
  margin: 1em auto;
  font-family: 'poppinsmedium--offline';
  font-size: 0.8rem;
  color: #393939;
`
const UserEmail = styled.p`
  font-family: 'poppinslight--offline';
  font-size: 0.5rem;
  color: #6a6a6a;
`

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`
const FooterTitle = styled.p`
  font-family: 'poppinssemibold--offline';
  font-size: 1rem;
  color: #212121;
`
const FooterSubtitle = styled.p`
  font-family: 'poppinslight--offline';
  font-size: .7rem;
  color: #799283;
  padding-top: ${(props) => props.$variant === 'p.top' ? '5em' : ''};
  
`
const SquarePhoto = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: grey;
`

const Button = styled.button`
  margin: 1em;
  width: 50%;
  padding: 0.7em;
  border: none;
  border-radius: 8px;
  background-color: #EBF1EF;
  color: #135846;
`

export const Menu = () => {
  const navigate = useNavigate()
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <MenuWrapper>
      <TitleWrapper>
        <img src={iconHotel} alt='iconHotel' width={120} height={80} />
        <DivColumn>
          <Title>travl</Title>
          <Subtitle>Hotel Admin Dashboard</Subtitle>
        </DivColumn>
      </TitleWrapper>
      <ItemWrapper $variant='m.top' onClick={() => navigate('/dashboard')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemSelect isVisible={isHovering} />
        <MdDashboard />
        <ItemName> Dashboard </ItemName>
      </ItemWrapper>
      <ItemWrapper onClick={() => navigate('/rooms')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemSelect isVisible={isHovering} />
        <TfiKey />
        <ItemName> Room </ItemName>
        <MdOutlineKeyboardArrowDown style={{ position: 'absolute', left: '80%' }} />
      </ItemWrapper>
      <ItemWrapper onClick={() => navigate('/bookings')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemSelect isVisible={isHovering} />
        <LuCalendarCheck />
        <ItemName> Bookings </ItemName>
      </ItemWrapper>
      <ItemWrapper onClick={() => navigate('/users')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemSelect isVisible={isHovering} />
        <RiUserSharedFill />
        <ItemName> Users </ItemName>
      </ItemWrapper>
      <ItemWrapper onClick={() => navigate('/employers')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ItemSelect isVisible={isHovering} />
        <RiContactsBook3Fill />
        <ItemName> Employers </ItemName>
      </ItemWrapper>
      <UserWrapper>
        <SquarePhoto>
          <img src='' alt='' />
        </SquarePhoto>
        <UserName> Williams Johnsoon</UserName>
        <UserEmail> williams@gmail.com</UserEmail>
        <Button> <IoMdSettings /> </Button>
      </UserWrapper>
      <FooterWrapper>
        <FooterTitle>Travl Hotel Admin Dashboard</FooterTitle>
        <FooterSubtitle>© 2020 All Rights Reserved</FooterSubtitle>
        <FooterSubtitle $variant='p.top'>Made with ♥ by Peterdraw</FooterSubtitle>
      </FooterWrapper>
    </MenuWrapper>
  )
}
