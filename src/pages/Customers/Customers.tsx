import { getCustomersThunk } from "../../redux/customers/CustomerThunk";
import { getCustomersListData, getCustomersListStatus, getCustomersListError } from "../../redux/customers/CustomerSlice";
import { useLoadingData } from "../../hook/useLoadingData";
import { rateStarsAssessment } from "../../utils/utils";
import { Table } from "../../components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { CardReview } from "../../components/CardOfReviews/CardReview";
import { Main, FilterTable, NavTable, OptionsFiltered } from "../../styles/StylesComponts";
import { Customer } from "../../types/global";

export const Customers = () => {
  const { dataJson, refreshData } = useLoadingData({
    getData: getCustomersListData,
    getError: getCustomersListError,
    getStatus: getCustomersListStatus,
    getApiThunk: getCustomersThunk,
  });

  const columns = [
    {
      label: "Order ID",
      display: (customer: Customer) => `${customer.orderID}`,
    },
    {
      label: "Date",
      display: (customer: Customer) => `${customer.date.date} ${customer.date.time}`,
    },
    {
      label: "Customer",
      display: (customer: Customer) => (
        <div>
          <p>{customer.customer.fullName}</p>
          <p>{customer.customer.email}</p>
          <p>{customer.customer.phone}</p>
        </div>
      ),
    },
    {
      label: "Comment",
      display: (customer: Customer) => (
        <div>
          <p>{rateStarsAssessment(customer.score)}</p>
          <p>{customer.comment.issue}</p>
          <p>{customer.comment.comment}</p>
        </div>
      ),
    },
    {
      label: "Action",
      display: (customer: Customer) => <button>Archive</button>,
    },
  ];

  return (
    <Main $layout>
      <CardReview />
      <NavTable>
        <FilterTable>
          <OptionsFiltered>All Employee</OptionsFiltered>
          <OptionsFiltered>Active Employee</OptionsFiltered>
          <OptionsFiltered>Inactive Employee</OptionsFiltered>
        </FilterTable>
      </NavTable>
      {dataJson && (
        <PaginationProvider>
          <Table data={dataJson} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
