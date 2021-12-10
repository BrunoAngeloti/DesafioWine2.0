export enum PaginationTypes{
    GET_PAGINATION_ITEMS = '@pagination/GET_PAGINATION_ITEMS',
    CHANGE_NUM_ITEMS = '@pagination/CHANGE_NUM_ITEMS',
    CHANGE_CURRENT_PAGE = '@pagination/CHANGE_CURRENT_PAGE',
    CHANGE_ITEMS_PER_PAGE = '@pagination/CHANGE_ITEMS_PER_PAGE',
    CHANGE_TOTAL_PAGES = '@pagination/CHANGE_TOTAL_PAGES'
}

export interface PaginationState{
    readonly numItems: number,
    readonly itemsPerPage: number,
    readonly currentPage: number,
    readonly totalPages: number
}