import { action } from 'typesafe-actions'
import { PaginationTypes } from './types'

export const getPagination = () => action(PaginationTypes.GET_PAGINATION_ITEMS)
export const changeNumItemsPagination = (num: number) => action(PaginationTypes.CHANGE_NUM_ITEMS, num)
export const changeCurrentPage = (num: number) => action(PaginationTypes.CHANGE_CURRENT_PAGE, num)