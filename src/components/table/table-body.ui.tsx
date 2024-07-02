import {IBodyProps} from "./table.types.ts";

export const TableBody = ({data, columns}: IBodyProps) => (
    <tbody>
    {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {columns.map((column) => {
                const data = column.action(row)
                const displayedData = data ? data : "—";
                return <td key={column.dataIndex}>{displayedData}</td>;
            })}
        </tr>
    ))}
    </tbody>
)