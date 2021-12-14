import { loadingWines } from './sagas'
import api from '../../../services/api'

import { runSaga } from 'redux-saga';
import data from '../../../mock/ApiMock.json'
import { PaginationTypes } from '../pagination/types';
import { ItemsTypes } from './types';

jest.mock('../../../services/api');

describe("Items API", ()=>{
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
                wines: []
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

        const { payload } = dispatchedActions[1]
        expect(payload).toEqual([,data.items])

        //Verifica se os dispatches foram feitos corretamente (nao sei se é necessario)
        expect(dispatchedActions[2]).toEqual({
            payload: data.totalItems,
            type: PaginationTypes.CHANGE_NUM_ITEMS
        })
        expect(dispatchedActions[3]).toEqual({
            payload: data.itemsPerPage,
            type: PaginationTypes.CHANGE_ITEMS_PER_PAGE
        })
        expect(dispatchedActions[4]).toEqual({
            payload: data.totalPages,
            type: PaginationTypes.CHANGE_TOTAL_PAGES
        })
        expect(dispatchedActions[5]).toEqual({
            type: ItemsTypes.REQUEST_SUCCESS_ITEMS
        })
    })
    it('deve retornar os itens certos solicitados pagina 2', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 2,
                wines: []
            }
        };
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, loadingWines, action).done;

        expect(api.get.mock.calls.length).toBe(1);

        const { payload } = dispatchedActions[1]
        expect(payload).toEqual([,,data.items])
    })
    it('deve retornar a pagina na posicao certa mantendo o que ja existia', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 3,
                wines: [,[{vinho: "tal"}],[{vinho: "fulano"}]]
            }
        };
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, loadingWines, action).done;

        expect(api.get.mock.calls.length).toBe(1);

        const { payload } = dispatchedActions[1]
        expect(payload).toEqual([,[{vinho: "tal"}],[{vinho: "fulano"}], data.items])
    })
    it('deve retornar nada pois ja foi feita a requisicao para aquela posicao', async()=>{
        const dispatchedActions = [];
        const action = {
            payload: {
                pageAtual: 1,
                wines: [,[{vinho: "tal"}]]
            }
        };
        const fakeStore = {
            getState: () => ({}),
            dispatch: action => dispatchedActions.push(action),
        };

        await runSaga(fakeStore, loadingWines, action).done;

        expect(api.get.mock.calls.length).toBe(0);

        expect(dispatchedActions).toEqual([])
    })
})