import { useContext } from "react";
import { PaginationContext } from "../../App";
import { colors } from "../../styles/themes/theme";
import styled from "styled-components";

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

export const initialState = 1;

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state < action.id) return state + 1;
      else return state;
    case "decrement":
      if (state > action.id) return state - 1;
      else return state;
    default:
      return (state = action.id);
  }
};

export const Pagination = ({ dataBase, rowsPerPage }) => {
  const paginationContext = useContext(PaginationContext);
  const npage = Math.ceil(dataBase.length / rowsPerPage); // Number of pages have our table
  const numbers = [...Array(npage + 1).keys()].slice(1); // All numbers of our table saved in Array

  return (
    <PaginationWrapper>
      <PaginationText>
        <ShowingPage>
          Showing {numbers.length} of {dataBase} Data
        </ShowingPage>
      </PaginationText>
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
