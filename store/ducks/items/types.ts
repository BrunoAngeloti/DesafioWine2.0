import { iWines } from "../../../interfaces/wines";

export enum ItemsTypes{
    SET_ITEMS = '@amountItems/SET_ITEMS',
    REQUEST_ITEMS = '@amountItems/REQUEST_ITEMS',
    REQUEST_LOADING_ITEMS = '@amountItems/REQUEST_LOADING_ITEMS',
    REQUEST_SUCCESS_ITEMS = '@amountItems/REQUEST_SUCCESS_ITEMS',
    REQUEST_FAILED_ITEMS = '@amountItems/REQUEST_FAILED_ITEMS',
}

export interface ItemsState{
    readonly wines: Array<Array<iWines>>,
    readonly loading: boolean,
    readonly error: boolean
}