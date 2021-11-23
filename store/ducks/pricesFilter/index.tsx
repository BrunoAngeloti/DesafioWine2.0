import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    min: 0,
    max: 0,
}

export const getPriceFilter = createAction('GET_PRICE_FILTER')
export const changePriceFilter = createAction('CHANGE_PRICE_FILTER')

export default createReducer(INITIAL_STATE,{
    [getPriceFilter.type]:(state, action) => action.payload,   
    [changePriceFilter.type]:(state, action) => (action.payload),  
})