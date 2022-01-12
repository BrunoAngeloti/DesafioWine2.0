import { Dispatch } from '@reduxjs/toolkit'

import { IItemCart } from '@/interfaces/cart';
import { IWines } from '@/interfaces/wines';

import { AmountItemsTypes } from '../store/ducks/amountItems/types';
import { getLocalStorage, setLocalStorage } from './localStorageUtils';
import { modal } from './modalUtils';

export function addToCart(qtdRequested:number, dispatch:Dispatch, wineAdded:IWines | undefined){   
    var itemsOnCart:Array<IItemCart> = getLocalStorage()
    const idxItem = itemsOnCart.findIndex(wine => wine.wine.id === wineAdded?.id)

    if(idxItem !== -1){
        itemsOnCart[idxItem].qtdWine += qtdRequested;
    }else{
        if(wineAdded)
            itemsOnCart.push({"wine": wineAdded, "qtdWine": qtdRequested})
    }
    
    setLocalStorage(itemsOnCart)
    
    modal(wineAdded?.name, 'adicionado', 'sucess')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}


export function removeToCart(qtdRequested:number, dispatch:Dispatch, wineAdded:IWines | undefined){
    var itemsOnCart:Array<IItemCart> = getLocalStorage()
    const idxItem = itemsOnCart.findIndex(wine => wine.wine.id === wineAdded?.id)

    itemsOnCart[idxItem].qtdWine -= qtdRequested;

    if(itemsOnCart[idxItem].qtdWine === 0)
        itemsOnCart.splice(idxItem, 1)
        
    setLocalStorage(itemsOnCart)

    modal(wineAdded?.name, 'removido', 'warning')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}