import {Table} from "./components/table";

const App = () => {
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            action: (row) => row.title,
        },
        {
            title: "Season",
            dataIndex: "season",
            action: (row) => row.season,
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
            action: (row) => row.aired.string,
        },
        {
            title: "Popularity",
            dataIndex: "popularity",
            action: (row) => row.popularity,
        },
    ]

    return <Table url="https://api.jikan.moe/v4/anime" columns={columns}/>
}

export default App
