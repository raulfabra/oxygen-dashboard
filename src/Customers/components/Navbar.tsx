import { NavTable, FilterTable, CreateElement, OptionsFiltered } from "../../app/components/Table/styleNavbar";

export const Navbar = () => {
  // Order Filters for table: (variable handleOptions)
  const handleOptions = (event: React.MouseEvent<HTMLLIElement>) => {
    const option = event.currentTarget.textContent;

    switch (option) {
      case "All Bookings":
        break;
      case "Pending":
        break;
      case "Canceled":

      case "Booked":

      case "Refund":

      default:
    }
  };

  // Order Filters by searchKeyboard auto
  const handleSearchByName = () => {};
  // Técnica debounce. Retrasar las llamadas y que se lanzen una vez finalizada.

  // useCallback para memorizar la función y no volver a lanzar indevidamente.

  // const bookingsByGuestsDebounce = useCallback(debounce((byName) => refreshData(byName), 700));

  return (
    <NavTable>
      <FilterTable>
        <OptionsFiltered onClick={handleOptions}>All Bookings</OptionsFiltered>
        <OptionsFiltered onClick={handleOptions}>Pending</OptionsFiltered>
        <OptionsFiltered onClick={handleOptions}>Booked</OptionsFiltered>
        <OptionsFiltered onClick={handleOptions}>Canceled</OptionsFiltered>
        <OptionsFiltered onClick={handleOptions}>Refund</OptionsFiltered>
      </FilterTable>
      <form>
        <label htmlFor="nameCustomer">Name of client</label>
        <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
      </form>
      <CreateElement type="button">+ New Booking</CreateElement>
    </NavTable>
  );
};
