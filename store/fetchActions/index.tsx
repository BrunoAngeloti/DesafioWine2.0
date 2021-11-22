import { Dispatch } from 'redux';

export const getItemsCart = () => {
    return (dispatch:Dispatch) => {
        const aux = localStorage.getItem('shoppingCart')
        const amount = aux !== null ? JSON.parse(aux) : 0;
        dispatch({ type: 'GET_AMOUNT_ITEMS', payload: {amount: amount} })
    }
}

/*export const addToCart = (qtdRequested:number) => {  
    return  (dispatch:Dispatch) => {
        const aux = localStorage.getItem('shoppingCart')
        var qtd = (aux? parseInt(aux)+qtdRequested : qtdRequested);
        localStorage.setItem('shoppingCart', qtd.toString());
        dispatch(getItemsCart())
    }
}*/
