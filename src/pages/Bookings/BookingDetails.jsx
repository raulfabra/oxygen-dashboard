import { useParams } from "react-router-dom";
import { Main } from "../../styles/stylesComponents";

export const BookingDetails = () => {
  const { bookingId } = useParams();

  return (
    <Main $layout>
      <h1>RESERVA CON ID {bookingId}</h1>
    </Main>
  );
};
