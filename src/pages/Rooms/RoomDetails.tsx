import { useParams } from "react-router-dom";
import { getRoomsId_Data } from "../../redux/rooms/RoomsSlice";
import { getRoomIdThunk } from "../../redux/rooms/RoomsThunk";
import { Main } from "../../styles/stylesComponents";
import db_json from "../../json/dataRooms.json";
import styled from "styled-components";
import { useDataDetails } from "../../hook/useDataDetails";

const DIV = styled.div`
  padding: 2em;
  display: flex;
  ${(props) => (props.$col ? "flex-direction: column;" : "flex-direction: row;")}
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const RoomDetails = () => {
  const { roomId } = useParams();

  const { dataSlice } = useDataDetails(roomId, getRoomsId_Data, getRoomIdThunk);

  console.log(dataSlice);

  const handleDelete = () => {
    const newDataBase = db_json.filter((room) => room.id_room !== Number(roomId));
    console.log(newDataBase);
    alert(`Has eliminado la reserva con id: ${roomId}`);
  };

  const handleUpdate = () => {
    alert("UPDATE THE ROOM");
  };

  return (
    <Main $layout>
      <DIV>
        <button onClick={handleUpdate}>Do you want Update room?</button>
      </DIV>
      <DIV $col>
        {dataSlice && (
          <h2>
            {dataSlice.typeRoom.bed} - #{dataSlice.numberRoom}
          </h2>
        )}
        <button onClick={handleDelete}> BORRAR ROOM ID </button>
      </DIV>
    </Main>
  );
};
