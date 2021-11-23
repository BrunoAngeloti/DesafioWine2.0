import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


import amountItemsReducer from './ducks/amountItems'
import paginationReducer from './ducks/pagination'
import pricesFilterReducer from './ducks/pricesFilter'

const rootReducer = combineReducers({
    amountitems: amountItemsReducer,
    pagination: paginationReducer,
    pricesfilter: pricesFilterReducer
})

export default configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

//export default createStore(reducer)