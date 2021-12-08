export enum PaginationTypes{
    GET_PAGINATION_ITEMS = '@pagination/GET_PAGINATION_ITEMS',
    CHANGE_NUM_ITEMS = '@pagination/CHANGE_NUM_ITEMS',
    CHANGE_CURRENT_PAGE = '@pagination/CHANGE_CURRENT_PAGE',
}

export interface PaginationState{
    readonly numItems: number,
    readonly itemsPerPage: number,
    readonly currentPage: number,
}