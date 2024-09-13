import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookingsListData, getBookingsListError, getBookingsListStatus } from "../../redux/booking/BookingSlice";
import { getBookingsThunk } from "../../redux/booking/BookingThunk";
import { Table } from "../../components/Table/Table";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataWrapper, DataContent } from "../../styles/stylesComponents";
import debounce from "just-debounce-it";
import db_json from "../../json/dataBookings.json";
import iconPerson from "../../assets/noun-person.svg";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";

// CAMBIAR DB_JSON POR bookingsData

export const Bookings = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [viewNotes, setViewNotes] = useState(null);
  const [bookingsListData, setBookingsListData] = useState(null);

  const bookingsData = useSelector(getBookingsListData);
  const bookingsStatus = useSelector(getBookingsListStatus);
  const bookingsError = useSelector(getBookingsListError);

  //Create dynamic table: (variable columns)
  const columns = [
    {
      label: "Guest",
      display: (booked) => (
        <DataWrapper>
          <DataContent onClick={() => navigator(`/bookings/${booked.id_booking}`)}>
            <img src={iconPerson} alt="picture person" width={"50px"} />
          </DataContent>
          <DataContent onClick={() => navigator(`/bookings/${booked.id_booking}`)}>
            <h3>{booked.fullName}</h3>
            <h4>#{booked.id_booking}</h4>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Order Date",
      display: (booked) => `${booked.booking.orderDate}`,
    },
    {
      label: "Check In",
      display: (booked) => (
        <div>
          <p>{booked.booking.checkIn.date}</p>
          <span>{booked.booking.checkIn.time}</span>
        </div>
      ),
    },
    {
      label: "Check Out",
      display: (booked) => (
        <div>
          <p>{booked.booking.checkOut.date}</p>
          <span>{booked.booking.checkOut.time}</span>
        </div>
      ),
    },
    {
      label: "Special Request",
      display: (booked) => (
        <div>
          <p onClick={() => handleModal(booked.id)}>View Notes</p>
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
      display: (booked) => `${booked.room.type} - ${booked.room.number}`,
    },
    {
      label: "Status",
      display: (booked) => `${booked.statusBooking}`,
    },
  ];

  //Order Filters for table: (variable handleOptions)
  const handleOptions = (event) => {
    const name = event.target.textContent;

    if (name === "All Bookings") {
      setBookingsListData(db_json);
    }
    if (name === "Pending") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Pending");
      setBookingsListData(newList);
    }
    if (name === "Booked") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Booked");
      setBookingsListData(newList);
    }
    if (name === "Canceled") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Canceled");
      setBookingsListData(newList);
    }
    if (name === "Refund") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Refund");
      setBookingsListData(newList);
    }
  };

  //Order Filters by searchKeyboard auto
  const handleSearchByName = (event) => {
    const value = event.target.value.toLowerCase();
    const newList = db_json.filter((booking) => booking.fullName.toLowerCase().includes(value));
    if (value === "") return bookingsByGuestsDebounce(db_json);
    else bookingsByGuestsDebounce(newList);
  };

  //Técnica debounce. Retrasar las llamadas y que se lanzen una vez finalizada. useCallback para memorizar la función y no volver a lanzar indevidamente.
  const bookingsByGuestsDebounce = useCallback(debounce((byName) => setBookingsListData(byName), 700));

  //Display/Close Modal of Description Requests of each row in table: (variable handleModal and handleCloseModal)
  const handleModal = (id_booked_modal) => {
    const viewNote = bookingsListData.filter((booked) => booked.id.includes(id_booked_modal))[0];
    setViewNotes(viewNote);
  };
  const handleCloseModal = () => setViewNotes(null);

  //Its call when status of BookingsData change.
  useEffect(() => {
    if (bookingsStatus === "idle") dispatch(getBookingsThunk());
    else if (bookingsStatus === "rejected") console.log(bookingsError);
    else if (bookingsStatus === "fulfilled") setBookingsListData(bookingsData);
  }, [bookingsStatus]);

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
      {bookingsListData && (
        <PaginationProvider>
          <Table data={bookingsListData} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
