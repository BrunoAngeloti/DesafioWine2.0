import { ItemsTypes } from './types';
import { requestFailed, setItems, requestLoading, requestSuccess } from './actions'

test('deve retornar se ocorreu uma falha', () => {
    expect(requestFailed()).toEqual({
        type: ItemsTypes.REQUEST_FAILED_ITEMS,
    })
})

test('deve retornar os itens corretamente', () => {
    expect(setItems([[{name: "Vinho1"},{name: "Vinho2"}], [{name: "Vinho3"},{name: "Vinho4"}]])).toEqual({
        payload: [[{name: "Vinho1"},{name: "Vinho2"}], [{name: "Vinho3"},{name: "Vinho4"}]],
        type: ItemsTypes.SET_ITEMS,
    })
})

test('deve retornar se ocorreu uma chamada de loading', () => {
    expect(requestLoading()).toEqual({
        type: ItemsTypes.REQUEST_LOADING_ITEMS,
    })
})

test('deve retornar se deu tudo certo', () => {
    expect(requestSuccess()).toEqual({
        type: ItemsTypes.REQUEST_SUCCESS_ITEMS,
    })
})