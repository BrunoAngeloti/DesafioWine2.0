import { Dispatch } from 'redux';

export const getItemsCart = () => {
    return (dispatch:Dispatch) => {
        const aux = localStorage.getItem('shoppingCart')
        const amount = aux !== null ? JSON.parse(aux) : 0;
        dispatch({ type: 'GET_AMOUNT_ITEMS', payload: {amount: amount} })
    }
}
