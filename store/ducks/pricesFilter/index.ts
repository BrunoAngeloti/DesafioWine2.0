import { Reducer } from "redux";
import { PriceFilterState, PriceFilterTypes } from "./types";

const INITIAL_STATE: PriceFilterState ={
    min: 0,
    max: 0
}

const reducer: Reducer<PriceFilterState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PriceFilterTypes.GET_PRICE_FILTER:
            return { ...state}
        case PriceFilterTypes.CHANGE_PRICE_FILTER:
            return action.payload
        default:
            return state
    }
}

export default reducer;