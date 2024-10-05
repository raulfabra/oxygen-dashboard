import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Table } from "../../app/components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { DataWrapper, DataContent } from "../styles/room-styles";
import { TypeRoomsColumns } from "../types/type";
import { useRoomsDatos } from "../hooks/useRoomsDatos";
import { useRoomsActions } from "../hooks/useRoomsActions";

function fillColumns(): TypeRoomsColumns[] {
  const navigator = useNavigate();

  const { handleDisplayRoomID } = useRoomsActions();

  return [
    {
      label: "Room Name",
      display: (item) => (
        <DataWrapper>
          <DataContent onClick={() => handleDisplayRoomID(item.id)}>
            <img src={item.pictures} alt="picture-Room" width={"150px"} />
          </DataContent>
          <DataContent onClick={() => handleDisplayRoomID(item.id)}>
            <h4>#{item.id}</h4>
            <h3>
              {item.typeRoom_bed} - {item.numberRoom}
            </h3>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Room Type",
      display: (item) => `${item.typeRoom_bed}`,
    },
    {
      label: "Room Floor",
      display: (item) => `Floor ${item.numberRoom}`,
    },
    {
      label: "Amenities",
      display: (item) => `${item.facilities}`,
    },
    {
      label: "Price per Night",
      display: (item) => `${item.priceNight}`,
    },
    {
      label: "Status",
      display: (item) => `${item.status}`,
    },
  ];
}

export const RoomTable = () => {
  const { showData, setShowData } = useRoomsDatos();

  return (
    <>
      <Navbar />
      {showData && (
        <PaginationProvider>
          <Table data={showData} columns={fillColumns()} />
        </PaginationProvider>
      )}
    </>
  );
};
