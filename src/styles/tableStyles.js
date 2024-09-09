import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 75%;
`;

export const NavTable = styled.header`
  margin: 2em 0;
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

export const TableBooking = styled.table`
  margin: 3em 0;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
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
