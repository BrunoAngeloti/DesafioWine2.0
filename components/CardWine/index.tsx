import Router from 'next/router'
import React, { FunctionComponent } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

import { useDispatch } from 'react-redux'

import { addToCart } from '../../utils/cartUtils'
import { IWines } from '../../interfaces/wines'
import { convertPricesWine } from '../../utils/wineUtils'

interface ICardWine { 
    wine: IWines
}

export const CardWine: FunctionComponent<ICardWine> = ({wine}:ICardWine) => {

    const dispatch = useDispatch()

    function handleInfoPage(){
        Router.push(`/products/${wine.id}`)        
    }

    const { price, priceNonMember, priceMemberToString } = convertPricesWine(wine);

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
                    <strong> R$ <span>{priceMemberToString ? priceMemberToString[0] : 0},</span>{priceMemberToString ? priceMemberToString[1] : 0}</strong>
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