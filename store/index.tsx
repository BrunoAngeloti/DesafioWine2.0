import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


import amountItemsReducer from './ducks/amountItems'

const rootReducer = combineReducers({
    amountitems: amountItemsReducer,
})

export default configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

//export default createStore(reducer)