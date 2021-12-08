import reducer  from './index'
import { changePriceFilter } from './actions'

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        min: 0,
        max: 0
    })
})


test('deve retornar o preço minimo e maximo exatos', () => {
    const previousState = {}
    expect(reducer(previousState, changePriceFilter({min: 5, max: 15}))).toEqual({
        min: 5,
        max: 15
    })
})

test('deve retornar o preço minimo e maximo mesmo sem o estado inicial em zero', () => {
    const previousState = {
        min: 10,
        max: 100
    }
    
    expect(reducer(previousState, changePriceFilter({min: 200, max: 500}))).toEqual({
        min: 200,
        max: 500
    })
})