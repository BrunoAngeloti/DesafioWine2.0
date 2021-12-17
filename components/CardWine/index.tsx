import Router from 'next/router'
import React, { FunctionComponent } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

import { useDispatch } from 'react-redux'

import { addToCart } from '../../utils/cartUtils'
import { iWines } from '../../interfaces/wines'
import { convertPricesWine } from '../../utils/wineUtils'

interface iCardWine { 
    wine: iWines
}

export const CardWine: FunctionComponent<iCardWine> = ({wine}:iCardWine) => {

    const dispatch = useDispatch()

    function handleInfoPage(){
        Router.push(`/Products/${wine.id}`)        
    }

    const priceMemberToString = wine.priceMember.toFixed(2).toString().split(".")
    const { price, priceMember, priceNonMember } = convertPricesWine(wine);

    return(
        <ContainerCard>
            <ContentCard id={`Vinho${wine.id}`} onClick={handleInfoPage}>
                <img src={wine.image} alt={`${wine.name}`} />
                <h1>{wine.name}</h1>
                <Discount>
                    <p>{price}</p>
                    <span>{wine.discount}% OFF</span>
                </Discount>
                <Member>
                    SÓCIO WINE
                    <strong> R$ <span>{priceMemberToString[0]},</span>{priceMemberToString[1]}</strong>
                </Member>  
                <NotMember>
                    NÃO SÓCIO <span>{priceNonMember}</span>
                </NotMember>
            </ContentCard>
            <button id={`AdicionarVinho${wine.id}`} onClick={() => addToCart(1, dispatch, wine)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}