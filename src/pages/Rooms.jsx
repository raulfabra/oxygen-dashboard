import db_json from "../json/dataRooms.json";
/* import iconRoom from "../../assets/noun-rooms.svg"; */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterTable, Main, NavTable, OptionsFiltered, CreateElement } from "../styles/tableStyles";
import { Table } from "../components/Table";

export const Rooms = () => {
  const navigator = useNavigate();
  const [roomsData, setRoomsData] = useState(null);
  const [isOrderByActiveRooms, setIsOrderByActiveRooms] = useState(false);
  const [isOrderByInactiveRooms, setIsOrderByInactiveRooms] = useState(false);

  const columns = [
    {
      label: "Room Name",
      display: (room) => (
        <section>
          <div>
            <img src={room.typeRoom.pictures} alt="picture-Room" width={"100px"} />
          </div>
          <div>
            <h4>{room.Id_room}</h4>
            <h3>
              {room.typeRoom.bed} - {room.numberRoom}
            </h3>
          </div>
        </section>
      ),
    },
    {
      label: "Room Type",
      display: (row) => `${row.typeRoom.bed}`,
    },
    {
      label: "Room Floor",
      display: (room) => `Floor ${room.numberRoom}`,
    },
    {
      label: "Amenities",
      display: (room) => `${room.typeRoom.amenities}`,
    },
    {
      label: "Price per Night",
      display: (room) => `${room.priceNight}`,
    },
    {
      label: "Status",
      display: (room) => `${room.statusRoom}`,
    },
  ];

  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Rooms") {
      setIsOrderByActiveRooms(false);
      setIsOrderByInactiveRooms(false);
    }
    if (name === "Active Rooms") {
      setIsOrderByActiveRooms(!isOrderByActiveRooms);
      setIsOrderByInactiveRooms(false);
    }
    if (name === "Booked Rooms") {
      setIsOrderByInactiveRooms(!isOrderByInactiveRooms);
      setIsOrderByActiveRooms(false);
    }
  };

  useEffect(() => {
    setRoomsData(db_json);
  }, []);

  return (
    <Main>
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOption}>All Rooms</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Active Rooms</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Booked Rooms</OptionsFiltered>
        </FilterTable>
        <CreateElement type="button" onClick={() => navigator("/createRoom")}>
          + New Room
        </CreateElement>
      </NavTable>
      {roomsData && <Table data={roomsData} columns={columns} />}
    </Main>
  );
};
