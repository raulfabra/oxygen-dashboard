import db_json from "../../json/dataRooms.json";
import { useNavigate } from "react-router-dom";
import { useLoadingData } from "../../hook/useLoadingData";
import { getRoomsThunk } from "../../redux/rooms/RoomThunk";
import { getRoomsListData, getRoomsListError, getRoomsListStatus } from "../../redux/rooms/RoomSlice";
import { Table } from "../../components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataWrapper, DataContent } from "../../styles/StylesComponts";
import { Models, Room } from "../../types/global";

export const Rooms = () => {
  const navigator = useNavigate();

  const { dataJson, refreshData } = useLoadingData({
    getData: getRoomsListData,
    getError: getRoomsListError,
    getStatus: getRoomsListStatus,
    getApiThunk: getRoomsThunk,
  });

  //Create table: column and data
  const columns = [
    {
      label: "Room Name",
      display: (item: Room) => (
        <DataWrapper>
          <DataContent onClick={() => navigator(`/rooms/${item.id_room}`)}>
            <img src={item.typeRoom.pictures} alt="picture-Room" width={"150px"} />
          </DataContent>
          <DataContent onClick={() => navigator(`/rooms/${item.id_room}`)}>
            <h4>#{item.id_room}</h4>
            <h3>
              {item.typeRoom.bed} - {item.numberRoom}
            </h3>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Room Type",
      display: (item: Room) => `${item.typeRoom.bed}`,
    },
    {
      label: "Room Floor",
      display: (item: Room) => `Floor ${item.numberRoom}`,
    },
    {
      label: "Amenities",
      display: (item: Room) => `${item.typeRoom.amenities}`,
    },
    {
      label: "Price per Night",
      display: (item: Room) => `${item.priceNight}`,
    },
    {
      label: "Status",
      display: (item: Room) => `${item.statusRoom}`,
    },
  ];

  const handleOption = (event: React.MouseEvent<HTMLLIElement>) => {
    const name = event.currentTarget.textContent;

    if (name === "All Rooms") {
      refreshData(dataJson as Room[]);
    }
    if (name === "Available Rooms") {
      const newData = (dataJson as Room[]).filter((room) => room.statusRoom === "Available");
      refreshData(newData);
    }
    if (name === "Booked Rooms") {
      const newData = (dataJson as Room[]).filter((room) => room.statusRoom === "Booked");
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
