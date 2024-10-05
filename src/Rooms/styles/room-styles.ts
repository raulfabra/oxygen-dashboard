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
