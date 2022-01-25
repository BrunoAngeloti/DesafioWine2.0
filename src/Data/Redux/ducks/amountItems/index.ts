import { Reducer } from "redux";
import { AmountItemsState, AmountItemsTypes } from "./types";

const INITIAL_STATE: AmountItemsState ={
    amount: 0
}

const reducer: Reducer<AmountItemsState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AmountItemsTypes.GET_AMOUNT_ITEMS:
            return { ...state, amount: action.payload }
        default:
            return state
    }
}

export default reducer;