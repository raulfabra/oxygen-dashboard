import { useAppDispatch } from "../../app/utils/storetsc";
import { Room } from "../types/type";
import { getRoom_ID_Thunk } from "../redux/roomThunk";
import { useNavigate } from "react-router-dom";

export const useRoomsActions = () => {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  // Detalles Reserva
  const handleDisplayRoomID = (id: Room["id"]) => {
    dispatch(getRoom_ID_Thunk(id));
    navigator(`/room/${id}`);
  };

  // Eliminar Reserva
  const handleRemoveBooking = (id: Room["id"]) => {};

  return { handleDisplayRoomID, handleRemoveBooking };
};
