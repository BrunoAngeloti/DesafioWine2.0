import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'

import { requestFailed, requestLoading, requestSuccess, setItems} from './actions'
import { changeNumItemsPagination, changeItemsPerPage,changeTotalPages } from '../pagination/actions'


export function* loadingWines({payload}:any): any{  
    const { filter, pageAtual, wines } = payload
    if(wines[pageAtual] === undefined){    
        yield put(requestLoading())    
        try{
            const response = filter 
            ? yield call(api.get, `products?page=${pageAtual}&limit=10&filter=${filter.min}-${filter.max}`)
            : yield call(api.get, `products?page=${pageAtual}&limit=10`)
            
            let arrayAux = [...wines]
            arrayAux[pageAtual] = response.data.items;
            yield put(setItems(arrayAux)) 

            yield put(changeNumItemsPagination(response.data.totalItems))   
            yield put(changeItemsPerPage(response.data.itemsPerPage))  
            yield put(changeTotalPages(response.data.totalPages))  
            yield put(requestSuccess())
                              
        }catch(err){
            yield put(requestFailed())
        }
    } 
}