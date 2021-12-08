import { createStore, applyMiddleware, Store } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { AmountItemsState } from "./ducks/amountItems/types";
import { PaginationState } from "./ducks/pagination/types";
import { PriceFilterState } from "./ducks/pricesFilter/types";

export interface ApplicationState {
    amountItems: AmountItemsState
    pagination: PaginationState,
    pricesFilter: PriceFilterState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;