import styled, { keyframes } from "styled-components";
import { colors } from "./themes/theme";

// LOGIN
export const TitleContainer = styled.div`
  display: flex;
  gap: 2em;
  padding: 2em;
  margin: 2em;
`;

export const TitleHotelDashboard = styled.h1`
  font-family: "poppinssemibold_italic--offline";
  font-size: 2.5rem;
  color: ${colors.primary};
  letter-spacing: 2px;
`;

export const ModalWrapper = styled.div<{ $top?: string; $left?: string; $width?: string; $height?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${(props) => (props.$top ? "25%" : "0")};
  left: ${(props) => (props.$left ? "35%" : "0")};
  width: ${(props) => (props.$width ? "25%" : "100%")};
  height: ${(props) => (props.$height ? "50%" : "100%")};
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: #f5f5dc;
  border: 2px solid black;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const ModalText = styled.p`
  padding: 1em;
  font-family: "poppinsmedium--offline";
  font-size: 1rem;
  text-align: justify;
`;
export const ModalExit = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 25px;
  height: 25px;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.quinary};
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 2em;
`;
export const LabelLogin = styled.label`
  width: 90%;
  font-family: "poppinsregular--offline";
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${colors.tertiary};
`;
export const InputLogin = styled.input`
  border: none;
  outline: none;
  padding: 1em;
  font-family: "poppinsmedium--offline";
  font-size: 1rem;
  text-align: center;
  border-radius: 20px;
  background-color: ${colors.quaternary};
`;
export const SpanError = styled.span`
  font-family: "poppinsregular--offline";
  font-size: 0.8rem;
  color: ${colors.secondary};
  background-color: ${colors.quinary};
`;
export const ButtonLogin = styled.button`
  border: none;
  margin: 1em auto;
  width: 30%;
  padding: 1em;
  border-radius: 20px;
  cursor: pointer;
`;

// LAYOUT
// menú lateral
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const MenuWrapper = styled.section<{ $isOpen?: boolean }>`
  position: relative;
  display: inline-block;
  width: 15%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 13px 3px 40px #00000005;

  animation: ${(props) => (props.$isOpen ? slideIn : slideOut)} 0.3s forwards;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0;
  height: 100px;
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.h1`
  font-family: "poppinsextrabold--offline";
`;
export const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  color: #5d5449;
  font-family: "poppinslight--offline";
  font-size: 0.6rem;
`;

export const ItemWrapper = styled.div<{ $variant?: string }>`
  display: flex;
  position: relative;
  ${(props) => (props.$variant === "m.top" ? "margin-top: 2em" : "")};
  font-family: "poppinsregular--offline";
  font-size: 1.2rem;
  padding: 1.5em 2em;
  text-align: left;
  background-color: #ffffff;
  color: #799283;

  cursor: pointer;

  &:hover {
    font-family: "poppinssemibold--offline";
    color: #e23428;
  }
`;
export const ItemSelect = styled.div<{ $isVisible?: boolean }>`
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  position: absolute;
  top: 10%;
  left: 2%;
  width: 5px;
  height: 80%;
  border-radius: 8px;
  background-color: red;
`;
export const ItemName = styled.span`
  margin-left: 1em;
  font-family: "poppinssemibold--offline";
  font-size: 18px;
`;

export const UserWrapper = styled.article`
  margin: 0 auto;
  padding: 2em;
  width: 80%;
  text-align: center;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
`;
export const SquarePhoto = styled.div`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: grey;
`;
export const UserName = styled.p`
  margin: 1em auto;
  font-family: "poppinsmedium--offline";
  font-size: 0.8rem;
  color: #393939;
`;
export const UserEmail = styled.p`
  font-family: "poppinslight--offline";
  font-size: 0.5rem;
  color: #6a6a6a;
`;
export const SettingButton = styled.button`
  margin: 1em;
  width: 50%;
  padding: 0.7em;
  border: none;
  border-radius: 8px;
  background-color: #ebf1ef;
  color: #135846;
  cursor: pointer;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  height: 100vh;
  align-self: stretch;
`;

export const FooterTitle = styled.p`
  margin-top: 2em;
  font-family: "poppinssemibold--offline";
  font-size: 1rem;
  text-align: center;
  color: #212121;
`;
export const FooterSubtitle = styled.p<{ $variant?: string }>`
  font-family: "poppinslight--offline";
  font-size: 0.7rem;
  color: #799283;
  padding-top: ${(props) => (props.$variant === "p.top" ? "3em" : "")};
`;

// menu superior
export const Nav = styled.nav<{ $large: boolean; $isOpen: boolean }>`
  position: absolute;
  display: inline-block;
  width: ${(props) => (props.$large === true ? "85%" : "100%")};
  background-color: #ffffff;
  box-shadow: 0px 3px 10px #00000005;
  animation: ${(props) => (props.$isOpen ? slideIn : slideIn)} 0.3s forwards;
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

// PAGES
export const Main = styled.main<{ $login?: boolean; $layout?: boolean }>`
  ${(props) =>
    props.$login &&
    `display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`}
  ${(props) =>
    props.$layout &&
    `position: absolute;
  top: 10%;
  left: 15%;
  width: 80%;
  margin: 1em 2em`}
`;

// TABLES
export const NavTable = styled.header`
  margin: 3em 2em 2em 2em;
  display: flex;
  justify-content: space-between;
`;
export const FilterTable = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1em;
`;
export const OptionsFiltered = styled.li`
  margin-right: 1em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
export const CreateElement = styled.button``;

export const TableWrapper = styled.section``;

export const Tables = styled.table`
  border-radius: 20px;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const ColumnHeader = styled.th`
  font-family: "poppinssemibold--offline";
  font-size: "16px"; //16px
  color: ${colors.tertiary};
`;

export const Row = styled.tr<{ $header?: boolean; $key?: any }>`
  height: ${(props) => (props.$header ? "65px" : "92px")};
  background: #ffffff 0% 0% no-repeat padding-box;
  cursor: default;
  &:hover {
    ${(props) => (props.$header ? "" : `box-shadow: 0px 4px 30px #0000001A;`)}
  }
`;
export const RowData = styled.td``;

export const DataWrapper = styled.div`
  display: flex;
  text-align: left;
`;

export const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em 2em;
  transition: transform 0.7s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const RoomNameColumn = styled.td`
  display: flex;
`;

//pagination
export const PaginationWrapper = styled.nav`
  margin: 3em;
  display: flex;
  justify-content: space-around;
`;
export const PaginationText = styled.div``;

export const PaginationTable = styled.ul`
  padding: 1em;
  display: flex;
  text-decoration: none;
  list-style-type: none;
  justify-content: center;
  gap: 2em;
  font-size: 1.5rem;
  border: 2px solid black;
`;
export const Numbers = styled.li`
  background-color: ${colors.quaternary};
  border: 2px solid ${colors.primary};

  &:hover {
    cursor: pointer;
  }
`;
export const ShowingPage = styled.p``;
