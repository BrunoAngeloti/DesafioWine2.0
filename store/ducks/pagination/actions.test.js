import { PaginationTypes } from './types';
import { changeCurrentPage, changeNumItemsPagination } from './actions'

test('deve retornar a pagina atual alterada', () => {
    expect(changeCurrentPage(6)).toEqual({
        payload: 6,
        type: PaginationTypes.CHANGE_CURRENT_PAGE,
    })
})

test('deve retornar o numero de itens alterado', () => {
    expect(changeNumItemsPagination(20)).toEqual({
        payload: 20,
        type: PaginationTypes.CHANGE_NUM_ITEMS,
    })
})