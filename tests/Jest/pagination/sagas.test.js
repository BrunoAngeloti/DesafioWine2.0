import { PaginationTypes } from '../../../src/Data/Redux/ducks/pagination/types';
import { changeCurrentPage, changeNumItemsPagination, changeItemsPerPage, changeTotalPages } from '../../../src/Data/Redux/ducks/pagination/sagas'

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

test('deve retornar o numero de itens por pagina alterado', () => {
    expect(changeItemsPerPage(6)).toEqual({
        payload: 6,
        type: PaginationTypes.CHANGE_ITEMS_PER_PAGE,
    })
})

test('deve retornar o numero total de paginas alterado', () => {
    expect(changeTotalPages(10)).toEqual({
        payload: 10,
        type: PaginationTypes.CHANGE_TOTAL_PAGES,
    })
})