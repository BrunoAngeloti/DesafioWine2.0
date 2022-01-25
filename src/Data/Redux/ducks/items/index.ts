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
            if(action.payload.wines.length == 0){ 
                return { ...state, wines: []}
            }
            else{              
                let arrayAux = [...state.wines]
                arrayAux[action.payload.pageAtual] = action.payload.wines;
                return { ...state, wines: arrayAux}
            }
        case ItemsTypes.REQUEST_LOADING_ITEMS:
            return { ...state, loading: true }
        case ItemsTypes.REQUEST_SUCCESS_ITEMS:
            return { ...state, loading: false, error: false }
        case ItemsTypes.REQUEST_FAILED_ITEMS:
            return { ...state, error: true, wines: [] }
        default:
            return state
    }
}

export default reducer;