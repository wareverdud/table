import {IHeadProps} from "./table.types.ts";
import arrowUp from './assets/up-arrow.svg';
import arrowDown from './assets/down-arrow.svg';

export const TableHead = <T,>({columns, options, setOptions}: IHeadProps<T>) => {
    const handleSort = (dataIndex: string) => {
        if (options.order_by === dataIndex) {
            setOptions((prevState) => ({...prevState, sort: !prevState.sort}))
        } else {
            setOptions((prevState) => ({...prevState, order_by: dataIndex}))
            setOptions((prevState) => ({...prevState, sort: true}))
        }
    };

    return (
        <thead>
        <tr>
            {columns.map((column) => (
                <th
                    key={column.dataIndex}
                    onClick={() => handleSort(column.dataIndex)}
                >
                    <div className="table-cell">
                        <p>{column.title}</p>
                        {options.order_by === column.dataIndex && (
                            <img src={options.sort ? arrowUp : arrowDown} alt="sort"/>
                        )}
                    </div>
                </th>
            ))}
        </tr>
        </thead>
    );
}
