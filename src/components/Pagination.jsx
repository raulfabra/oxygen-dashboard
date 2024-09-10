import { useContext } from "react";
import { PaginationContext } from "../App";
import styled from "styled-components";
import { colors } from "../styles/themes.js/theme";

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
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #007bff;
    border-radius: 5px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: -1;
  }
`;

export const Pagination = ({ dataBase, rowsPerPage }) => {
  const paginationContext = useContext(PaginationContext);
  const npage = Math.ceil(dataBase.length / rowsPerPage); // Number of pages have our table
  const numbers = [...Array(npage + 1).keys()].slice(1); // All numbers of our table saved in Array

  return (
    <PaginationWrapper>
      <PaginationTable>
        <Numbers onClick={() => paginationContext.currentPageDispatch("decrement")}>Prev</Numbers>
        {numbers.map((num, index) => (
          <Numbers
            key={index}
            onClick={() => {
              paginationContext.currentPageDispatch({ type: "direct", id: num });
            }}
          >
            {num}
          </Numbers>
        ))}
        <Numbers onClick={() => paginationContext.currentPageDispatch("increment")}>Next</Numbers>
      </PaginationTable>
    </PaginationWrapper>
  );
};
