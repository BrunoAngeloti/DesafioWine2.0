import { Dispatch } from '@reduxjs/toolkit'

import Swal from 'sweetalert2'
import { iItemCart } from '../interfaces/cart';
import { iWines } from '../interfaces/wines';
import { loadItemsCart } from '../store/ducks/amountItems';

function modal(name: string | undefined, behavior: string, type: string){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
      
    Toast.fire({
        icon: type === 'sucess' ? 'success' : 'warning',
        title: `${name} ${behavior} do carrinho`
    })
}

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

    dispatch({ type: 'GET_ITEMS_CART' })
    //dispatch(getItemsCart() as any)
}


export function removeToCart(qtdRequested:number, dispatch:Dispatch, wineAdded:iWines | undefined){
    var itemsOnCart:Array<iItemCart> = JSON.parse(localStorage.getItem('itemsOnCart') || "[]");
    const idxItem = itemsOnCart.findIndex(wine => wine.wine.Id === wineAdded?.Id)
    if(itemsOnCart[idxItem].qtdWine - qtdRequested === 0){
        itemsOnCart.splice(idxItem, 1)
    }else{
        itemsOnCart[idxItem].qtdWine -= qtdRequested;
    }
    localStorage.setItem('itemsOnCart', JSON.stringify(itemsOnCart))

    modal(wineAdded?.Name, 'removido', 'warning')
    dispatch({ type: 'GET_ITEMS_CART' })
    //dispatch(getItemsCart() as any)
}