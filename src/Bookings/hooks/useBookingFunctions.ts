import { useState } from "react";
import { useBookingDatos } from "./useBookingDatos";

export const useBookingFunctions = () => {
  const [viewNote, setViewNote] = useState<any>(null);
  const { showData, setShowData } = useBookingDatos();

  // Display Modal Requests
  const handleShowModal = (id_booked_modal: number) => {
    const note = showData.filter((booked) => booked.id === id_booked_modal)[0];
    setViewNote(note);
  };

  // Close Modal
  const handleCloseModal = () => setViewNote(null);

  return { handleShowModal, handleCloseModal, viewNote };
};
