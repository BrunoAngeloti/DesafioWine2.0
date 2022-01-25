import { all, takeLatest } from 'redux-saga/effects'
import { getItemsCart } from './amountItems/sagas'
import { loadingWines } from './items/sagas'

import { AmountItemsTypes, ItemsTypes } from './'

export default function* rootSaga():any{  
    return yield all([
        takeLatest(AmountItemsTypes.GET_ITEMS_CART, getItemsCart),
        takeLatest(ItemsTypes.REQUEST_ITEMS, loadingWines),      
    ])
}