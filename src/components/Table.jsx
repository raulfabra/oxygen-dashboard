import { useReducer } from "react";
import { Pagination } from "./Pagination";
import { initialState, pagination } from "../utils/paginationLogic";
import { PaginationContext } from "../App";

export const Table = ({ data, columns }) => {
  const [currentPage, dispatch] = useReducer(pagination, initialState);

  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage; // The last index is a the last element of our DataBase.
  const firstIndex = lastIndex - rowsPerPage;
  const rows = data.slice(firstIndex, lastIndex); // Content of each row per page */

  return (
    <section>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((dat, index) => (
            <tr key={index + 100}>
              {columns.map((column, index) => (
                <td key={index + 1000}>{column.display(dat)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationContext.Provider value={{ currentPageState: currentPage, currentPageDispatch: dispatch }}>
        <Pagination dataBase={data} rowsPerPage={rowsPerPage} />
      </PaginationContext.Provider>
    </section>
  );
};
