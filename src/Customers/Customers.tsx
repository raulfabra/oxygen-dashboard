import { useNavigate } from "react-router-dom";
import { Table } from "../app/components/Table/Table";
import { PaginationProvider } from "../app/Providers/PaginationProvider";
import { Navbar } from "./components/Navbar";
import { TypeCustomerColumns } from "./types/type";
import { useCustomerDatos } from "./hooks/useCustomerDatos";
import { rateStarsAssessment } from "./utils/utils";
import { getFormatDate } from "../app/utils/utils";

function fillColumns(): TypeCustomerColumns[] {
  const navigator = useNavigate();

  return [
    {
      label: "Order ID",
      display: (customer) => `${customer.id}`,
    },
    {
      label: "Date",
      display: (customer) => `${getFormatDate(customer.date)}`,
    },
    {
      label: "Customer",
      display: (customer) => (
        <div>
          <p>{customer.fullName}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      ),
    },
    {
      label: "Comment",
      display: (customer) => (
        <div>
          <p>{rateStarsAssessment(customer.score)}</p>
          <p>{customer.issue}</p>
          <p>{customer.comment}</p>
        </div>
      ),
    },
    {
      label: "Action",
      display: (customer) => <button>Archive</button>,
    },
  ];
}

export const Customers = () => {
  const { showData, setShowData } = useCustomerDatos();
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
