import db_json from "../../json/dataUsers.json";
import { useNavigate } from "react-router-dom";
import { useLoadingData } from "../../hook/useLoadingData";
import { getUsersThunk } from "../../redux/users/UserThunk";
import { getUsersListData, getUsersListError, getUsersListStatus } from "../../redux/users/UsersSlice";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { Table } from "../../components/Table/Table";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataContent, DataWrapper } from "../../styles/StylesComponts";
import { User } from "../../types/global";

export const Users = () => {
  const navigator = useNavigate();

  const { dataJson, refreshData } = useLoadingData({
    getData: getUsersListData,
    getError: getUsersListError,
    getStatus: getUsersListStatus,
    getApiThunk: getUsersThunk,
  });

  //Create table: column and data
  const columns = [
    {
      label: "Name",
      display: (user: User) => (
        <DataWrapper>
          <DataContent>
            <img src={user.picture} alt="picture person" width={"130px"} />
          </DataContent>
          <DataContent>
            <h3>{user.fullName}</h3>
            <h4>#{user.id_user}</h4>
            <h4>Joined on {user.start_date}</h4>
          </DataContent>
        </DataWrapper>
      ),
    },
    {
      label: "Job Desk",
      display: (user: User) => `${user.jobDesk}`,
    },
    {
      label: "Email",
      display: (user: User) => `📧 ${user.email}`,
    },
    {
      label: "Contact",
      display: (user: User) => `📲 ${user.phone}`,
    },
    {
      label: "Status",
      display: (user: User) => `${user.statusEmployeer}`,
    },
  ];
  const handleOption = (event: React.MouseEvent<HTMLLIElement>) => {
    const name = event.currentTarget.textContent;

    if (name === "All Employee") {
      refreshData(dataJson as User[]);
    }
    if (name === "Active Employee") {
      const newData = (dataJson as User[]).filter((user) => user.statusEmployeer === "Active");
      refreshData(newData);
    }
    if (name === "Inactive Employee") {
      const newData = (dataJson as User[]).filter((user) => user.statusEmployeer === "Inactive");

      refreshData(newData);
    }
  };

  /*   const debouncedGetEmployee = useCallback(
    debounce((newList: User) => {
      refreshData(newList);
    }, 500)
  ); */

  const handleSearchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!dataJson) throw Error("The json data was null");
    else {
      const value = event.target.value.toLowerCase();
      const newList = (dataJson as User[]).filter((user) => user.fullName.toLowerCase().includes(value));
    }
    /* if (value === "") return debouncedGetEmployee(db_json);
    else debouncedGetEmployee(newList); */
  };

  return (
    <Main $layout>
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
      {dataJson && (
        <PaginationProvider>
          <Table data={dataJson} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
