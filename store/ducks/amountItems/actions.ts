import { action } from 'typesafe-actions'
import { AmountItemsTypes } from './types'

export const getAmountItems = (amount: number) => action(AmountItemsTypes.GET_AMOUNT_ITEMS, amount)
export const loadItemsCart = () => action(AmountItemsTypes.GET_ITEMS_CART)