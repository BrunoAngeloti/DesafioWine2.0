import { Reducer } from "redux";
import { valueFilter1, valueFilter7 } from "../../../utils/constants/filter";
import { PriceFilterState, PriceFilterTypes } from "./types";

const INITIAL_STATE: PriceFilterState ={
    min: valueFilter1,
    max: valueFilter7
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