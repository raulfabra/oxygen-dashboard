import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersListData, getUsersListError, getUsersListStatus } from "../../redux/users/UsersSlice";
import { getUsersThunk } from "../../redux/users/UsersThunk";
import { Main, NavTable, FilterTable, CreateElement, OptionsFiltered, DataContent, DataWrapper } from "../../styles/stylesComponents";
import { Table } from "../../components/Table/Table";
import db_json from "../../json/dataUsers.json";
import debounce from "just-debounce-it";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";

export const Users = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [usersListData, setUsersListData] = useState(null);

  const usersData = useSelector(getUsersListData);
  const usersStatus = useSelector(getUsersListStatus);
  const usersError = useSelector(getUsersListError);

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

  const debouncedGetEmployee = useCallback(
    debounce((newList) => {
      setUsersListData(newList);
    }, 500)
  );

  const handleSearchByName = (event) => {
    const value = event.target.value.toLowerCase();
    const newList = usersData.filter((user) => user.fullName.toLowerCase().includes(value));
    if (value === "") return debouncedGetEmployee(db_json);
    else debouncedGetEmployee(newList);
  };

  useEffect(() => {
    if (usersStatus === "idle") dispatch(getUsersThunk());
    else if (usersStatus === "rejected") console.log(usersError);
    else if (usersStatus === "fulfilled") setUsersListData(usersData);
  }, [usersStatus]);

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
      {usersListData && (
        <PaginationProvider>
          <Table data={usersListData} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
