import { useAppDispatch } from "../../app/utils/storetsc";
import { Room } from "../types/type";
import { getRoom_ID_Thunk, getRoomsThunk } from "../redux/roomThunk";
import { useNavigate } from "react-router-dom";
import { filterRoomsByStatus } from "../redux/roomSlice";

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

  const handleFilteredBy = async (status?: string) => {
    await dispatch(getRoomsThunk());
    if (status) dispatch(filterRoomsByStatus(status));
  };

  return { handleFilteredBy, handleDisplayRoomID, handleRemoveBooking };
};
