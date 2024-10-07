import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Table } from "../../app/components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { DataWrapper, DataContent, ModalWrapper, ModalContent, ModalText, ModalExit, Notes } from "../styles/booking-styles";
import { TypeBookingColumns } from "../types/type";
import iconPerson from "../../app/assets/noun-person.svg";
import { useBookingActions } from "../hooks/useBookingActions";
import { useBookingNotes } from "../hooks/useBookingNotes";
import { useBookingDatos } from "../hooks/useBookingDatos";

function fillColumns(): TypeBookingColumns[] {
  const navigator = useNavigate();
  const { handleDisplayBookingID, handleRemoveBooking } = useBookingActions();
  const { handleShowModal, handleCloseModal, viewNote } = useBookingNotes();

  return [
    {
      label: "Guest",
      display: (item) => (
        <DataWrapper>
          <DataContent onClick={() => handleDisplayBookingID(item.id)}>
            <img src={iconPerson} alt="picture person" width={"50px"} />
          </DataContent>
          <DataContent onClick={() => handleDisplayBookingID(item.id)}>
            <h3>{item.fullName}</h3>
            <h4>#{item.id}</h4>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Order Date",
      display: (item) => <p>{item.orderDate.toString()}</p>,
    },
    {
      label: "Check In",
      display: (item) => <p>{item.checkin.toString()}</p>,
    },
    {
      label: "Check Out",
      display: (item) => <p>{item.checkout.toString()}</p>,
    },
    {
      label: "Special Request",
      display: (item) => (
        <div>
          <Notes onClick={() => handleShowModal(item.id)}>View Notes</Notes>
          {viewNote && (
            <ModalWrapper $top $left $width $height>
              <ModalContent>
                <ModalText> SPECIAL REQUEST #{viewNote.id} </ModalText>
                <hr />
                <ModalText> {viewNote.request} </ModalText>
                <ModalExit onClick={handleCloseModal}> ✖ </ModalExit>
              </ModalContent>
            </ModalWrapper>
          )}
        </div>
      ),
    },
    {
      label: "DELETE",
      display: (item) => <button onClick={() => handleRemoveBooking(item.id)}>REMOVE ITEM</button>,
    },
    {
      label: "Status",
      display: (item) => `${item.status}`,
    },
  ];
}

export const BookingTable = () => {
  const { showData, setShowData } = useBookingDatos();

  return (
    <>
      <Navbar />
      {showData && (
        <PaginationProvider>
          <Table data={showData} columns={fillColumns()} />
        </PaginationProvider>
      )}
    </>
  );
};
