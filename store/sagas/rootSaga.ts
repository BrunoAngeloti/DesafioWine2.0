import { call, put, all, takeLatest } from 'redux-saga/effects'
import { iItemCart } from '../../interfaces/cart'

function* getItemsCart(){  
    const aux : Array<iItemCart> = yield JSON.parse(localStorage.getItem('itemsOnCart') || "[]")
    console.log("entreids")
    const amount = aux.reduce(function (total, currentValue){
        return total + currentValue.qtdWine
    }, 0)
    yield put ({
        type: 'GET_AMOUNT_ITEMS', 
        payload: {amount: amount} 
    })   
}

export default function* rootSaga():any{
    
    return yield all([
        takeLatest('GET_ITEMS_CART', getItemsCart)
    ])
}