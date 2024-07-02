import React from "react";

export type IProps = {
    url: string,
    columns: IColumns
}

export type IColumns = { title: string, dataIndex: string, action: (row: any) => string }[]

export type IOptions = {
    page: number
    limit: number
    order_by: string
    sort: boolean
}

export type IHeadProps = {
    columns: IColumns,
    options: IOptions,
    setOptions: React.Dispatch<React.SetStateAction<IOptions>>,
}
export type IBodyProps = {
    data: Array<never>,
    columns: IColumns,
}

export type IPaginationProps = {
    setOptions: React.Dispatch<React.SetStateAction<IOptions>>
    page: number,
    last_visible_page: number,
}

export type IFilters = { startDate: string, endDate: string, rating: string }

export type IFilterProps = {
    filters: IFilters,
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>
}

export type IData = {
    data: any,
    pagination: {
        last_visible_page: number,
        has_next_page: boolean,
        items: {
            count: number,
            total: number,
            per_page: number
        }
    }
}