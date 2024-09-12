import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table/Table";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataWrapper, DataContent } from "../../styles/stylesComponents";
import db_json from "../../json/dataRooms.json";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListData, getRoomsListError, getRoomsListStatus } from "../../redux/rooms/RoomsSlice";
import { getRoomsThunk } from "../../redux/rooms/RoomsThunk";

export const Rooms = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [roomsListData, setRoomsListData] = useState(null);

  const roomsData = useSelector(getRoomsListData);
  const roomsStatus = useSelector(getRoomsListStatus);
  const roomsError = useSelector(getRoomsListError);

  //Create table: column and data
  const columns = [
    {
      label: "Room Name",
      display: (room) => (
        <DataWrapper>
          <DataContent onClick={() => navigator(`/rooms/${room.id_room}`)}>
            <img src={room.typeRoom.pictures} alt="picture-Room" width={"150px"} />
          </DataContent>
          <DataContent onClick={() => navigator(`/rooms/${room.id_room}`)}>
            <h4>#{room.id_room}</h4>
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
      setRoomsListData(db_json);
    }
    if (name === "Active Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Available");
      setRoomsListData(newData);
    }
    if (name === "Booked Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Booked");
      setRoomsListData(newData);
    }
  };

  useEffect(() => {
    if (roomsStatus === "idle") dispatch(getRoomsThunk());
    else if (roomsStatus === "rejected") console.log(roomsError);
    else if (roomsStatus === "fulfilled") setRoomsListData(roomsData);
  }, [roomsStatus]);

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
      {roomsListData && <Table data={roomsListData} columns={columns} />}
    </Main>
  );
};
