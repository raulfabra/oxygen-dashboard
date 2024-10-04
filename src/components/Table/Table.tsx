import { Pagination } from "./Pagination";
import { ColumnHeader, Row, RowData, TableBody, TableHead, Tables, TableWrapper } from "../../styles/StylesComponts";
import { useContext } from "react";
import { PaginationContext } from "../../app/Contexts/PaginationContext";
import { Booking, Customer, Models, PageInterface, Room, User } from "../../types/global";

interface Columns {
  label: string;
  display: (item: Booking | User | Room | Customer) => JSX.Element | string;
}

interface TableProps {
  data: Models;
  columns: Columns[];
}

export const Table = ({ data, columns }: TableProps) => {
  const context = useContext(PaginationContext);
  const rowsPerPage = 10;
  const lastIndex = (context as PageInterface).currentPageState * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data.slice(firstIndex, lastIndex);

  return (
    <TableWrapper>
      <Tables>
        <TableHead>
          <Row $header>
            {columns.map((header: any, index: any) => (
              <ColumnHeader key={index}>{header.label}</ColumnHeader>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((dato: Models[0], index: number) => (
            <Row key={index + 100}>
              {columns.map((column: Columns, index: number) => (
                <RowData key={index + 1000}>{column.display(dato)}</RowData>
              ))}
            </Row>
          ))}
        </TableBody>
      </Tables>
      <Pagination dataBase={data} rowsPerPage={rowsPerPage} />
    </TableWrapper>
  );
};
