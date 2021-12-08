import React, { FunctionComponent, useEffect, useState } from 'react'

import { ContainerCard, LeftContent, RightContent, HeaderCardWine, FooterCardWine, AddMoreToCart, Price } from './style'

import { useDispatch } from 'react-redux'

import { stringToNumber } from '../../utils/stringUtils'
import { addToCart, removeToCart } from '../../utils/cartUtils'
import { iItemCart } from '../../interfaces/cart'

interface iwineCart{ 
    wine: iItemCart,
}

export const CardWineShoppingCart: FunctionComponent<iwineCart> = ({wine}:iwineCart) => {
    const [priceTotal1, setPriceTotal1] = useState("")
    const [priceTotal2, setPriceTotal2] = useState("")

    const dispatch = useDispatch()

    function setPriceItemTotal(){
        const priceMember = stringToNumber(wine.wine.PriceMember)
        const total = priceMember*wine.qtdWine;
        const totalString = total.toString()
        const totalStringSplit = totalString.split(".")
        setPriceTotal1(totalStringSplit[0])
        setPriceTotal2(totalStringSplit[1])
    }

    useEffect(()=>{
        setPriceItemTotal()
    }, [wine.qtdWine])

    return(
        <ContainerCard>
            <LeftContent>
                <img src={wine?.wine.Image} alt="Foto do vinho" />
            </LeftContent>
            <RightContent>
                <HeaderCardWine>
                    <div>
                        <h4>{wine?.wine.Name}</h4>
                        <span>{wine?.wine.Country}</span>
                    </div>
                    <div>
                        <img onClick={() => removeToCart(wine.qtdWine, dispatch, wine.wine)} src="/x-circle.svg" alt="excluir vinho"/>
                    </div>                  
                </HeaderCardWine>
                <FooterCardWine>
                    <AddMoreToCart>
                        <button onClick={()=>removeToCart(1, dispatch, wine.wine)}>-</button>
                        <span>{wine.qtdWine}</span>
                        <button onClick={()=>addToCart(1, dispatch, wine.wine)}>+</button>                      
                    </AddMoreToCart>
                    <Price>
                        <strong> R$ <span>{priceTotal1}</span>,{priceTotal2? priceTotal2[0] : 0}{priceTotal2? (priceTotal2[1] || 0) : 0}</strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
    
}