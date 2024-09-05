export const Table = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dat, index) => (
          <tr key={index + 100}>
            {columns.map((column, index) => (
              <td key={index + 1000}>{column.display(dat)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
