import { useParams } from "react-router-dom";
import { Main } from "../../styles/stylesComponents";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsListData, getBookingsListError, getBookingsListStatus } from "../../redux/booking/BookingSlice";
import db_json from "../../json/dataBookings.json";
import { useEffect, useState } from "react";
import { getBookingIdThunk } from "../../redux/booking/BookingThunk";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingDetails = () => {
  const { bookingId } = useParams();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);

  const bookingID_Data = useSelector(getBookingsListData);
  const bookingID_Status = useSelector(getBookingsListStatus);
  const bookingID_Error = useSelector(getBookingsListError);

  const handleDelete = () => {
    const newDataBase = db_json.filter((booking) => booking.id_booking !== Number(bookingId));
    console.log(newDataBase);
    alert(`Has eliminado la reserva con id: ${bookingId}`);
  };

  const handleUpdate = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    if (bookingID_Status === "idle") dispatch(getBookingIdThunk(Number(bookingId)));
    else if (bookingID_Status === "rejected") console.log(bookingID_Error);
    else if (bookingID_Status === "fulfilled") console.log("status fulfilled");
  });

  return (
    <Main $layout>
      <h1>RESERVA CON ID {bookingId}</h1>
      {bookingID_Status === "fulfilled" && (
        <>
          <DIV>
            <button onClick={handleUpdate}>Do you want Update Booking?</button>
            {edit ? (
              <DIV>
                <form action={onsubmit}>
                  <input type="text" name="" id="" />
                </form>
              </DIV>
            ) : (
              ""
            )}
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
