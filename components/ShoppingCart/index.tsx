import React, { FunctionComponent, useEffect, useState } from 'react'

import { ContainerCart } from './style'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { useDispatch } from "react-redux"
import { getItemsCart } from '../../store/fetchActions'
import { Dispatch } from '@reduxjs/toolkit'

export function addToCart(qtdRequested:number, dispatch:Dispatch){   
    const aux = localStorage.getItem('shoppingCart')
    var qtd = (aux? parseInt(aux)+qtdRequested : qtdRequested);
    localStorage.setItem('shoppingCart', qtd.toString());
    dispatch(getItemsCart() as any)
}

export const ShoppingCart: FunctionComponent = () => {
    
    const { amount } = useSelector((state: RootState)=>state.amountitems);

    return(       
        <ContainerCart>
            <img src="/winebox.svg" alt="Icone do carrinho de compras" />
            <span>{amount}</span>
        </ContainerCart>                 
    )
    
}