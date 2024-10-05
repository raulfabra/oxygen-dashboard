import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useRoomData } from "../hooks/useRoomsDatos";

const DIV = styled.div<{ $col?: boolean }>`
  padding: 2em;
  display: flex;
  ${(props) => (props.$col ? "flex-direction: column;" : "flex-direction: row;")}
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const RoomDetails = () => {
  const { id } = useParams();
  const _id_ = Number(id);

  const { showData, setShowData } = useRoomData(_id_);

  return (
    <>
      <DIV>
        <button>Do you want Update room?</button>
      </DIV>
      <DIV $col>
        {showData && (
          <h2>
            {showData.typeRoom_bed} - #{showData.numberRoom}
          </h2>
        )}
        <button> BORRAR ROOM ID </button>
      </DIV>
    </>
  );
};
