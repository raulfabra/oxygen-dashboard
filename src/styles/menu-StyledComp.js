import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const MenuWrapper = styled.section`
  position: relative;
  display: inline-block;
  width: 15%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 13px 3px 40px #00000005;

  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});
  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.3s forwards;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0;
  height: 100px;
`
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.h1`
  font-family: 'poppinsextrabold--offline';
`
export const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  color: #5D5449;
  font-family: 'poppinslight--offline';
  font-size: 0.6rem;
`

export const ItemWrapper = styled.div`
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
export const ItemSelect = styled.div`
  display: ${props => props.$isVisible ? 'block' : 'none'};
  position: absolute;
  top: 10%;
  left: 2%;
  width: 5px;
  height: 80%;
  border-radius: 8px;
  background-color: red;
`
export const ItemName = styled.span`
  margin-left: 1em;
  font-family: 'poppinssemibold--offline';
  font-size: 18px;
`

export const UserWrapper = styled.article`
  margin: 0 auto;
  padding: 2em;
  width: 80%;
  text-align: center;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
`
export const SquarePhoto = styled.div`
    margin: 0 auto;
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: grey;
`
export const UserName = styled.p`
  margin: 1em auto;
  font-family: 'poppinsmedium--offline';
  font-size: 0.8rem;
  color: #393939;
`
export const UserEmail = styled.p`
  font-family: 'poppinslight--offline';
  font-size: 0.5rem;
  color: #6a6a6a;
`
export const SettingButton = styled.button`
  margin: 1em;
  width: 50%;
  padding: 0.7em;
  border: none;
  border-radius: 8px;
  background-color: #EBF1EF;
  color: #135846;
`

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`

export const FooterTitle = styled.p`
  margin-top: 2em;
  font-family: 'poppinssemibold--offline';
  font-size: 1rem;
  text-align: center;
  color: #212121;
`
export const FooterSubtitle = styled.p`
  font-family: 'poppinslight--offline';
  font-size: .7rem;
  color: #799283;
  padding-top: ${(props) => props.$variant === 'p.top' ? '3em' : ''};
  
`
