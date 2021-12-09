import reducer  from './index'
import { PaginationTypes } from './types'

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        numItems: 0,
        itemsPerPage: 6,
        currentPage: 0  
    })
})

test('deve retornar a pagina atual alterada', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_CURRENT_PAGE,
        payload: 5
    })).toEqual({
        numItems: 0,
        itemsPerPage: 6,
        currentPage: 5 
    })
})

test('deve retornar o numero de itens da paginação', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_NUM_ITEMS,
        payload: 35
    })).toEqual({
        numItems:35,
        itemsPerPage: 6,
        currentPage: 0 
    })
})
