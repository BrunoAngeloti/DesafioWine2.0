import { Dispatch } from '@reduxjs/toolkit'

import { iItemCart } from '../interfaces/cart';
import { iWines } from '../interfaces/wines';

import { AmountItemsTypes } from '../store/ducks/amountItems/types';
import { modal } from './modalUtils';

export function addToCart(qtdRequested:number, dispatch:Dispatch, wineAdded:iWines | undefined){   
    //Adiciona o item no localStorage
    var itemsOnCart:Array<iItemCart> = JSON.parse(localStorage.getItem('itemsOnCart') || "[]");

    const idxItem = itemsOnCart.findIndex(wine => wine.wine.Id === wineAdded?.Id)
    if(idxItem !== -1){
        itemsOnCart[idxItem].qtdWine += qtdRequested;
    }else{
        if(wineAdded)
            itemsOnCart.push({"wine": wineAdded, "qtdWine": qtdRequested})
    }
    
    localStorage.setItem('itemsOnCart', JSON.stringify(itemsOnCart))
    
    modal(wineAdded?.Name, 'adicionado', 'sucess')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}


export function removeToCart(qtdRequested:number, dispatch:Dispatch, wineAdded:iWines | undefined){
    var itemsOnCart:Array<iItemCart> = JSON.parse(localStorage.getItem('itemsOnCart') || "[]");
    const idxItem = itemsOnCart.findIndex(wine => wine.wine.Id === wineAdded?.Id)

    itemsOnCart[idxItem].qtdWine -= qtdRequested;

    if(itemsOnCart[idxItem].qtdWine === 0)
        itemsOnCart.splice(idxItem, 1)
        
    localStorage.setItem('itemsOnCart', JSON.stringify(itemsOnCart))

    modal(wineAdded?.Name, 'removido', 'warning')
    
    dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
}