import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookingId_Data, getBookingId_Error, getBookingId_Status } from "../../redux/booking/BookingSlice";
import { getBookingIdThunk } from "../../redux/booking/BookingThunk";
import { Main } from "../../styles/stylesComponents";
import db_json from "../../json/dataBookings.json";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingDetails = () => {
  const { bookingId } = useParams();
  const dispatch = useDispatch();

  const bookingID_Data = useSelector(getBookingId_Data);
  const bookingID_Status = useSelector(getBookingId_Status);
  const bookingID_Error = useSelector(getBookingId_Error);

  const handleDelete = () => {
    const newDataBase = db_json.filter((booking) => booking.id_booking !== Number(bookingId));
    console.log(newDataBase);
    alert(`Has eliminado la reserva con id: ${bookingId}`);
  };

  const handleUpdate = () => {
    alert("UPDATE THE BOOKING");
  };

  useEffect(() => {
    if (bookingID_Status === "idle" || bookingID_Status === "fulfilled") dispatch(getBookingIdThunk(Number(bookingId)));
    else console.log(bookingID_Error);
  }, []);

  return (
    <Main $layout>
      <h1>RESERVA CON ID {bookingId}</h1>
      {bookingID_Status === "fulfilled" && (
        <>
          <DIV>
            <button onClick={handleUpdate}>Do you want Update Booking?</button>
          </DIV>
          <DIV>
            <h2>{bookingID_Data.fullName}</h2>
            <button onClick={handleDelete}> BORRAR BOOKING ID </button>
          </DIV>
        </>
      )}
    </Main>
  );
};
