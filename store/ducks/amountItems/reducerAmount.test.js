import reducer  from './index'
import { getAmountItems } from './actions'
import { getItemsCart } from './sagas'
import { assert } from 'console'

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        amount: 0
    })
})

test('deve retornar a quantidade de itens alterada', () => {
    expect(reducer(undefined, getAmountItems(10))).toEqual({
        amount: 10
    })
})