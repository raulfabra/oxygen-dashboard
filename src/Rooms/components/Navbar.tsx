import { NavTable, FilterTable, CreateElement, OptionsFiltered } from "../../app/components/Table/styleNavbar";
import { useRoomsActions } from "../hooks/useRoomsActions";

export const Navbar = () => {
  const { handleFilteredBy } = useRoomsActions();
  // Order Filters by searchKeyboard auto
  const handleSearchByName = () => {};
  // Técnica debounce. Retrasar las llamadas y que se lanzen una vez finalizada.

  // useCallback para memorizar la función y no volver a lanzar indevidamente.

  // const bookingsByGuestsDebounce = useCallback(debounce((byName) => refreshData(byName), 700));

  return (
    <NavTable>
      <FilterTable>
        <OptionsFiltered onClick={() => handleFilteredBy()}>All Bookings</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("available")}>Available</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("booked")}>Booked</OptionsFiltered>
      </FilterTable>
      <CreateElement type="button">+ New Room</CreateElement>
    </NavTable>
  );
};
