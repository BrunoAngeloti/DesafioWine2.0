export enum PriceFilterTypes{
    GET_PRICE_FILTER = '@pricesFilter/GET_PRICE_FILTER',
    CHANGE_PRICE_FILTER = '@pricesFilter/CHANGE_PRICE_FILTER',
}

export interface PriceFilterState{
    readonly min: number,
    readonly max: number,
}
