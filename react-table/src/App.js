import "./App.css";
import { useMemo } from "react";
import { useTable } from "react-table";
import mockData from "./Mock_Data.json";

//https://www.youtube.com/watch?v=A9oUTEP-Q84&t=3s
//library : npm install react-table
function App() {
  const data = useMemo(() => mockData, []);
  const columns = useMemo(
    () => [
      {
        // Header will be heading names in table & accessors should be equal to objects key anme we want to access
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );
  // useTable takes two data: 1st => list of columns we wanna have in our app
  // 2nd => datas that we want to fill in our table
  // usetable returns bunch of functions
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
