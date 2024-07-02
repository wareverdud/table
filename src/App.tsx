import {Table} from "./components/table";
import {IColumns, IDataResponse} from "./components/table/table.types.ts";

const App = () => {
    const columns: IColumns<IDataResponse> = [
        {
            title: "Title",
            dataIndex: "title",
            action: (row) => row.title ? row.title : '-',
        },
        {
            title: "Season",
            dataIndex: "season",
            action: (row) => row.season ? row.season : '-',
        },
        {
            title: "Status",
            dataIndex: "status",
            action: (row) => row.status,
        },
        {
            title: "Rating",
            dataIndex: "rating",
            action: (row) => row.rating,
        },
        {
            title: "Airing",
            dataIndex: "aired",
            action: (row) => <p>{row.aired.string}</p>,
        },
        {
            title: "Popularity",
            dataIndex: "popularity",
            action: (row) => String(row.popularity),
        },
    ]

    return <Table url="https://api.jikan.moe/v4/anime" columns={columns}/>
}

export default App
