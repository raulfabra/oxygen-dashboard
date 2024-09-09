import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "just-debounce-it";
import db_json from "../json/bookingsData.json";
import { CreateElement, FilterTable, Main, NavTable, OptionsFiltered } from "../styles/tableStyles";
/* import iconPerson from "../../assets/noun-person.svg"; */

export const Bookings = () => {
  const navigator = useNavigate();
  const [bookingsData, setBookingsData] = useState(null);
  const [orderByCheckIn, setOrderByCheckIn] = useState(false);
  const [orderByCheckOut, setOrderByCheckOut] = useState(false);
  const [orderByInProgress, setOrderByInProgress] = useState(false);

  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Bookings") {
      console.log("Hola");
      setOrderByCheckIn(false);
      setOrderByCheckOut(false);
      setOrderByInProgress(false);
      setBookingsData(db_json);
    }
    if (name === "Checking in") {
      setOrderByCheckIn(!orderByCheckIn);
      setOrderByCheckOut(false);
      setOrderByInProgress(false);
      const newList = [...bookingsData];
      setBookingsData(newList);
    }
    if (name === "Checking out") {
      setOrderByCheckIn(false);
      setOrderByCheckOut(!orderByCheckOut);
      setOrderByInProgress(false);
      const newList = [...bookingsData];
      setBookingsData(newList);
    }
    if (name === "In Progress") {
      setOrderByCheckIn(false);
      setOrderByCheckOut(false);
      setOrderByInProgress(!orderByInProgress);
      const newList = [...bookingsData];
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

  useEffect(() => {
    setBookingsData(db_json);
  }, []);

  return (
    <Main>
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOption}>All Bookings</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Checking in</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Checking out</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>In Progress</OptionsFiltered>
        </FilterTable>
        <form>
          <label htmlFor="nameCustomer">Name of client</label>
          <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
        </form>
        <CreateElement type="button" onClick={() => navigator("/createBooking")}>
          + New Booking
        </CreateElement>
      </NavTable>
      {/* <TableBooking>
        <thead>
          <tr>
            <th>Guest</th>
            <th>Order Date</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingsData &&
            !orderByCheckIn &&
            !orderByCheckOut &&
            !orderByInProgress &&
            bookingsData.map((booking) => (
              <tr key={booking.id}>
                <RoomNameColumn>
                  <IconWrapper onClick={() => navigator(`/bookings/${booking.id}`)} $width='50px'>
                    <img src={iconPerson} alt="icon-person" />
                  </IconWrapper>
                  {booking.fullName}
                </RoomNameColumn>
                <td>{booking.orderDate}</td>
                <td>{booking.check_out}</td>
                <td>{booking.check_In}</td>
                <td style={{ width: "40%" }}>{booking.requests}</td>
                <td>{`${booking.roomType.name} - ${String(booking.roomType.number)}`}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          {bookingsData &&
            orderByCheckIn &&
            !orderByCheckOut &&
            !orderByInProgress &&
            bookingsData
              .sort((a, b) => {
                const dateA = new Date(a.check_out.replace(" ", "T"));
                const dateB = new Date(b.check_out.replace(" ", "T"));

                return dateA - dateB;
              })
              .map((booking) => (
                <tr key={booking.id}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/bookings/${booking.id}`)}>
                      <img src={iconPerson} alt="icon-person" />
                    </IconWrapper>
                    {booking.fullName}
                  </RoomNameColumn>
                  <td>{booking.orderDate}</td>
                  <td>{booking.check_out}</td>
                  <td>{booking.check_In}</td>
                  <td style={{ width: "40%" }}>{booking.requests}</td>
                  <td>{`${booking.roomType.name} - ${String(booking.roomType.number)}`}</td>
                  <td>{booking.status}</td>
                </tr>
              ))}
          {bookingsData &&
            !orderByCheckIn &&
            orderByCheckOut &&
            !orderByInProgress &&
            bookingsData
              .sort((a, b) => {
                const dateA = new Date(a.check_In.replace(" ", "T"));
                const dateB = new Date(b.check_In.replace(" ", "T"));

                return dateA - dateB;
              })
              .map((booking) => (
                <tr key={booking.id}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/bookings/${booking.id}`)}>
                      <img src={iconPerson} alt="icon-person" />
                    </IconWrapper>
                    {booking.fullName}
                  </RoomNameColumn>
                  <td>{booking.orderDate}</td>
                  <td>{booking.check_out}</td>
                  <td>{booking.check_In}</td>
                  <td style={{ width: "40%" }}>{booking.requests}</td>
                  <td>{`${booking.roomType.name} - ${String(booking.roomType.number)}`}</td>
                  <td>{booking.status}</td>
                </tr>
              ))}
          {bookingsData &&
            !orderByCheckIn &&
            !orderByCheckOut &&
            orderByInProgress &&
            bookingsData
              .sort((a, b) => {
                const dateA = new Date(a.orderDate.replace(" ", "T"));
                const dateB = new Date(b.orderDate.replace(" ", "T"));

                return dateA - dateB;
              })
              .filter((booking) => booking.status === "Pending")
              .map((booking) => (
                <tr key={booking.id}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/bookings/${booking.id}`)}>
                      <img src={iconPerson} alt="icon-person" />
                    </IconWrapper>
                    {booking.fullName}
                  </RoomNameColumn>
                  <td>{booking.orderDate}</td>
                  <td>{booking.check_out}</td>
                  <td>{booking.check_In}</td>
                  <td style={{ width: "40%" }}>{booking.requests}</td>
                  <td>{`${booking.roomType.name} - ${String(booking.roomType.number)}`}</td>
                  <td>{booking.status}</td>
                </tr>
              ))}
        </tbody>
        <tfoot></tfoot>
      </TableBooking> */}
    </Main>
  );
};
