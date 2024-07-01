import {Table} from "./components/table";

const App = () => {
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Season",
            dataIndex: "season",
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title: "Rating",
            dataIndex: "rating",
        },
        {
            title: "Airing",
            dataIndex: "aired",
        },
        {
            title: "Popularity",
            dataIndex: "popularity",
        },
    ]

    return <Table url="https://api.jikan.moe/v4/anime" columns={columns}/>
}

export default App
