import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


import amountItemsReducer from './ducks/amountItems'
import paginationReducer from './ducks/pagination'

const rootReducer = combineReducers({
    amountitems: amountItemsReducer,
    pagination: paginationReducer
})

export default configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

//export default createStore(reducer)