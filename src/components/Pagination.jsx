import { useState } from "react";

export const Pagination = ({ dataBase }) => {
  const [currentPage, setCurrentPage] = useState();

  const npage = Math.ceil(dataBase.length / rowsPerPage); // Number of pages have our table
  const numbers = [...Array(npage + 1).keys()]; // All numbers of our table saved in Array

  const handlePageChange = (action, event = null) => {
    if (action === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (action === "next" && currentPage < npage) {
      setCurrentPage(currentPage + 1);
    } else if (action === "direct" && event) {
      const id = Number(event.target.value);
      if (id >= 1 && id <= npage) {
        setCurrentPage(id);
      }
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={(event) => handlePageChange("prev", event)}>
            Prev
          </a>
        </li>
        {numbers.map((num, index) => (
          <li key={index}>
            <a href="#" onClick={(event) => handlePageChange("direct", event)}>
              {num}
            </a>
          </li>
        ))}
        <li>
          <a href="#" onClick={(event) => handlePageChange("next", event)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
