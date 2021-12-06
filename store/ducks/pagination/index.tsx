import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    numItems: 0,
    itemsPerPage: 6,
    currentPage: 0,
}

export const getPagination = createAction('GET_PAGINATION_ITEMS')
export const changeNumItemsPagination = createAction('CHANGE_NUM_ITEMS')
export const changeCurrentPage = createAction('CHANGE_CURRENT_PAGE')

export default createReducer(INITIAL_STATE,{
    [getPagination.type]:(state, action) => action.payload,   
    [changeNumItemsPagination.type]:(state, action) => ({...state,  numItems: action.payload}),  
    [changeCurrentPage.type]:(state, action) => ({...state,  currentPage: action.payload}),  
})