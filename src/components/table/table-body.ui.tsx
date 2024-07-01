import {IBodyProps} from "./table.types.ts";

export const TableBody = ({data, columns, filters}: IBodyProps) => (
    <tbody>
    {data.map((row, rowIndex) => {
        console.log(row)
        if (filters.rating === '' || filters.rating === row['rating']) {
            return (
                <tr key={rowIndex}>
                    {columns.map((column) => {
                        const displayedData = row[column.dataIndex] ? row[column.dataIndex] : "—";
                        return <td key={column.dataIndex}>{displayedData}</td>;
                    })}
                </tr>
            )
        }
    })}
    </tbody>
)