import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../components/Table";
import { CreateElement, FilterTable, Main, ModalContent, ModalExit, ModalText, ModalWrapper, NavTable, OptionsFiltered } from "../styles/tableStyles";
import db_json from "../json/dataBookings.json";
import debounce from "just-debounce-it";
import iconPerson from "../assets/noun-person.svg";

export const Bookings = () => {
  const navigator = useNavigate();
  const [bookingsData, setBookingsData] = useState(null);
  const [viewNotes, setViewNotes] = useState(null);

  const columns = [
    {
      label: "Guest",
      display: (booked) => (
        <section>
          <div>
            <img src={iconPerson} alt="picture person" width={"50px"} />
          </div>
          <div>
            <h3>{booked.fullName}</h3>
            <h4>#{booked.id_booking}</h4>
          </div>
        </section>
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

  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Bookings") {
      setBookingsData(db_json);
    }
    if (name === "Pending") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Pending");
      setBookingsData(newList);
    }
    if (name === "Booked") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Booked");
      setBookingsData(newList);
    }
    if (name === "Canceled") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Canceled");
      setBookingsData(newList);
    }
    if (name === "Refund") {
      const newList = db_json.filter((booking) => booking.statusBooking === "Refund");
      setBookingsData(newList);
    }
  };

  const debouncedGetBookingsByGuests = useCallback(
    debounce((newList) => {
      setBookingsData(newList);
    }, 500)
  );

  const handleSearchByName = (event) => {
    const value = event.target.value.toLowerCase();
    const newList = bookingsData.filter((booking) => booking.fullName.toLowerCase().includes(value));
    if (value === "") return debouncedGetBookingsByGuests(db_json);
    else debouncedGetBookingsByGuests(newList);
  };

  const handleModal = (id_booked_modal) => {
    const viewNote = bookingsData.filter((booked) => booked.id.includes(id_booked_modal))[0];
    setViewNotes(viewNote);
  };

  const handleCloseModal = () => setViewNotes(null);

  useEffect(() => setBookingsData(db_json), []);

  return (
    <Main>
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOption}>All Bookings</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Pending</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Booked</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Canceled</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Refund</OptionsFiltered>
        </FilterTable>
        <form>
          <label htmlFor="nameCustomer">Name of client</label>
          <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
        </form>
        <CreateElement type="button" onClick={() => navigator("/createBooking")}>
          + New Booking
        </CreateElement>
      </NavTable>
      {bookingsData && <Table data={bookingsData} columns={columns} />}
    </Main>
  );
};
