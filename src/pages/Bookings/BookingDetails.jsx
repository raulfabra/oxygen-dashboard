import { useParams } from "react-router-dom";
import { getBookingId_Data } from "../../redux/booking/BookingSlice";
import { getBookingIdThunk } from "../../redux/booking/BookingThunk";
import { Main } from "../../styles/stylesComponents";
import db_json from "../../json/dataBookings.json";
import styled from "styled-components";
import { useDataDetails } from "../../hook/useDataDetails";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingDetails = () => {
  const { bookingId } = useParams();

  const { dataSlice } = useDataDetails(bookingId, getBookingId_Data, getBookingIdThunk);

  const handleDelete = () => {
    const newDataBase = db_json.filter((booking) => booking.id_booking !== Number(bookingId));
    console.log(newDataBase);
    alert(`Has eliminado la reserva con id: ${bookingId}`);
  };

  const handleUpdate = () => {
    alert("UPDATE THE BOOKING");
  };

  return (
    <Main $layout>
      <h1>RESERVA CON ID {bookingId}</h1>
      <DIV>
        <button onClick={handleUpdate}>Do you want Update Booking?</button>
      </DIV>
      <DIV>
        {dataSlice && <h2>{dataSlice.fullName}</h2>}
        <button onClick={handleDelete}> BORRAR BOOKING ID </button>
      </DIV>
    </Main>
  );
};
