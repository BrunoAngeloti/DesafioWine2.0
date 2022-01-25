import { Dispatch } from '@reduxjs/toolkit'

import { IItemCart } from '../interfaces/cart';
import { IWines } from '../interfaces/wines';

import { AmountItemsTypes } from '../../Data/Redux/ducks/amountItems/types';
import { getLocalStorage, setLocalStorage } from './localStorageUtils';
import { modal } from './modalUtils';

interface IParams{
    qtdRequested: number,
    dispatch: Dispatch,
    wine: IWines | undefined
}

export function addToCart({qtdRequested, dispatch, wine} : IParams){   
    var itemsOnCart:Array<IItemCart> = getLocalStorage()
    const idxItem = itemsOnCart.findIndex(wineItem => wineItem.wine.id === wine?.id)

    if(idxItem !== -1){
        itemsOnCart[idxItem].qtdWine += qtdRequested;
    }else{
        if(wine)
            itemsOnCart.push({"wine": wine, "qtdWine": qtdRequested})
    }
    
    setLocalStorage(itemsOnCart)
    
    modal(wine?.name, 'adicionado', 'sucess')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}


export function removeToCart({qtdRequested, dispatch, wine} : IParams){
    var itemsOnCart:Array<IItemCart> = getLocalStorage()
    const idxItem = itemsOnCart.findIndex(wineItem => wineItem.wine.id === wine?.id)

    itemsOnCart[idxItem].qtdWine -= qtdRequested;

    if(itemsOnCart[idxItem].qtdWine === 0)
        itemsOnCart.splice(idxItem, 1)
        
    setLocalStorage(itemsOnCart)

    modal(wine?.name, 'removido', 'warning')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}