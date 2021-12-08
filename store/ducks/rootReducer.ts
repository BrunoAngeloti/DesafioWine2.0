import { combineReducers } from "redux";

import amountItems from './amountItems'
import pagination from './pagination'
import pricesFilter from "./pricesFilter";

export default combineReducers({
    amountItems,
    pagination,
    pricesFilter
})