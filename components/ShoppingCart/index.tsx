import React, { FunctionComponent, useEffect, useState } from 'react'

import { 
    ContainerCart, 
    BackgroundCart, 
    MenuCart,
    HeaderMenuCart,
    ContentMenuCart,
    FooterMenuCart,
    TopSideFooter,
    BotSideFooter
} from './style'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { useDispatch } from "react-redux"
import { getItemsCart } from '../../store/fetchActions'
import { Dispatch } from '@reduxjs/toolkit'

import Swal from 'sweetalert2'
import { CardWineShoppingCart } from '../CardWineShoppingCart'

export function addToCart(qtdRequested:number, dispatch:Dispatch){   
    const aux = localStorage.getItem('shoppingCart')

    var qtd = (aux? parseInt(aux)+qtdRequested : qtdRequested);
    localStorage.setItem('shoppingCart', qtd.toString());

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
    Toast.fire({
        icon: 'success',
        title: 'Item adicionado ao carrinho'
    })

    dispatch(getItemsCart() as any)
}

export const ShoppingCart: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)
    const { amount } = useSelector((state: RootState)=>state.amountitems);
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getItemsCart() as any)

    },[])

    return(       
        <>
            <BackgroundCart onClick={() => {setMenuMobile(!menuMobile)}} show={menuMobile}/>
            <MenuCart show={menuMobile}>
                <HeaderMenuCart>
                    <img onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="fechar aba" />
                    <h4>WineBox({amount})</h4>
                </HeaderMenuCart>
                <ContentMenuCart>   
                    <CardWineShoppingCart />
                    <CardWineShoppingCart />
                    <CardWineShoppingCart />
                    <CardWineShoppingCart />
                    <CardWineShoppingCart />
                </ContentMenuCart>
                <FooterMenuCart>
                    <TopSideFooter>
                        <div>
                            <h4>Total</h4>
                            <span>R$177,40</span>
                        </div>
                        <p>Ganhe até <strong> R$6,39 </strong> de cashback nesta compra</p>
                        <span>Uso do cashback exclusivo no app Wine.</span>
                    </TopSideFooter>
                    <BotSideFooter>
                        <button>
                            Finalizar pedido
                        </button>
                    </BotSideFooter>
                </FooterMenuCart>
            </MenuCart>
            <ContainerCart onClick={() => {setMenuMobile(!menuMobile)}}>
                <img src="/winebox.svg" alt="Icone do carrinho de compras" />
                <span>{amount}</span>
            </ContainerCart>       
        </>          
    )
    
}