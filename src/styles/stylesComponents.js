import styled from "styled-components";
import { colors } from "./themes/theme";

// LAYOUT
export const Main = styled.main`
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

export const Row = styled.tr`
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

export const IconWrapper = styled.div`
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

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 25%;
  left: 35%;
  width: 25%;
  height: 50%;
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
