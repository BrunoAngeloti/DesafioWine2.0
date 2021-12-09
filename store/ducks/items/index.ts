import { Reducer } from "redux";
import { ItemsState, ItemsTypes } from "./types";

const INITIAL_STATE: ItemsState ={
    wines: [],
    loading: false,
    error: false
}

const reducer: Reducer<ItemsState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ItemsTypes.SET_ITEMS:
            return { ...state, wines: action.payload.wines }
        case ItemsTypes.REQUEST_LOADING_ITEMS:
            return { ...state, loading: true }
        case ItemsTypes.REQUEST_SUCCESS_ITEMS:
            return { ...state, loading: true, error: false }
        case ItemsTypes.REQUEST_FAILED_ITEMS:
            return { ...state, error: false, wines: [] }
        default:
            return state
    }
}

export default reducer;