import React, { FunctionComponent, useEffect, useState } from 'react'

import { 
    ContainerCart, 
    BackgroundCart, 
    MenuCart,
    HeaderMenuCart,
    ContentMenuCart,
    FooterMenuCart,
    TopSideFooter,
    BotSideFooter,
    NotBuyYet
} from './style'

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { useDispatch } from "react-redux"
import { getItemsCart } from '../../store/fetchActions'
import { Dispatch } from '@reduxjs/toolkit'

import Swal from 'sweetalert2'
import { CardWineShoppingCart } from '../CardWineShoppingCart'
import { iWines } from '../../pages/Home'

export interface iItemCart{ 
    wine: iWines,
    qtdWine: number
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

    const [winesOnCart, setWinesOnCart] = useState<Array<iItemCart>>([])
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getItemsCart() as any)

    },[])

    useEffect(()=>{
        setWinesOnCart(JSON.parse(localStorage.getItem('itemsOnCart') || "[]"))
    }, [amount])

    return(       
        <>
            <BackgroundCart onClick={() => {setMenuMobile(!menuMobile)}} show={menuMobile}/>
            <MenuCart show={menuMobile}>
                <HeaderMenuCart>
                    <img onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="fechar aba" />
                    <h4>WineBox({amount})</h4>
                </HeaderMenuCart>
                {winesOnCart.length !== 0 ?
                    <>
                        <ContentMenuCart>  
                            {winesOnCart.map((wines)=>{
                                return(
                                    <CardWineShoppingCart key={wines.wine.Id} wine={wines}/>
                                )                  
                            })} 
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
                    </> : 
                    <NotBuyYet>
                        <h1>:(</h1>
                        <h2>Você ainda não escolheu seus produtos</h2>
                    </NotBuyYet>

                }
                
            </MenuCart>
            <ContainerCart onClick={() => {setMenuMobile(!menuMobile)}}>
                <img src="/winebox.svg" alt="Icone do carrinho de compras" />
                <span>{amount}</span>
            </ContainerCart>       
        </>          
    )
    
}