import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Nav = styled.nav`
  position: absolute;
  display: inline-block;
  width: 85%;
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #00000005;
  animation: ${slideIn} 0.3s forwards;
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 2em;
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`;
export const TitleNavBar = styled.h1`
  font-family: "poppinssemibold--offline";
  font-size: 28px;
  color: "#262626";
`;
