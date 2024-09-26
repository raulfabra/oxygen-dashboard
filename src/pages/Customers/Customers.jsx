import { getCustomersListData, getCustomersListStatus, getCustomersListError } from "../../redux/customers/CustomersSlice";
import { getCustomersThunk } from "../../redux/customers/CustomersThunk";
import { useLoadingData } from "../../hook/useLoadingData";
import { CardReview } from "../../components/CardOfReviews/CardReview";
import { Table } from "../../components/Table/Table";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { FilterTable, Main, NavTable, OptionsFiltered } from "../../styles/stylesComponents";

export const Customers = () => {
  const { dataJson, refreshData } = useLoadingData(getCustomersListData, getCustomersListError, getCustomersListStatus, getCustomersThunk);

  const columns = [
    {
      label: "Order ID",
      display: (customer) => `${customer.orderID}`,
    },
    {
      label: "Date",
      display: (customer) => `${customer.date.date} ${customer.date.time}`,
    },
    {
      label: "Customer",
      display: (customer) => (
        <div>
          <p>{customer.customer.fullName}</p>
          <p>{customer.customer.email}</p>
          <p>{customer.customer.phone}</p>
        </div>
      ),
    },
    {
      label: "Comment",
      display: (customer) => (
        <div>
          <p>{rateStarsAssessment(customer.score)}</p>
          <p>{customer.comment.issue}</p>
          <p>{customer.comment.comment}</p>
        </div>
      ),
    },
    {
      label: "Action",
      display: (customer) => <button>Archive</button>,
    },
  ];

  function rateStarsAssessment(rate) {
    let stars = "";
    let count = 1;
    while (count <= rate) {
      stars += "⭐";
      count++;
    }
    return stars;
  }

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
