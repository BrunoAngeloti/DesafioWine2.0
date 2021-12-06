import { createAction, createReducer } from "@reduxjs/toolkit"
import { action } from "typesafe-actions"

const INITIAL_STATE = {
    amount: 0,
}

export const getAmountItems = createAction('GET_AMOUNT_ITEMS')

export const loadItemsCart = createAction('GET_ITEMS_CART')


export default createReducer(INITIAL_STATE,{
    [getAmountItems.type]:(state, action) => action.payload,   
    [loadItemsCart.type]:(state, action) => state, 
})