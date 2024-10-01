import { useNavigate } from "react-router-dom";
import { getRoomsListData, getRoomsListError, getRoomsListStatus } from "../../redux/rooms/RoomsSlice";
import { getRoomsThunk } from "../../redux/rooms/RoomsThunk";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataWrapper, DataContent } from "../../styles/StylesComponts";
import { Table } from "../../components/Table/Table";
import db_json from "../../json/dataRooms.json";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { useLoadingData } from "../../hook/useLoadingData";

export const Rooms = () => {
  const navigator = useNavigate();

  const { dataJson, refreshData } = useLoadingData(getRoomsListData, getRoomsListError, getRoomsListStatus, getRoomsThunk);

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
      refreshData(db_json);
    }
    if (name === "Available Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Available");
      refreshData(newData);
    }
    if (name === "Booked Rooms") {
      const newData = db_json.filter((room) => room.statusRoom === "Booked");
      refreshData(newData);
    }
  };

  return (
    <Main $layout>
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOption}>All Rooms</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Available Rooms</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Booked Rooms</OptionsFiltered>
        </FilterTable>
        <CreateElement type="button" onClick={() => navigator("/createRoom")}>
          + New Room
        </CreateElement>
      </NavTable>
      {dataJson && (
        <PaginationProvider>
          <Table data={dataJson} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
