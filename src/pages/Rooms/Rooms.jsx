import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataWrapper, DataContent } from "../../styles/stylesComponents";
import db_json from "../../json/dataRooms.json";
/* import iconRoom from "../../assets/noun-rooms.svg"; */

export const Rooms = () => {
  const navigator = useNavigate();
  const [roomsData, setRoomsData] = useState(null);

  //Create table: column and data
  const columns = [
    {
      label: "Room Name",
      display: (room) => (
        <DataWrapper>
          <DataContent>
            <img src={room.typeRoom.pictures} alt="picture-Room" width={"150px"} />
          </DataContent>
          <DataContent>
            <h4>#{room.Id_room}</h4>
            <h3>
              {room.typeRoom.bed} - {room.numberRoom}
            </h3>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Room Type",
      display: (room) => `${room.typeRoom.bed}`,
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
      setRoomsData(db_json);
    }
    if (name === "Active Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Available");
      setRoomsData(newData);
    }
    if (name === "Booked Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Booked");
      setRoomsData(newData);
    }
  };

  useEffect(() => {
    setRoomsData(db_json);
  }, []);

  return (
    <Main $layout>
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
