import { Pagination } from "./Pagination";
import { ColumnHeader, Row, RowData, TableBody, TableHead, Tables, TableWrapper } from "../../styles/StylesComponts";
import { useContext } from "react";
import { PaginationContext } from "../../app/Contexts/PaginationContext";
import { Booking, Customer, Models, PageInterface, Room, User } from "../../types/global";

interface ColumnsTableInterface {
  label: string;
  display: (item: Booking | User | Room | Customer) => JSX.Element | string;
}

export const Table = (data: any, columns: ColumnsTableInterface[]) => {
  const context = useContext(PaginationContext);
  const rowsPerPage = 10;
  const lastIndex = (context as PageInterface).currentPageState * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data.data.slice(firstIndex, lastIndex);

  return (
    <TableWrapper>
      <Tables>
        <TableHead>
          <Row $header>
            {data.columns.map((header: any, index: any) => (
              <ColumnHeader key={index}>{header.label}</ColumnHeader>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((dat: Models[0], index: number) => (
            <Row key={index + 100}>
              {data.columns.map((column: any, index: any) => (
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
