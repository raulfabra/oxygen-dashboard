import { useNavigate } from "react-router-dom";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { Table } from "../../app/components/Table/Table";
import { Navbar } from "../components/Navbar";
import { useUserDatos } from "../hooks/useUserDatos";
import { DataContent, DataWrapper } from "../styles/user-styles";
import { TypeUserColumns } from "../types/type";

function fillColumns(): TypeUserColumns[] {
  const navigator = useNavigate();

  return [
    {
      label: "Name",
      display: (user) => (
        <DataWrapper>
          <DataContent>
            <img src={user.picture} alt="picture person" width={"130px"} />
          </DataContent>
          <DataContent>
            <h3>{user.fullName}</h3>
            <h4>#{user.id}</h4>
            <h4>Joined on {user.startDate.toString()}</h4>
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
      display: (user) => `${user.status}`,
    },
  ];
}

export const UserTable = () => {
  const { showData, setShowData } = useUserDatos();
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
