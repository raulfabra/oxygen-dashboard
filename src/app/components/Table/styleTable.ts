import styled, { keyframes } from "styled-components";

const colors = {
  primary: "#135846",
  secondary: "#E23428",
  tertiary: "#393939",
  quaternary: "#EBEBEB",
  quinary: "#799283",
};

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
