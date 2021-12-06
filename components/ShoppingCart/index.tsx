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

import { connect, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {bindActionCreators, Dispatch} from 'redux'
import { useDispatch } from "react-redux"
//import { getItemsCart } from '../../store/fetchActions'

import { CardWineShoppingCart } from '../CardWineShoppingCart'

import { stringToNumber } from '../../utils/stringUtils'
import { iItemCart } from '../../interfaces/cart'
import { loadItemsCart } from '../../store/ducks/amountItems'

export const ShoppingCart: FunctionComponent = (props:any) => {
    const [menuMobile, setMenuMobile] = useState(false)
    const { amount } = useSelector((state: RootState)=>state.amountitems);
    const dispatch = useDispatch()
    
    
    

    const [winesOnCart, setWinesOnCart] = useState<Array<iItemCart>>([])
    
    
    
    useEffect(()=>{
        //dispatch(getItemsCart() as any)
       //const { loadItemsCart } = props
       //loadItemsCart()
       dispatch({ type: 'GET_ITEMS_CART' })
       //dispatch('GET_ITEMS_CART')
       console.log(props.amount)
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
                                    <span>
                                        {
                                            winesOnCart.reduce(function (total, currentValue){
                                                return total + (currentValue.qtdWine * stringToNumber(currentValue.wine.PriceMember))
                                            }, 0).toFixed(2)
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
            <ContainerCart onClick={() => {setMenuMobile(!menuMobile)}}>
                <img src="/winebox.svg" alt="Icone do carrinho de compras" />
                <span>{amount}</span>
            </ContainerCart>       
        </>          
    )
    
}

const mapStateToProps = (state: RootState) => ({  
    amount: state.amountitems.amount,
})

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators({
    loadItemsCart
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)