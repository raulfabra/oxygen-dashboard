import { useEffect, useState } from "react";
import { CardReview } from "../../components/CardOfReviews/CardReview";
import { CreateElement, FilterTable, Main, NavTable, OptionsFiltered } from "../../styles/stylesComponents";
import db_json from "../../json/dataCustomer.json";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCustomersListData, getCustomersListStatus, getCustomersListError } from "../../redux/customers/CustomersSlice";
import { getCustomersThunk } from "../../redux/customers/CustomersThunk";
import { PaginationProvider } from "../../app/Providers/PaginationProvider";
import { Table } from "../../components/Table/Table";

export const Reviews = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [reviewsList, setReviewsList] = useState(null);

  const customersData = useSelector(getCustomersListData);
  const customersStatus = useSelector(getCustomersListStatus);
  const customersError = useSelector(getCustomersListError);

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

  const handleOption = (event) => {
    const name = event.target.textContent;

    if (name === "All Customer Reviews") {
      setUsersListData(db_json);
    }
    if (name === "Archived") {
      const newData = db_json.filter((user) => user.statusEmployeer === "Archived");

      setUsersListData(newData);
    }
  };

  useEffect(() => {
    if (customersStatus === "idle") dispatch(getCustomersThunk());
    else if (customersStatus === "rejected") console.log(customersError);
    else if (customersStatus === "fulfilled") setReviewsList(customersData);
  }, [customersStatus]);

  return (
    <Main $layout>
      <CardReview />
      <NavTable>
        <FilterTable>
          <OptionsFiltered onClick={handleOption}>All Employee</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Active Employee</OptionsFiltered>
          <OptionsFiltered onClick={handleOption}>Inactive Employee</OptionsFiltered>
        </FilterTable>
        <CreateElement type="button" onClick={() => navigator("/createUser")}>
          + New Employee
        </CreateElement>
      </NavTable>
      {reviewsList && (
        <PaginationProvider>
          <Table data={reviewsList} columns={columns} />
        </PaginationProvider>
      )}
    </Main>
  );
};
