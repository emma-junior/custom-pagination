import { useEffect, useState, useMemo } from "react";
import Pagination from "./components/Pagination";

const url = "https://jsonplaceholder.typicode.com/todos";
let PageSize = 10;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const array = await fetch(url);
    const allTodos = await array.json();

    setTodos(allTodos);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return todos?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, todos]);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {(currentTableData ?? []).map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo?.id}</td>
                <td>{todo?.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={todos.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
