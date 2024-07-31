import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  display: inline-block;
  width: ${(props) => props.$large === true ? '85%' : '100%'};
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #00000005;
`
export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2em 2em; 
`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`

export const Title = styled.h1`
  font-family: 'poppinssemibold--offline';
  font-size: 28px;
  color: '#262626';
`
