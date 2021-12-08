import { all, takeLatest } from 'redux-saga/effects'
import { getItemsCart } from './amountItems/sagas'
import { AmountItemsTypes } from './amountItems/types'

export default function* rootSaga():any{  
    return yield all([
        takeLatest(AmountItemsTypes.GET_ITEMS_CART, getItemsCart)
    ])
}