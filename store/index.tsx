import { createStore, applyMiddleware, Store } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { AmountItemsState, PaginationState, PriceFilterState, ItemsState } from './ducks'

export interface ApplicationState {
    amountItems: AmountItemsState,
    pagination: PaginationState,
    pricesFilter: PriceFilterState,
    items: ItemsState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;