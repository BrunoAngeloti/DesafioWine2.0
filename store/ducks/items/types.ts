import { IWines } from "@/interfaces/wines";

export enum ItemsTypes{
    SET_ITEMS = '@items/SET_ITEMS',
    REQUEST_ITEMS = '@items/REQUEST_ITEMS',
    REQUEST_LOADING_ITEMS = '@items/REQUEST_LOADING_ITEMS',
    REQUEST_SUCCESS_ITEMS = '@items/REQUEST_SUCCESS_ITEMS',
    REQUEST_FAILED_ITEMS = '@items/REQUEST_FAILED_ITEMS',
}

export interface ItemsState{
    readonly wines: Array<Array<IWines>>,
    readonly loading: boolean,
    readonly error: boolean
}
