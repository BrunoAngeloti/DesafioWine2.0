export enum AmountItemsTypes{
    GET_AMOUNT_ITEMS = '@amountItems/GET_AMOUNT_ITEMS',
    GET_ITEMS_CART = '@amountItems/GET_ITEMS_CART',
}

export interface AmountItemsState{
    readonly amount: number,
}