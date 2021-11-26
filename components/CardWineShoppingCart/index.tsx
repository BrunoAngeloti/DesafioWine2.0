import React, { FunctionComponent, useEffect, useState } from 'react'
import { iWines } from '../../pages/Home'

import { ContainerCard, LeftContent, RightContent, HeaderCardWine, FooterCardWine, AddMoreToCart, Price } from './style'

import { addToCart, iItemCart, removeToCart } from '../ShoppingCart/index'
import { useDispatch } from 'react-redux'

interface iwineCart{ 
    wine: iItemCart,
}

export const CardWineShoppingCart: FunctionComponent<iwineCart> = ({wine}:iwineCart) => {
    const [priceTotal1, setPriceTotal1] = useState("")
    const [priceTotal2, setPriceTotal2] = useState("")

    const dispatch = useDispatch()

    function stringToNumber(value:string){
        const split = value.split(",");
        const leftContent = parseInt(split[0])
        const rightContent = parseInt(split[1])
        const result = leftContent + (rightContent/100)
    
        return result
    }

    useEffect(()=>{
        const PriceMember = stringToNumber(wine.wine.PriceMember)
        const Total = PriceMember*wine.qtdWine;
        const TotalString = Total.toString()
        const TotalStringSplit = TotalString.split(".")
        setPriceTotal1(TotalStringSplit[0])
        setPriceTotal2(TotalStringSplit[1])
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
                        <strong> R$ <span>{priceTotal1}</span>,{priceTotal2[0]}{priceTotal2[1] || 0}</strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
    
}