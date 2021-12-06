import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

import amountItemsReducer from './ducks/amountItems'
import paginationReducer from './ducks/pagination'
import pricesFilterReducer from './ducks/pricesFilter'

import sagas from './sagas/rootSaga'



const rootReducer = combineReducers({
    amountitems: amountItemsReducer,
    pagination: paginationReducer,
    pricesfilter: pricesFilterReducer,

})

export default createStore(
    rootReducer,applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof rootReducer>