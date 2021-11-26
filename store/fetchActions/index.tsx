import { Dispatch } from 'redux';
import { iItemCart } from '../../components/ShoppingCart';

export const getItemsCart = () => {
    return (dispatch:Dispatch) => {
        const aux : Array<iItemCart> = JSON.parse(localStorage.getItem('itemsOnCart') || "[]")
        
        const amount = aux.reduce(function (total, currentValue){
            return total + currentValue.qtdWine
        }, 0)
        dispatch({ type: 'GET_AMOUNT_ITEMS', payload: {amount: amount} })
    }
}
