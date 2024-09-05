import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 75%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const BookingNav = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
`;
export const OrderBookings = styled.li`
  margin-right: 1em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const TableBooking = styled.table`
  margin: 3em 0;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;
export const IconWrapper = styled.div`
  width: 50px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const RoomNameColumn = styled.td`
  display: flex;
`;
