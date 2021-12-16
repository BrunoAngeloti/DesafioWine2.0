import { put } from 'redux-saga/effects'
import { iItemCart } from '../../../interfaces/cart'

import { AmountItemsTypes } from './types'

export function* getItemsCart(){  
    const aux : Array<iItemCart> = JSON.parse(localStorage.getItem('itemsOnCart') || "[]")
    
    const amount = aux.reduce(function (total, currentValue){
        return total + currentValue.qtdWine
    }, 0)
    yield put ({
        type: AmountItemsTypes.GET_AMOUNT_ITEMS, 
        payload: amount
    })   
}