import { Reducer } from "redux";
import { PaginationState, PaginationTypes } from "./types";

const INITIAL_STATE: PaginationState ={
    numItems: 0,
    itemsPerPage: 6,
    currentPage: 0
}

const reducer: Reducer<PaginationState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PaginationTypes.GET_PAGINATION_ITEMS:
            return { ...state}
        case PaginationTypes.CHANGE_NUM_ITEMS:
            return { ...state, numItems: action.payload }
        case PaginationTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}

export default reducer;