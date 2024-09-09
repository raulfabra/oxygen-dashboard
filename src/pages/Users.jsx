import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../components/Table";
import { CreateElement, FilterTable, Main, NavTable, OptionsFiltered } from "../styles/tableStyles";
import db_json from "../json/dataUsers.json";
import debounce from "just-debounce-it";

export const Users = () => {
  const navigator = useNavigate();
  const [usersData, setUsersData] = useState(null);

  //Create table: column and data
  const columns = [
    {
      label: "Name",
      display: (user) => (
        <section>
          <div>
            <img src={user.picture} alt="picture person" width={"100px"} />
          </div>
          <div>
            <h3 onClick={handleUser}>{user.fullName}</h3>
            <h4>#{user.id_user}</h4>
            <h4>Joined on {user.start_date}</h4>
          </div>
        </section>
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
      setUsersData(db_json);
    }
    if (name === "Active Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Active");

      setUsersData(newData);
    }
    if (name === "Inactive Employee") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Inactive");

      setUsersData(newData);
    }
  };

  const debouncedGetEmployee = useCallback(
    debounce((newList) => {
      setUsersData(newList);
    }, 500)
  );

  const handleSearchByName = (event) => {
    const value = event.target.value.toLowerCase();
    const newList = usersData.filter((user) => user.fullName.toLowerCase().includes(value));
    if (value === "") return debouncedGetEmployee(db_json);
    else debouncedGetEmployee(newList);
  };

  const handleUser = (event) => {
    console.log(event.target.value);
    navigator(`/${"hola"}`);
  };

  useEffect(() => {
    setUsersData(db_json);
  }, []);
  return (
    <Main>
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
      {usersData && <Table data={usersData} columns={columns} />}
    </Main>
  );
};
