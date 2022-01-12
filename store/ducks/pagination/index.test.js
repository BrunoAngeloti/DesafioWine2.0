import reducer  from './index'
import { PaginationTypes } from './types'

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        numItems: 0,
        itemsPerPage: 0,
        currentPage: 1, 
        totalPages: 0 
    })
})

test('deve retornar a pagina atual alterada', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_CURRENT_PAGE,
        payload: 5
    })).toEqual({
        numItems: 0,
        itemsPerPage: 0,
        currentPage: 5, 
        totalPages: 0 
    })
})

test('deve retornar o numero de itens da paginação', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_NUM_ITEMS,
        payload: 35
    })).toEqual({
        numItems: 35,
        itemsPerPage: 0,
        currentPage: 1, 
        totalPages: 0 
    })
})

test('deve retornar o numero de itens por pagina', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_ITEMS_PER_PAGE,
        payload: 10
    })).toEqual({
        numItems: 0,
        itemsPerPage: 10,
        currentPage: 1, 
        totalPages: 0 
    })
})

test('deve retornar o numero total de paginas', () => {
    expect(reducer(undefined, {
        type: PaginationTypes.CHANGE_TOTAL_PAGES,
        payload: 10
    })).toEqual({
        numItems: 0,
        itemsPerPage: 0,
        currentPage: 1, 
        totalPages: 10 
    })
})