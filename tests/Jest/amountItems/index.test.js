import reducer  from '../../../src/Data/Redux/ducks/amountItems/index'
import { AmountItemsTypes } from '../../../src/Data/Redux/ducks/amountItems/types';

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