import db_json from '../../json/roomsData.json'
import iconRoom from '../../assets/noun-rooms.svg'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
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
const OrderBookings = styled.li`
  margin-right: 1em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`

const TableBooking = styled.table`
  margin: 3em 0;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`
const IconWrapper = styled.div`
  width: 100px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
const RoomNameColumn = styled.td`
  display: flex;
`

export const Rooms = () => {
  const navigator = useNavigate()
  const [roomsData, setRoomsData] = useState(null)
  const [isOrderByActiveRooms, setIsOrderByActiveRooms] = useState(false)
  const [isOrderByInactiveRooms, setIsOrderByInactiveRooms] = useState(false)

  useEffect(() => {
    setRoomsData(db_json)
  }, [])

  const handleOption = (event) => {
    const name = event.target.textContent

    if (name === 'All Rooms') {
      setIsOrderByActiveRooms(false)
      setIsOrderByInactiveRooms(false)
    }
    if (name === 'Active Rooms') {
      setIsOrderByActiveRooms(!isOrderByActiveRooms)
      setIsOrderByInactiveRooms(false)
    }
    if (name === 'Booked Rooms') {
      setIsOrderByInactiveRooms(!isOrderByInactiveRooms)
      setIsOrderByActiveRooms(false)
    }
  }
  return (
    <Main>
      <Header>
        <BookingNav>
          <OrderBookings onClick={handleOption}>All Rooms</OrderBookings>
          <OrderBookings onClick={handleOption}>Active Rooms</OrderBookings>
          <OrderBookings onClick={handleOption}>Booked Rooms</OrderBookings>
        </BookingNav>
        <button type="button" onClick={() => navigator('/createRoom')}>
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
            !isOrderByActiveRooms &&
            !isOrderByInactiveRooms &&
            roomsData.map((room) => (
              <tr key={room.id}>
                <RoomNameColumn>
                  <IconWrapper onClick={() => navigator(`/rooms/${room.id}`)}>
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
          {roomsData &&
            isOrderByActiveRooms &&
            !isOrderByInactiveRooms &&
            roomsData
              .filter((room) => room.statusRoom === 'Available')
              .map((room) => (
                <tr key={room.id}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/rooms/${room.id}`)}>
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
          {roomsData &&
            !isOrderByActiveRooms &&
            isOrderByInactiveRooms &&
            roomsData
              .filter((room) => room.statusRoom === 'Booked')
              .map((room) => (
                <tr key={room.id}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/rooms/${room.id}`)}>
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
