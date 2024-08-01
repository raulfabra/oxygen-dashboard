import { useEffect, useState } from 'react'
import styled from 'styled-components'
import db_json from '../../json/bookingsData.json'

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

export const Bookings = () => {
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
                <td>{booking.fullName}</td>
                <td>{booking.orderDate}</td>
                <td>{booking.check_In}</td>
                <td>{booking.check_out}</td>
                <td>{booking.requests}</td>
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
