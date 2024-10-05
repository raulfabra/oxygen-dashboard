import { Pagination } from "./Pagination";
import { ColumnHeader, Row, RowData, TableBody, TableHead, Tables, TableWrapper } from "./styleTable";
import { useContext } from "react";
import { PaginationContext } from "../../Contexts/PaginationContext";
import { Booking, TypeBookingColumns } from "../../../Bookings/types/type";
import { Room, TypeRoomsColumns } from "../../../Rooms/types/type";
import { Customer, TypeCustomerColumns } from "../../../Customers/types/type";
import { TypeUserColumns, User } from "../../../Users/types/type";

interface TableProps {
  data: Booking[] | Room[] | User[] | Customer[];
  columns: TypeBookingColumns[] | TypeRoomsColumns[] | TypeUserColumns[] | TypeCustomerColumns[];
}

export const Table = ({ data, columns }: TableProps) => {
  const context = useContext(PaginationContext);
  const rowsPerPage = 10;
  const lastIndex = context!.paginationState.currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data.slice(firstIndex, lastIndex);

  return (
    <TableWrapper>
      <Tables>
        <TableHead>
          <Row $header>
            {columns.map((header: any, index: number) => (
              <ColumnHeader key={index}>{header.label}</ColumnHeader>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {rows.map((dato: any, index: number) => (
            <Row key={index + 100}>
              {columns.map((column: any, index: number) => (
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
