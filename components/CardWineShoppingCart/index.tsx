import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { 
    ContainerCard, 
    LeftContent, 
    RightContent, 
    HeaderCardWine, 
    FooterCardWine, 
    AddMoreToCart, 
    Price 
} from './style'

import { addToCart, removeToCart } from '@/utils/index'
import { IItemCart } from '@/interfaces/cart'

interface IwineCart{ 
    wine: IItemCart,
}

export const CardWineShoppingCart: FunctionComponent<IwineCart> = ({wine}:IwineCart) => {
    const [priceTotal1, setPriceTotal1] = useState("")
    const [priceTotal2, setPriceTotal2] = useState("")

    const dispatch = useDispatch()

    function setPriceItemTotal(){
        const total = (wine.wine.priceMember * wine.qtdWine).toString().split(".");
        setPriceTotal1(total[0])
        setPriceTotal2(total[1])
    }

    useEffect(()=>{
        setPriceItemTotal()
    }, [wine.qtdWine])

    return(
        <ContainerCard>
            <LeftContent>
                <img src={wine?.wine.image} alt={`${wine?.wine.name}`} />
            </LeftContent>
            <RightContent>
                <HeaderCardWine>
                    <div>
                        <h4>{wine?.wine.name}</h4>
                        <span>{wine?.wine.country}</span>
                    </div>
                    <div>
                        <img id={`removeItemId${wine?.wine.id}`} onClick={() => removeToCart(wine.qtdWine, dispatch, wine.wine)} src="/x-circle.svg" alt="delete wine"/>
                    </div>                  
                </HeaderCardWine>
                <FooterCardWine>
                    <AddMoreToCart>
                        <button id={`removeOneItemId${wine?.wine.id}`} onClick={()=>removeToCart(1, dispatch, wine.wine)}>-</button>
                        <span>{wine.qtdWine}</span>
                        <button id={`addOneItemId${wine?.wine.id}`} onClick={()=>addToCart(1, dispatch, wine.wine)}>+</button>                      
                    </AddMoreToCart>
                    <Price>
                        <strong> 
                            R$ <span>{priceTotal1}</span>,
                            {priceTotal2? (priceTotal2[0] || 0) : 0}
                            {priceTotal2? (priceTotal2[1] || 0) : 0}
                        </strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
    
}