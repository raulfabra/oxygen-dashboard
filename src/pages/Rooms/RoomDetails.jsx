import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsId_Data, getRoomsId_Error, getRoomsId_Status } from "../../redux/rooms/RoomsSlice";
import { getRoomIdThunk } from "../../redux/rooms/RoomsThunk";
import { Main } from "../../styles/stylesComponents";
import db_json from "../../json/dataRooms.json";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoomDetails = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const roomID_Data = useSelector(getRoomsId_Data);
  const roomID_Status = useSelector(getRoomsId_Status);
  const roomID_Error = useSelector(getRoomsId_Error);

  const handleDelete = () => {
    const newDataBase = db_json.filter((room) => room.id_room !== Number(roomId));
    console.log(newDataBase);
    alert(`Has eliminado la reserva con id: ${roomId}`);
  };

  const handleUpdate = () => {
    alert("UPDATE THE ROOM");
  };

  useEffect(() => {
    if (roomID_Status === "idle" || roomID_Status === "fulfilled") dispatch(getRoomIdThunk(Number(roomId)));
    else console.log(roomID_Error);
  }, []);

  return (
    <Main $layout>
      <h1>RESERVA CON ID {roomId}</h1>
      {roomID_Status === "fulfilled" && (
        <>
          <DIV>
            <button onClick={handleUpdate}>Do you want Update room?</button>
          </DIV>
          <DIV>
            <h2>
              {roomID_Data.typeRoom.bed} - #{roomID_Data.numberRoom}
            </h2>
            <button onClick={handleDelete}> BORRAR ROOM ID </button>
          </DIV>
        </>
      )}
    </Main>
  );
};
