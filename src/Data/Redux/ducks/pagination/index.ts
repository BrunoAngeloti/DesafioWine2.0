import { Reducer } from "redux";
import { PaginationState, PaginationTypes } from "./types";

const INITIAL_STATE: PaginationState ={
    numItems: 0,
    itemsPerPage: 0,
    currentPage: 1, 
    totalPages: 0
}

const reducer: Reducer<PaginationState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PaginationTypes.GET_PAGINATION_ITEMS:
            return { ...state}
        case PaginationTypes.CHANGE_NUM_ITEMS:
            return { ...state, numItems: action.payload }
        case PaginationTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        case PaginationTypes.CHANGE_ITEMS_PER_PAGE:
            return { ...state, itemsPerPage: action.payload }
        case PaginationTypes.CHANGE_TOTAL_PAGES:
            return { ...state, totalPages: action.payload }
        case PaginationTypes.CHANGE_STATE_PAGES:
            return { 
                ...state, 
                numItems: action.payload.numItems,
                itemsPerPage: action.payload.itemsPerPage,
                totalPages: action.payload.totalPages
            }
        default:
            return state
    }
}

export default reducer;