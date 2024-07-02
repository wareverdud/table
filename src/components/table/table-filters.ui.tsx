import {IFilterProps} from "./table.types.ts";

export const TableFilters = ({filters, setFilters}: IFilterProps) => (
    <div className="container">
        <div className="formItem">
            <label className="label">
                Rating
            </label>
            <select onChange={(event) => setFilters(prevState => ({...prevState, rating: event.target.value}))}>
                <option value="">All</option>
                {["G - All Ages", "PG - Children", "PG-13 - Teens 13 or older", "R - 17+ (violence & profanity)", "R+ - Mild Nudity", "Rx - Hentai"].map((item) =>
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
        </div>
        <div className="formItem">
            <label className="label">Start Date</label>
            <input
                className="dateInput"
                type="date"
                value={filters.startDate}
                onChange={(event) => setFilters(prevState => ({...prevState, startDate: event.target.value}))}
            />
        </div>
        <div className="formItem">
            <label className="label">End Date</label>
            <input
                className="dateInput"
                type="date"
                value={filters.endDate}
                onChange={(event) => setFilters(prevState => ({...prevState, endDate: event.target.value}))}
            />
        </div>
    </div>
)