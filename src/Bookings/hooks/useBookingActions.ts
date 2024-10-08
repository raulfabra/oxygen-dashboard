import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/utils/storetsc";
import { deleteBookingById, orderBookings } from "../redux/bookingSlice";
import { getBooking_ID_Thunk } from "../redux/bookingThunk";
import { Booking } from "../types/type";

export const useBookingActions = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const [typeOrder, setTypeOrder] = useState(true);

  // Detalles Reserva
  const handleDisplayBookingID = (id: Booking["id"]) => {
    dispatch(getBooking_ID_Thunk(id));
    navigator(`/booking/${id}`);
  };

  // Eliminar Reserva
  const handleRemoveBooking = (id: Booking["id"]) => {
    dispatch(deleteBookingById(id));
  };

  // Ordenar por Date
  const handleOrderBy = (status: boolean, option: string) => {
    if (status === typeOrder) {
      dispatch(orderBookings({ status, option }));
      setTypeOrder(false);
    }
    if (status !== typeOrder) {
      dispatch(orderBookings({ status: false, option }));
      setTypeOrder(true);
    }
  };

  return { handleOrderBy, handleDisplayBookingID, handleRemoveBooking };
};
