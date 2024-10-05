import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useBookingData } from "../hooks/useBookingDatos";

const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookingDetails = () => {
  const { id } = useParams();
  const _id_ = Number(id);

  const { showData, setShowData } = useBookingData(_id_);

  return (
    <>
      <h1>RESERVA CON ID {id}</h1>
      <DIV>
        <button>Do you want Update Booking?</button>
      </DIV>
      <DIV>
        {showData && <h2>{showData.fullName}</h2>}
        <button> BORRAR BOOKING ID </button>
      </DIV>
    </>
  );
};
