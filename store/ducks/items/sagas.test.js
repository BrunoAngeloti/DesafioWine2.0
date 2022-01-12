import { loadingWines, requestFailed, requestLoading, requestSuccess, setItems } from './sagas'
import api from '../../../services/api'

import { runSaga } from 'redux-saga';
import data from '../../../mock/ApiMock.json'
import { PaginationTypes } from '../pagination/types';
import { ItemsTypes } from './types';

jest.mock('../../../services/api');

describe("Items API funcionando", ()=>{
    //Depois de cada execução limpa os mocks
    afterEach(()=>{
        jest.resetAllMocks()
    })
    //Antes de cada execução faz o mock da api
    beforeEach(()=>{
        api.get.mockImplementation(()=>{
            return Promise.resolve({data})
        })
    })

    it('deve retornar os itens certos solicitados ', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 1,
            }
        };

        //Cria um store fake para armazenar as respostas
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        //Executa a function do saga
        await runSaga(fakeStore, loadingWines, action).done;

        //Verifica se a api foi executada apenas uma vez
        expect(api.get.mock.calls.length).toBe(1);
        expect(dispatchedActions).toEqual([
            {
                type: ItemsTypes.REQUEST_LOADING_ITEMS,
            },
            {
                type: ItemsTypes.SET_ITEMS,
                payload: {pageAtual: 1, wines: data.items}
            },
            {
                type: PaginationTypes.CHANGE_STATE_PAGES,
                payload: {itemsPerPage: data.itemsPerPage, numItems: data.totalItems, totalPages: data.totalPages }
            },
            {
                type: PaginationTypes.CHANGE_CURRENT_PAGE,
                payload: 1
            },
            {
                type: ItemsTypes.REQUEST_SUCCESS_ITEMS
            }
        ])
    })
     it('deve retornar os itens certos solicitados pagina 2', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 2,
            }
        };
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, loadingWines, action).done;

        expect(api.get.mock.calls.length).toBe(1);

        expect(dispatchedActions).toEqual([
            {
                type: ItemsTypes.REQUEST_LOADING_ITEMS,
            },
            {
                type: ItemsTypes.SET_ITEMS,
                payload: {pageAtual: 2, wines: data.items}
            },
            {
                type: PaginationTypes.CHANGE_STATE_PAGES,
                payload: {itemsPerPage: data.itemsPerPage, numItems: data.totalItems, totalPages: data.totalPages }
            },
            {
                type: PaginationTypes.CHANGE_CURRENT_PAGE,
                payload: 2
            },
            {
                type: ItemsTypes.REQUEST_SUCCESS_ITEMS
            }
        ])
    })
})

describe("Items API erro", ()=>{
    //Depois de cada execução limpa os mocks
    afterEach(()=>{
        jest.resetAllMocks()
    })
    //Antes de cada execução faz o mock da api
    beforeEach(()=>{
        api.get.mockImplementation(()=>{
            return Promise.reject(new Error("Erro interno, tente novamente mais tarde"))
        })
    })

    it('deve retornar erro ', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 1,
            }
        };

        //Cria um store fake para armazenar as respostas
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        //Executa a function do saga
        await runSaga(fakeStore, loadingWines, action).done;

        //Verifica se a api foi executada apenas uma vez
        expect(api.get.mock.calls.length).toBe(1);
     
        expect(dispatchedActions).toEqual([
            {
                type: ItemsTypes.REQUEST_LOADING_ITEMS,
            },
            {
                type: ItemsTypes.REQUEST_FAILED_ITEMS,
            }
        ])
    })
})

test('deve retornar se ocorreu uma falha', () => {
    expect(requestFailed()).toEqual({
        type: ItemsTypes.REQUEST_FAILED_ITEMS,
    })
})

test('deve retornar os itens corretamente', () => {
    expect(setItems({wines: [{name: "Vinho1"},{name: "Vinho2"}], pageAtual: 1})).toEqual({
        payload: {wines: [{name: "Vinho1"},{name: "Vinho2"}], pageAtual: 1},
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