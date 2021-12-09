import { PriceFilterTypes } from './types';
import { changePriceFilter } from './actions'

test('deve retornar o limite do filtro alterado', () => {
    expect(changePriceFilter({min: 5, max: 15})).toEqual({
        payload: {min: 5, max: 15},
        type: PriceFilterTypes.CHANGE_PRICE_FILTER,
    })
})