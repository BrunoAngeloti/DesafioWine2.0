import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'

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

import { useDispatch } from "react-redux"

import { CardWineShoppingCart } from '../CardWineShoppingCart'

import { IItemCart } from '../../Shared/interfaces/cart'
import { getLocalStorage } from '../../Shared/utils/index'
import { AmountItemsTypes, selectorAmountItems } from '../../Data/Redux/ducks'

export const ShoppingCart: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)
    const { amount } = selectorAmountItems();
    const dispatch = useDispatch()
    const [winesOnCart, setWinesOnCart] = useState<Array<IItemCart>>([])
    
    useEffect(()=>{
       dispatch({ type: AmountItemsTypes.GET_ITEMS_CART })
    },[])

    useEffect(()=>{
        setWinesOnCart(getLocalStorage())    
    }, [amount])

    function returnCartTotalPrice(){
        return (
            winesOnCart
                .map(wine => { return wine.qtdWine * wine.wine.priceMember })
                .reduce(function (total, currentValue){
                    return total + currentValue
                }, 0)
                .toFixed(2).replace(".", ",")
        )
    }
    
    return(       
        <>
            <BackgroundCart onClick={() => {setMenuMobile(!menuMobile)}} show={menuMobile}/>
            <MenuCart show={menuMobile}>
                <HeaderMenuCart>
                    <img width="100%" height="100%" id="closeShoppingCart" onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="close tab" />
                    <h4 id="qtdItemsShoppingCart">WineBox({amount})</h4>
                </HeaderMenuCart>
                {winesOnCart.length !== 0 ?
                    <>
                        <ContentMenuCart>  
                            {winesOnCart.map((wines)=>
                                <CardWineShoppingCart key={wines.wine.id} wine={wines}/>
                            )} 
                        </ContentMenuCart>
                        <FooterMenuCart>
                            <TopSideFooter>
                                <div>
                                    <h4>Total</h4>
                                    <span>
                                        {returnCartTotalPrice()}                                     
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
            <ContainerCart id="shoppingCart" onClick={() => { setMenuMobile(!menuMobile) }}>
                <img width="100%" height="100%" id="shoppingCartImg" src="/winebox.svg" alt="Shopping Cart Icon" />
                <span id="qtdItemsCart">{amount}</span>
            </ContainerCart>       
        </>          
    )
    
}