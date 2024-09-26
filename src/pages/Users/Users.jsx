import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersListData, getUsersListError, getUsersListStatus } from "../../redux/users/UsersSlice";
import { getUsersThunk } from "../../redux/users/UsersThunk";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataContent, DataWrapper } from "../../styles/stylesComponents";
import { Table } from "../../components/Table/Table";
import db_json from "../../json/dataUsers.json";
import debounce from "just-debounce-it";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { useLoadingData } from "../../hook/useLoadingData";

export const Users = () => {
  const navigator = useNavigate();

  const { dataJson, refreshData } = useLoadingData(getUsersListData, getUsersListError, getUsersListStatus, getUsersThunk);

  //Create table: column and data
  const columns = [
    {
      label: "Name",
      display: (user) => (
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
      display: (user) => `${user.jobDesk}`,
    },
    {
      label: "Email",
      display: (user) => `📧 ${user.email}`,
    },
    {
      label: "Contact",
      display: (user) => `📲 ${user.phone}`,
    },
    {
      label: "Status",
      display: (user) => `${user.statusEmployeer}`,
    },
  ];
  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Employee") {
      refreshData(db_json);
    }
    if (name === "Active Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Active");

      refreshData(newData);
    }
    if (name === "Inactive Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Inactive");

      refreshData(newData);
    }
  };

  const debouncedGetEmployee = useCallback(
    debounce((newList) => {
      refreshData(newList);
    }, 500)
  );

  const handleSearchByName = (event) => {
    const value = event.target.value.toLowerCase();
    const newList = usersData.filter((user) => user.fullName.toLowerCase().includes(value));
    if (value === "") return debouncedGetEmployee(db_json);
    else debouncedGetEmployee(newList);
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
