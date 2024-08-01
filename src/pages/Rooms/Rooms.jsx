import db_json from '../../json/roomsData.json'
import iconRoom from '../../assets/noun-rooms.svg'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

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
  width: 100px;
`
const RoomNameColumn = styled.td`
  display: flex;
`

export const Rooms = () => {
  const navigator = useNavigate()
  const [roomsData, setRoomsData] = useState(null)

  const handleNewRoom = () => {
    navigate('/createBooking')
  }

  useEffect(() => {
    setRoomsData(db_json)
  }, [])

  return (
    <Main>
      <Header>
        <BookingNav>
          <li>All Rooms</li>
          <li>Active Rooms</li>
          <li>Booked Rooms</li>
        </BookingNav>
        <button type="button" onClick={handleNewRoom}>
          + New Room
        </button>
      </Header>
      <TableBooking>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Room Type</th>
            <th>Amenities</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {roomsData &&
            roomsData.map((room) => (
              <tr key={room.id}>
                <RoomNameColumn>
                  <IconWrapper>
                    <img src={iconRoom} alt="icon-room" />
                  </IconWrapper>
                  <div>
                    <p>{room.id.substring(0, 7)}</p>
                    <p>{`${room.type} - ${String(room.numberRoom)}`}</p>
                  </div>
                </RoomNameColumn>
                <td>{room.type}</td>
                <td>{room.amenies}</td>
                <td>{`$${room.price} / Night `}</td>
                <td>{`$${Math.ceil(Number(room.price.substring(1)) * (room.discountprice / 100))} / Night`}</td>
                <td>{room.statusRoom}</td>
              </tr>
            ))}
        </tbody>
        <tfoot></tfoot>
      </TableBooking>
    </Main>
  )
}
