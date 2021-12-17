import { call, put, select } from 'redux-saga/effects'
import { action } from 'typesafe-actions'
import { ApplicationState } from '../..'
import { iWines } from '../../../interfaces/wines'

import api from '../../../services/api'

import { changeStatePages,changeCurrentPage } from '../pagination/sagas'
import { PriceFilterTypes } from '../pricesFilter/types'
import { ItemsTypes } from './types'

const getItems = (state:ApplicationState) => state.items;

export function* loadingWines({payload}:any): any{  
    const { filter, pageAtual } = payload
    const { wines } = yield select(getItems)

    if(wines[pageAtual] === undefined || wines === []){    
        yield put(requestLoading())    
        try{
            const response = filter 
            ? yield call(api.get, `products?page=${pageAtual}&limit=10&filter=${filter.min}-${filter.max}`)
            : yield call(api.get, `products?page=${pageAtual}&limit=10`)
            
            yield put(setItems({
                pageAtual: pageAtual,
                wines: response.data.items
            })) 

            yield put(changeStatePages({
                numItems: response.data.totalItems, 
                itemsPerPage: response.data.itemsPerPage, 
                totalPages: response.data.totalPages
            }))
            
            yield put(changeCurrentPage(parseInt(pageAtual)))
 
            yield put(requestSuccess())
                              
        }catch(err){
            yield put(requestFailed())
        }
    } 
}




interface propsItems{
    pageAtual: number,
    wines: Array<iWines>
}

export const setItems = ({pageAtual, wines}:propsItems) => action(ItemsTypes.SET_ITEMS, {pageAtual, wines})
export const requestItems = (filter: PriceFilterTypes, pageAtual: number) => action(ItemsTypes.REQUEST_ITEMS, filter, pageAtual)
export const requestLoading = () => action(ItemsTypes.REQUEST_LOADING_ITEMS)
export const requestFailed = () => action(ItemsTypes.REQUEST_FAILED_ITEMS)
export const requestSuccess = () => action(ItemsTypes.REQUEST_SUCCESS_ITEMS)