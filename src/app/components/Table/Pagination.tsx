import { useContext } from "react";
import { PaginationContext } from "../../Contexts/PaginationContext";
import { Numbers, PaginationTable, PaginationText, PaginationWrapper, ShowingPage } from "./stylePagination";
import { Booking } from "../../../Bookings/types/type";
import { TypePaginationContext } from "../../Contexts/type";
import { Room } from "../../../Rooms/types/type";

interface PaginationProps {
  dataBase: Booking[] | Room[];
  rowsPerPage: number;
}

export const Pagination = ({ dataBase, rowsPerPage }: PaginationProps) => {
  const context = useContext(PaginationContext);
  const npage = Math.ceil(dataBase.length / rowsPerPage); // Number of pages have our table
  const numbers = [...Array(npage + 1).keys()].slice(1); // All numbers of our table saved in Array

  return (
    <PaginationWrapper>
      <PaginationText>
        <ShowingPage>
          Showing {rowsPerPage} of {dataBase.length} Data
        </ShowingPage>
      </PaginationText>
      <PaginationTable>
        <Numbers onClick={() => (context as TypePaginationContext).paginationDispatch({ type: "decrement", payload: 1 })}>Pre</Numbers>
        {numbers.map((num, index) => (
          <Numbers key={index} onClick={() => (context as TypePaginationContext).paginationDispatch({ type: "direct", payload: num })}>
            {num}
          </Numbers>
        ))}
        <Numbers onClick={() => (context as TypePaginationContext).paginationDispatch({ type: "increment", payload: npage })}>Next</Numbers>
      </PaginationTable>
    </PaginationWrapper>
  );
};
