import db_json from "../../json/dataBookings.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDataDetails } from "../../hook/useDataDetails";
import { getBookingIdThunk } from "../../redux/booking/BookingThunk";
import { getBookingId_Data } from "../../redux/booking/BookingSlice";
import { Main } from "../../styles/StylesComponts";
import { Booking } from "../../types/global";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingDetails = () => {
  const { Id } = useParams();
  const bookingId = Number(Id);

  const { dataSlice } = useDataDetails({
    id: bookingId,
    getData: getBookingId_Data,
    getApiThunk: getBookingIdThunk,
  });

  const handleDelete = () => {
    const newDataBase = db_json.filter((booking) => booking.id_booking !== bookingId);
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
        {dataSlice && <h2>{(dataSlice as Booking[])[0].fullName}</h2>}
        <button onClick={handleDelete}> BORRAR BOOKING ID </button>
      </DIV>
    </Main>
  );
};
