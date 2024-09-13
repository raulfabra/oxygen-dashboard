import { useContext } from "react";
import { PaginationContext } from "../../app/Contexts/PaginationContext";
import { colors } from "../../styles/themes/theme";
import styled from "styled-components";

/******************************************/
const PaginationWrapper = styled.nav`
  margin: 3em;
  display: flex;
  justify-content: space-around;
`;
const PaginationText = styled.div``;

const PaginationTable = styled.ul`
  padding: 1em;
  display: flex;
  text-decoration: none;
  list-style-type: none;
  justify-content: center;
  gap: 2em;
  font-size: 1.5rem;
  border: 2px solid black;
`;
const Numbers = styled.li`
  background-color: ${colors.quaternary};
  border: 2px solid ${colors.primary};

  &:hover {
    cursor: pointer;
  }
`;
const ShowingPage = styled.p``;
/*******************************************/

export const Pagination = ({ dataBase, rowsPerPage }) => {
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
        <Numbers onClick={() => context.currentPageDispatch({ type: "decrement", payload: 1 })}>Pre</Numbers>
        {numbers.map((num, index) => (
          <Numbers key={index} onClick={() => context.currentPageDispatch({ type: "direct", payload: num })}>
            {num}
          </Numbers>
        ))}
        <Numbers onClick={() => context.currentPageDispatch({ type: "increment", payload: npage })}>Next</Numbers>
      </PaginationTable>
    </PaginationWrapper>
  );
};
