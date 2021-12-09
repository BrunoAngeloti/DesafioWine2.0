import { action } from 'typesafe-actions'
import { PaginationTypes } from '../pagination/types'
import { PriceFilterTypes } from '../pricesFilter/types'
import { ItemsTypes } from './types'

export const setItems = () => action(ItemsTypes.SET_ITEMS)
export const requestItems = (filter: PriceFilterTypes, pageAtual: number) => 
    action(ItemsTypes.REQUEST_ITEMS, filter, pageAtual)
export const requestLoading = () => action(ItemsTypes.REQUEST_LOADING_ITEMS)
export const requestFailed = () => action(ItemsTypes.REQUEST_FAILED_ITEMS)
export const requestSuccess = () => action(ItemsTypes.REQUEST_SUCCESS_ITEMS)