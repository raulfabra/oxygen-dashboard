import { Pagination } from "./Pagination";
import { ColumnHeader, Row, RowData, TableBody, TableHead, Tables, TableWrapper } from "../../styles/StylesComponts";
import { useContext } from "react";
import { PaginationContext } from "../../app/Contexts/PaginationContext";

export const Table = ({ data, columns }) => {
  const context = useContext(PaginationContext);
  const rowsPerPage = 10;
  const lastIndex = context.currentPageState * rowsPerPage; // The last index is a the last element of our DataBase.
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
      <Pagination dataBase={data} rowsPerPage={rowsPerPage} />
    </TableWrapper>
  );
};
