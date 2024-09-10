import { useReducer } from "react";
import { Pagination } from "./Pagination";
import { initialState, pagination } from "../utils/paginationLogic";
import { PaginationContext } from "../App";
import { ColumnHeader, Row, RowData, TableBody, TableHead, Tables, TableWrapper } from "../styles/stylesComponents";

export const Table = ({ data, columns }) => {
  const [currentPage, dispatch] = useReducer(pagination, initialState);

  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage; // The last index is a the last element of our DataBase.
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data.slice(firstIndex, lastIndex); // Content of each row per page */

  return (
    <TableWrapper>
      <Tables>
        <TableHead>
          <Row $header>
            {columns.map((column, index) => (
              <ColumnHeader key={index}>{column.label}</ColumnHeader>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((dat, index) => (
            <Row key={index + 100}>
              {columns.map((column, index) => (
                <RowData key={index + 1000}>{column.display(dat)}</RowData>
              ))}
            </Row>
          ))}
        </TableBody>
      </Tables>
      <PaginationContext.Provider value={{ currentPageState: currentPage, currentPageDispatch: dispatch }}>
        <Pagination dataBase={data} rowsPerPage={rowsPerPage} />
      </PaginationContext.Provider>
    </TableWrapper>
  );
};
