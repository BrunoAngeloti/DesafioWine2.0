import { AmountItemsTypes } from './types';
import { getAmountItems } from './actions'

test('deve retornar a quantidade de itens alterada', () => {
    expect(getAmountItems(10)).toEqual({
        payload: 10,
        type: AmountItemsTypes.GET_AMOUNT_ITEMS,
    })
})