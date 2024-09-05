import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import db_json from "../json/usersData.json";
import { useNavigate } from "react-router-dom";
import debounce from "just-debounce-it";
import { FaPhone } from "react-icons/fa6";
import { MdVerticalAlignCenter } from "react-icons/md";

const Main = styled.main`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 75%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MenuOptions = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 10px;
`;
const UsersStates = styled.li`
  margin-right: 1em;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const Table = styled.table`
  margin: 3em 0;
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;
const IconWrapper = styled.div`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const RoomNameColumn = styled.td`
  display: flex;
`;

const PictureUser = styled.img`
  width: 150px;
  height: 120px;
`;

export const Users = () => {
  const navigator = useNavigate();
  const [usersData, setUsersData] = useState(null);
  const [showActiveEmployee, setShowActive] = useState(false);
  const [showInactiveEmployee, setShowInactive] = useState(false);

  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Employee") {
      setShowActive(false);
      setShowInactive(false);
      setUsersData(db_json);
    }
    if (name === "Active Employee") {
      setShowActive(!showActiveEmployee);
      setShowInactive(false);

      const newList = [...usersData];
      setUsersData(newList);
    }
    if (name === "Inactive Employee") {
      setShowActive(false);
      setShowInactive(!showInactiveEmployee);

      const newList = [...usersData];
      setUsersData(newList);
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

  useEffect(() => {
    setUsersData(db_json);
  }, []);
  return (
    <Main>
      <Header>
        <MenuOptions>
          <UsersStates onClick={handleOption}>All Employee</UsersStates>
          <UsersStates onClick={handleOption}>Active Employee</UsersStates>
          <UsersStates onClick={handleOption}>Inactive Employee</UsersStates>
        </MenuOptions>
        <form>
          <label htmlFor="nameCustomer">Search Employee: </label>
          <input type="text" name="nameCustomer" id="nameCustomer" onChange={handleSearchByName} />
        </form>
        <button type="button" onClick={() => navigator("/createUser")}>
          + New Employee
        </button>
      </Header>
      {/* <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Desk</th>
            <th>Shedule</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            !showActiveEmployee &&
            !showInactiveEmployee &&
            usersData.map((user) => (
              <tr key={user.id_user}>
                <RoomNameColumn>
                  <IconWrapper onClick={() => navigator(`/users/${user.id_user}`)}>
                    <PictureUser src="/public/ratatouille.jfif" alt="picturePerson" />
                  </IconWrapper>
                  <div style={{ textAlign: "center", padding: "1em 0" }}>
                    <p> {user.fullName} </p>
                    <p> {user.id_user} </p>
                    <p> Joined on {user.startDate}</p>
                  </div>
                </RoomNameColumn>
                <td style={{ width: "25%" }}>{user.jobDescription}</td>
                <td>Monday, Friday and Wednesday</td>
                <td>
                  <FaPhone />
                  {user.phone}
                </td>
                <td>{user.status}</td>
              </tr>
            ))}
          {usersData &&
            showActiveEmployee &&
            !showInactiveEmployee &&
            usersData
              .filter((user) => user.status === "Active")
              .map((user) => (
                <tr key={user.id_user}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/users/${user.id_user}`)}>
                      <PictureUser src="/public/ratatouille.jfif" alt="picturePerson" />
                    </IconWrapper>
                    <div>
                      <p> {user.fullName} </p>
                      <p> {user.id_user} </p>
                      <p> Joined on {user.startDate}</p>
                    </div>
                  </RoomNameColumn>
                  <td style={{ width: "25%" }}>{user.jobDescription}</td>
                  <td>Monday, Friday and Wednesday</td>
                  <td>
                    <FaPhone />
                    {user.phone}
                  </td>
                  <td>{user.status}</td>
                </tr>
              ))}
          {usersData &&
            !showActiveEmployee &&
            showInactiveEmployee &&
            usersData
              .filter((user) => user.status === "Inactive")
              .map((user) => (
                <tr key={user.id_user}>
                  <RoomNameColumn>
                    <IconWrapper onClick={() => navigator(`/users/${user.id_user}`)}>
                      <PictureUser src="/public/ratatouille.jfif" alt="picturePerson" />
                    </IconWrapper>
                    <div>
                      <p> {user.fullName} </p>
                      <p> {user.id_user} </p>
                      <p> Joined on {user.startDate}</p>
                    </div>
                  </RoomNameColumn>
                  <td style={{ width: "25%" }}>{user.jobDescription}</td>
                  <td>Monday, Friday and Wednesday</td>
                  <td>
                    <FaPhone />
                    {user.phone}
                  </td>
                  <td>{user.status}</td>
                </tr>
              ))}
        </tbody>
        <tfoot></tfoot>
      </Table> */}
    </Main>
  );
};
