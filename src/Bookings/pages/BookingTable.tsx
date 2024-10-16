import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Table } from "../../app/components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { DataWrapper, DataContent, ModalWrapper, ModalContent, ModalText, ModalExit, Notes } from "../styles/booking-styles";
import { TypeBookingColumns } from "../types/type";
import iconPerson from "../../app/assets/noun-person.svg";
import { useBookingActions } from "../hooks/useBookingActions";
import { useBookingFunctions } from "../hooks/useBookingFunctions";
import { useBookingDatos } from "../hooks/useBookingDatos";
import { getFormatDate } from "../../app/utils/utils";

function fillColumns(): TypeBookingColumns[] {
  const navigator = useNavigate();
  const { handleOrderBy, handleDisplayBookingID, handleRemoveBooking } = useBookingActions();
  const { handleShowModal, handleCloseModal, viewNote } = useBookingFunctions();

  return [
    {
      label: <p onClick={() => handleOrderBy(true, "guest")}>Guest</p>,
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
      label: <p onClick={() => handleOrderBy(true, "orderdate")}>Order Date</p>,
      display: (item) => <p>{getFormatDate(item.orderDate)}</p>,
    },
    {
      label: <p onClick={() => handleOrderBy(true, "checkin")}>Check In</p>,
      display: (item) => <p>{getFormatDate(item.checkin)}</p>,
    },
    {
      label: <p onClick={() => handleOrderBy(true, "checkout")}>Check Out</p>,
      display: (item) => <p>{getFormatDate(item.checkout)}</p>,
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
