import styled from "styled-components";
const colors = {
  primary: "#135846",
  secondary: "#E23428",
  tertiary: "#393939",
  quaternary: "#EBEBEB",
  quinary: "#799283",
};

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
