import { action } from 'typesafe-actions'
import { iWines } from '../../../interfaces/wines'
import { PriceFilterTypes } from '../pricesFilter/types'
import { ItemsTypes } from './types'

export const setItems = (wines: Array<Array<iWines>>) => action(ItemsTypes.SET_ITEMS, wines)
export const requestItems = (filter: PriceFilterTypes, pageAtual: number, wines: Array<Array<iWines>>) => action(ItemsTypes.REQUEST_ITEMS, filter, pageAtual, wines)
export const requestLoading = () => action(ItemsTypes.REQUEST_LOADING_ITEMS)
export const requestFailed = () => action(ItemsTypes.REQUEST_FAILED_ITEMS)
export const requestSuccess = () => action(ItemsTypes.REQUEST_SUCCESS_ITEMS)