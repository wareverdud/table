import {IProps} from "./table.types.ts";
import {useGetData} from "./table.utils.ts";
import {TableHead} from "./table-head.ui.tsx";
import {TablePagination} from "./table-pagination.ui.tsx";
import {TableBody} from "./table-body.ui.tsx";
import {TableFilters} from "./table-filters.ui.tsx";
import {useState} from "react";
import './table.css'


export const Table = ({url, columns}: IProps) => {
    const {data, options, setOptions, status} = useGetData(url);

    const [filters, setFilters] = useState({
        startDate: '', endDate: '', rating: ''
    });

    if (!data) {
        return <p>No data</p>;
    }

    const filteredData = data.data.filter((item) => filters.rating === '' || filters.rating === item.rating)
        .filter((item) => {
            const airedFrom = item.aired.from ? new Date(item.aired.from) : null;
            const airedTo = item.aired.to ? new Date(item.aired.to) : null;

            const filterStart = filters.startDate ? new Date(filters.startDate) : null;
            const filterEnd = filters.endDate ? new Date(filters.endDate) : null;

            const startCondition = filterStart ? (airedFrom ? airedFrom >= filterStart : true) : true;
            const endCondition = filterEnd ? (airedTo ? airedTo <= filterEnd : true) : true;
            const dateOrderCondition = (airedFrom && airedTo) ? airedFrom <= airedTo : true;

            return startCondition && endCondition && dateOrderCondition;
        });

    return (
        <div className="table">
            <div className="control">
                <TablePagination
                    page={options.page}
                    setOptions={setOptions}
                    last_visible_page={data.pagination.last_visible_page}
                />
                <TableFilters filters={filters} setFilters={setFilters}/>
            </div>
            <table>
                <TableHead columns={columns} options={options} setOptions={setOptions}/>
                {status === 'loading' && <p>Loading content...</p>}
                {status === 'error' && <p>Error</p>}
                {status === 'fulfilled' &&
                    <TableBody
                        data={filteredData}
                        columns={columns}
                    />
                }
            </table>
        </div>
    );
}