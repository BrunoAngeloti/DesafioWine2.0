import reducer  from './index'
import { ItemsTypes } from './types';

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        wines: [],
        loading: false,
        error: false
    })
})

test('deve retornar o erro como verdadeiro', () => {
    expect(reducer(undefined, {type: ItemsTypes.REQUEST_FAILED_ITEMS})).toEqual({
        wines: [],
        loading: false,
        error: true
    })
})

test('deve retornar o sucesso como verdadeiro', () => {
    expect(reducer(undefined, {type: ItemsTypes.REQUEST_SUCCESS_ITEMS})).toEqual({
        wines: [],
        loading: false,
        error: false
    })
})

test('deve retornar o loading como verdadeiro', () => {
    expect(reducer(undefined, {type: ItemsTypes.REQUEST_LOADING_ITEMS})).toEqual({
        wines: [],
        loading: true,
        error: false
    })
})

test('deve setar o vetor de vinhos', () => {
    expect(reducer(undefined, {type: ItemsTypes.SET_ITEMS, payload:{ 
        pageAtual: 1,
        wines: []
    }})).toEqual({
        wines: [],
        loading: false,
        error: false
    })
})
