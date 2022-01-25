import { action } from "typesafe-actions"
import { PaginationTypes } from "./types"

export const getPagination = () => action(PaginationTypes.GET_PAGINATION_ITEMS)
export const changeNumItemsPagination = (num: number) => action(PaginationTypes.CHANGE_NUM_ITEMS, num)
export const changeCurrentPage = (num: number) => action(PaginationTypes.CHANGE_CURRENT_PAGE, num)
export const changeItemsPerPage = (num: number) => action(PaginationTypes.CHANGE_ITEMS_PER_PAGE, num)
export const changeTotalPages = (num: number) => action(PaginationTypes.CHANGE_TOTAL_PAGES, num)
export const changeStatePages = ({numItems, itemsPerPage, totalPages}:any) => 
    action(PaginationTypes.CHANGE_STATE_PAGES, {numItems, itemsPerPage, totalPages})