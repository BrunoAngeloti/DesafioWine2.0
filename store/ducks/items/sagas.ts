import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import { PriceFilterState } from '../pricesFilter/types'

interface iRequestPayload{
    filter: PriceFilterState,
    pageAtual: number
}

interface iRequestWine{
    payload: iRequestPayload
}

export function* loadingWines({payload}: iRequestWine): any{  
    const { filter, pageAtual } = payload
    const response = yield call(api.get, 
        `products?page=${pageAtual}&limit=10&filter=${filter.min}-${filter.max}`
    )
    console.log(response.data)
}