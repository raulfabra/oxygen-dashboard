export const NavTable = () => {
  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Employee") {
      setUsersListData(db_json);
    }
    if (name === "Active Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Active");

      setUsersListData(newData);
    }
    if (name === "Inactive Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Inactive");

      setUsersListData(newData);
    }
  };
  return (
    <NavTable>
      <FilterTable>
        <OptionsFiltered onClick={handleOption}>All Employee</OptionsFiltered>
        <OptionsFiltered onClick={handleOption}>Active Employee</OptionsFiltered>
        <OptionsFiltered onClick={handleOption}>Inactive Employee</OptionsFiltered>
      </FilterTable>
      <form>
        <label htmlFor="nameCustomer">Search Employee: </label>
        <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
      </form>
      <CreateElement type="button" onClick={() => navigator("/createUser")}>
        + New Employee
      </CreateElement>
    </NavTable>
  );
};
