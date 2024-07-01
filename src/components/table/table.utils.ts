import {useEffect, useState} from "react";
import {IData} from "./table.types.ts";

export const useGetData = (url: string) => {
    const [data, setData] = useState<IData | null>(null);
    const [options, setOptions] = useState({page: 1, limit: 5, order_by: "", sort: true})
    const [status, setStatus] = useState<'loading' | 'fulfilled' | 'error'>('loading');

    const queryParams = new URLSearchParams({
        page: String(options.page),
        limit: String(options.limit),
        order_by: options.order_by,
        sort: options.sort ? 'asc' : 'desc'
    });

    const getData = async () => {
        setStatus('loading');
        try {
            const res = await fetch(`${url}?${queryParams}`);
            if (!res.ok) {
                throw new Error(String(res.status));
            }
            const json = await res.json();
            if (json.status >= 300) {
                throw new Error(json.status);
            }
            setData(json);
            setStatus('fulfilled');
        } catch (error) {
            console.error("Fetching data failed:", error);
            setStatus('error');
        }
    }

    useEffect(() => {
        getData()
    }, [options]);

    return {data, options, setOptions, status};
}