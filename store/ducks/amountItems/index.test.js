import reducer  from './index'
import { AmountItemsTypes } from './types';

test('deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({
        amount: 0
    })
})

test('deve retornar a quantidade de itens alterada', () => {
    expect(reducer(undefined, {type: AmountItemsTypes.GET_AMOUNT_ITEMS, payload: 10})).toEqual({
        amount: 10
    })
})