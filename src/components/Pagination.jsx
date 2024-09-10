import { useContext } from "react";
import { PaginationContext } from "../App";
import styled from "styled-components";
import { colors } from "../styles/themes/theme";

const PaginationWrapper = styled.nav`
  margin: 3em;
`;
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

export const Pagination = ({ dataBase, rowsPerPage }) => {
  const paginationContext = useContext(PaginationContext);
  const npage = Math.ceil(dataBase.length / rowsPerPage); // Number of pages have our table
  const numbers = [...Array(npage + 1).keys()].slice(1); // All numbers of our table saved in Array

  return (
    <PaginationWrapper>
      <PaginationTable>
        <Numbers onClick={() => paginationContext.currentPageDispatch({ type: "decrement", id: 1 })}>Prev</Numbers>
        {numbers.map((num, index) => (
          <Numbers key={index} onClick={() => paginationContext.currentPageDispatch({ type: "direct", id: num })}>
            {num}
          </Numbers>
        ))}
        <Numbers onClick={() => paginationContext.currentPageDispatch({ type: "increment", id: npage })}>Next</Numbers>
      </PaginationTable>
    </PaginationWrapper>
  );
};
