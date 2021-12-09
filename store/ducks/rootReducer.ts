import { combineReducers } from "redux";

import amountItems from './amountItems'
import pagination from './pagination'
import pricesFilter from "./pricesFilter";
import items from './items'

export default combineReducers({
    amountItems,
    pagination,
    pricesFilter,
    items
})