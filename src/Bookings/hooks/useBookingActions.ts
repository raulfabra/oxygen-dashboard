import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/utils/storetsc";
import { deleteBookingById } from "../redux/bookingSlice";
import { getBooking_ID_Thunk } from "../redux/bookingThunk";
import { Booking } from "../types/type";

export const useBookingActions = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  // Detalles Reserva
  const handleDisplayBookingID = (id: Booking["id"]) => {
    dispatch(getBooking_ID_Thunk(id));
    navigator(`/booking/${id}`);
  };

  // Eliminar Reserva
  const handleRemoveBooking = (id: Booking["id"]) => {
    dispatch(deleteBookingById(id));
  };

  return { handleDisplayBookingID, handleRemoveBooking };
};
