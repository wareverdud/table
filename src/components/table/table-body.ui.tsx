import {IBodyProps} from "./table.types.ts";

export const TableBody = <T, >({data, columns}: IBodyProps<T>) => (
    <tbody>
    {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {columns.map((column) => <td key={column.dataIndex}>{column.action(row)}</td>)}
        </tr>
    ))}
    </tbody>
)