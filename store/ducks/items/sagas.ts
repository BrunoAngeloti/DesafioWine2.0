import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import { PriceFilterState } from '../pricesFilter/types'

export function* loadingWines({payload}:any): any{  
    const { filter, pageAtual } = payload
    const response = yield call(api.get, 
        `products?page=${pageAtual}&limit=10&filter=${filter.min}-${filter.max}`
    )
    console.log(response.data)
}
