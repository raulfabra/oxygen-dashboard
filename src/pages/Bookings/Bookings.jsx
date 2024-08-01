import { useEffect, useState } from 'react'
import styled from 'styled-components'
import db_json from '../../json/bookingsData.json'
import iconPerson from '../../assets/noun-person.svg'
import { useNavigate } from 'react-router-dom'

const Main = styled.main`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 75%;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const BookingNav = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
`
const BookingStatus = styled.li``

const TableBooking = styled.table`
  margin: 3em 0;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`
const IconWrapper = styled.div`
  width: 50px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
const RoomNameColumn = styled.td`
  display: flex;
`

export const Bookings = () => {
  const navigator = useNavigate()
  const [bookingsData, setBookingsData] = useState(null)

  useEffect(() => {
    setBookingsData(db_json)
  }, [])
  return (
    <Main>
      <Header>
        <BookingNav>
          <li>All Bookings</li>
          <li>Checking in</li>
          <li>Checking out</li>
          <li>In Progress</li>
        </BookingNav>
        <form>
          <label htmlFor="nameCustomer">Name of client</label>
          <input type="text" name="nameCustomer" id="nameCustomer" />
        </form>
        <button type="button" onClick={() => navigator('/createBooking')}>
          + New Booking
        </button>
      </Header>
      <TableBooking>
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
            bookingsData.map((booking) => (
              <tr key={booking.id}>
                <RoomNameColumn>
                  <IconWrapper
                    onClick={() => navigator(`/bookings/${booking.id}`)}
                  >
                    <img src={iconPerson} alt="icon-person" />
                  </IconWrapper>
                  {booking.fullName}
                </RoomNameColumn>
                <td>{booking.orderDate}</td>
                <td>{booking.check_In}</td>
                <td>{booking.check_out}</td>
                <td style={{ width: '40%' }}>{booking.requests}</td>
                <td>{`${booking.roomType.name} - ${String(booking.roomType.number)}`}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
        </tbody>
        <tfoot></tfoot>
      </TableBooking>
    </Main>
  )
}
