import { IPaginationProps } from "./table.types.ts";

export const TablePagination = ({
  page,
  setOptions,
  last_visible_page,
}: IPaginationProps) => (
  <div className="pagination">
    <button
      onClick={() =>
        setOptions((prevState) => {
          if (prevState.page > 1) {
            return { ...prevState, page: prevState.page - 1 };
          }
          return prevState;
        })
      }
    >
      {"<"}
    </button>
    <input
      className="pagination-input"
      value={page}
      type="number"
      onChange={(event) => {
        const newPage = Number(event.target.value);
        if (newPage > 0 && newPage <= last_visible_page) {
          setOptions((prevState) => ({ ...prevState, page: newPage }));
        }
      }}
    />
    <button
      onClick={() =>
        setOptions((prevState) => {
          if (prevState.page < last_visible_page) {
            return { ...prevState, page: prevState.page + 1 };
          }
          return prevState;
        })
      }
    >
      {">"}
    </button>
    <span>{last_visible_page}</span>
    <select
      onChange={(event) =>
        setOptions((prevState) => ({
          ...prevState,
          limit: Number(event.target.value),
        }))
      }
    >
      {[5, 10, 15, 20, 25].map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);
