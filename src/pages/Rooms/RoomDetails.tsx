import { useParams } from "react-router-dom";
import { getRoomsId_Data } from "../../redux/rooms/RoomSlice";
import { getRoomIdThunk } from "../../redux/rooms/RoomThunk";
import { Main } from "../../styles/StylesComponts";
import db_json from "../../json/dataRooms.json";
import styled from "styled-components";
import { useDataDetails } from "../../hook/useDataDetails";
import { Room } from "../../types/global";

const DIV = styled.div<{ $col?: boolean }>`
  padding: 2em;
  display: flex;
  ${(props) => (props.$col ? "flex-direction: column;" : "flex-direction: row;")}
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const RoomDetails = () => {
  const { Id } = useParams();
  const roomId = Number(Id);

  const { dataSlice } = useDataDetails({ id: roomId, getData: getRoomsId_Data, getApiThunk: getRoomIdThunk });

  const handleDelete = () => {
    const newDataBase = db_json.filter((room) => room.id_room !== roomId);
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
            {(dataSlice as Room[])[0].typeRoom.bed} - #{(dataSlice as Room[])[0].numberRoom}
          </h2>
        )}
        <button onClick={handleDelete}> BORRAR ROOM ID </button>
      </DIV>
    </Main>
  );
};
