import { NavTable, FilterTable, CreateElement, OptionsFiltered } from "../../app/components/Table/styleNavbar";
import { useBookingActions } from "../hooks/useBookingActions";

export const Navbar = () => {
  const { handleFilteredBy } = useBookingActions();
  // Order Filters by searchKeyboard auto
  const handleSearchByName = () => {};
  // Técnica debounce. Retrasar las llamadas y que se lanzen una vez finalizada.

  // useCallback para memorizar la función y no volver a lanzar indevidamente.

  // const bookingsByGuestsDebounce = useCallback(debounce((byName) => refreshData(byName), 700));

  return (
    <NavTable>
      <FilterTable>
        <OptionsFiltered onClick={() => handleFilteredBy()}>All Bookings</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("pending")}>Pending</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("booked")}>Booked</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("canceled")}>Canceled</OptionsFiltered>
        <OptionsFiltered onClick={() => handleFilteredBy("refund")}>Refund</OptionsFiltered>
      </FilterTable>
      <form>
        <label htmlFor="nameCustomer">Name of client</label>
        <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
      </form>
      <CreateElement type="button">+ New Booking</CreateElement>
    </NavTable>
  );
};
