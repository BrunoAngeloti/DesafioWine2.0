import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    amount: 0,
}

export const getAmountItems = createAction('GET_AMOUNT_ITEMS')

export default createReducer(INITIAL_STATE,{
    [getAmountItems.type]:(state, action) => action.payload,   
})