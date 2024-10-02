import db_json from "../../json/dataBookings.json";
import iconPerson from "../../assets/noun-person.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoadingData } from "../../hook/useLoadingData.js";
import { getBookingsThunk } from "../../redux/booking/BookingThunk.js";
import { getBookingsListData, getBookingsListError, getBookingsListStatus } from "../../redux/booking/BookingSlice.js";
import { Table } from "../../components/Table/Table.tsx";
import { PaginationProvider } from "../../app/Providers/PaginationProvider.tsx";
import { Booking } from "../../types/global";
import {
  Main,
  NavTable,
  FilterTable,
  CreateElement,
  OptionsFiltered,
  DataWrapper,
  DataContent,
  ModalWrapper,
  ModalContent,
  ModalText,
  ModalExit,
} from "../../styles/StylesComponts.js";

export const Bookings = () => {
  const navigator = useNavigate();

  const [viewNotes, setViewNotes] = useState<Booking | null>(null);
  const { dataJson, refreshData } = useLoadingData({
    getData: getBookingsListData,
    getError: getBookingsListError,
    getStatus: getBookingsListStatus,
    getApiThunk: getBookingsThunk,
  });

  //Create dynamic table: (variable columns)
  const columns = [
    {
      label: "Guest",
      display: (item: Booking) => (
        <DataWrapper>
          <DataContent onClick={() => navigator(`/bookings/${item.id_booking}`)}>
            <img src={iconPerson} alt="picture person" width={"50px"} />
          </DataContent>
          <DataContent onClick={() => navigator(`/bookings/${item.id_booking}`)}>
            <h3>{item.fullName}</h3>
            <h4>#{item.id_booking}</h4>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Order Date",
      display: (item: Booking) => `${item.booking.orderDate}`,
    },
    {
      label: "Check In",
      display: (item: Booking) => (
        <div>
          <p>{item.booking.checkIn.date}</p>
          <span>{item.booking.checkIn.time}</span>
        </div>
      ),
    },
    {
      label: "Check Out",
      display: (item: Booking) => (
        <div>
          <p>{item.booking.checkOut.date}</p>
          <span>{item.booking.checkOut.time}</span>
        </div>
      ),
    },
    {
      label: "Special Request",
      display: (item: Booking) => (
        <div>
          <p onClick={() => handleModal(item.id)}>View Notes</p>
          {viewNotes && (
            <ModalWrapper>
              <ModalContent>
                <ModalText> SPECIAL REQUEST #{viewNotes.id_booking} </ModalText>
                <hr />
                <ModalText> {viewNotes.request} </ModalText>
                <ModalExit onClick={handleCloseModal}> ✖ </ModalExit>
              </ModalContent>
            </ModalWrapper>
          )}
        </div>
      ),
    },
    {
      label: "Room Type",
      display: (item: Booking) => `${item.room.type} - ${item.room.number}`,
    },
    {
      label: "Status",
      display: (item: Booking) => `${item.statusBooking}`,
    },
  ];

  //Order Filters for table: (variable handleOptions)
  const handleOptions = (event: React.MouseEvent<HTMLLIElement>) => {
    const name = event.currentTarget.textContent;

    if (name === "All Bookings") {
      refreshData(dataJson as Booking[]);
    }
    if (name === "Pending") {
      const newList = (dataJson as Booking[]).filter((booking) => booking.statusBooking === "Pending");
      refreshData(newList);
    }
    if (name === "Booked") {
      const newList = (dataJson as Booking[]).filter((booking) => booking.statusBooking === "Booked");
      refreshData(newList);
    }
    if (name === "Canceled") {
      const newList = (dataJson as Booking[]).filter((booking) => booking.statusBooking === "Canceled");
      refreshData(newList);
    }
    if (name === "Refund") {
      const newList = (dataJson as Booking[]).filter((booking) => booking.statusBooking === "Refund");
      refreshData(newList);
    }
  };

  //Order Filters by searchKeyboard auto
  const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    const newList = (dataJson as Booking[]).filter((booking) => booking.fullName.toLowerCase().includes(value));
    /*     if (value === "") return bookingsByGuestsDebounce(db_json);
    else bookingsByGuestsDebounce(newList); */
  };

  //Técnica debounce. Retrasar las llamadas y que se lanzen una vez finalizada. useCallback para memorizar la función y no volver a lanzar indevidamente.
  // const bookingsByGuestsDebounce = useCallback(debounce((byName) => refreshData(byName), 700));

  //Display/Close Modal of Description Requests of each row in table: (variable handleModal and handleCloseModal)
  const handleModal = (id_booked_modal: string) => {
    const viewNote = (dataJson as Booking[]).filter((booked) => booked.id.includes(id_booked_modal))[0];
    setViewNotes(viewNote);
  };
  const handleCloseModal = () => setViewNotes(null);

  return (
    <Main $layout>
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOptions}>All Bookings</OptionsFiltered>
          <OptionsFiltered onClick={handleOptions}>Pending</OptionsFiltered>
          <OptionsFiltered onClick={handleOptions}>Booked</OptionsFiltered>
          <OptionsFiltered onClick={handleOptions}>Canceled</OptionsFiltered>
          <OptionsFiltered onClick={handleOptions}>Refund</OptionsFiltered>
        </FilterTable>
        <form>
          <label htmlFor="nameCustomer">Name of client</label>
          <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
        </form>
        <CreateElement type="button" onClick={() => navigator("/createBooking")}>
          + New Booking
        </CreateElement>
      </NavTable>
      {dataJson && (
        <PaginationProvider>
          <Table data={dataJson} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
