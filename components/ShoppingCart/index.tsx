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
import { ApplicationState } from '../../store'
import { useDispatch } from "react-redux"

import { CardWineShoppingCart } from '../CardWineShoppingCart'

import { iItemCart } from '../../interfaces/cart'
import { AmountItemsTypes } from '../../store/ducks/amountItems/types'

export const ShoppingCart: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)
    const { amount } = useSelector((state: ApplicationState)=>state.amountItems);
    const dispatch = useDispatch()
    
    const [winesOnCart, setWinesOnCart] = useState<Array<iItemCart>>([])
    
    useEffect(()=>{
       dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
    },[])

    useEffect(()=>{
        setWinesOnCart(JSON.parse(localStorage.getItem('itemsOnCart') || "[]"))

    }, [amount])

    return(       
        <>
            <BackgroundCart onClick={() => {setMenuMobile(!menuMobile)}} show={menuMobile}/>
            <MenuCart show={menuMobile}>
                <HeaderMenuCart>
                    <img id="closeShoppingCart" onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="fechar aba" />
                    <h4 id="qtdItemsShoppingCart" >WineBox({amount})</h4>
                </HeaderMenuCart>
                {winesOnCart.length !== 0 ?
                    <>
                        <ContentMenuCart>  
                            {winesOnCart.map((wines)=>{
                                return(
                                    <CardWineShoppingCart key={wines.wine.id} wine={wines}/>
                                )                  
                            })} 
                        </ContentMenuCart>
                        <FooterMenuCart>
                            <TopSideFooter>
                                <div>
                                    <h4>Total</h4>
                                    <span>
                                        {
                                            winesOnCart.reduce(function (total, currentValue){
                                                return total + (currentValue.qtdWine * currentValue.wine.priceMember)
                                            }, 0).toFixed(2).replace(".", ",")
                                        }
                                    </span>
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
            <ContainerCart id="shoppingCart" onClick={() => {setMenuMobile(!menuMobile)}}>
                <img id="shoppingCart" src="/winebox.svg" alt="Icone do carrinho de compras" />
                <span id="qtdItemsCart">{amount}</span>
            </ContainerCart>       
        </>          
    )
    
}