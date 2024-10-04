import { useContext } from "react";
import { PaginationContext } from "../../app/Contexts/PaginationContext";
import { Numbers, PaginationTable, PaginationText, PaginationWrapper, ShowingPage } from "../../styles/StylesComponts";
import { Models, PageInterface } from "../../types/global";

interface PaginationProps {
  dataBase: Models;
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
        <Numbers onClick={() => (context as PageInterface).currentPageDispatch({ type: "decrement", payload: 1 })}>Pre</Numbers>
        {numbers.map((num, index) => (
          <Numbers key={index} onClick={() => (context as PageInterface).currentPageDispatch({ type: "direct", payload: num })}>
            {num}
          </Numbers>
        ))}
        <Numbers onClick={() => (context as PageInterface).currentPageDispatch({ type: "increment", payload: npage })}>Next</Numbers>
      </PaginationTable>
    </PaginationWrapper>
  );
};
