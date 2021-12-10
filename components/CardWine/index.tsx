import Router from 'next/router'
import React, { FunctionComponent } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

import { useDispatch } from 'react-redux'

import { addToCart } from '../../utils/cartUtils'
import { iWines } from '../../interfaces/wines'

interface iCardWine { 
    wine: iWines
}

export const CardWine: FunctionComponent<iCardWine> = ({wine}:iCardWine) => {

    const dispatch = useDispatch()

    function handleInfoPage(){
        Router.push(`/Products/${wine.id}`)        
    }

    const priceMemberToString = wine.priceMember.toFixed(2).toString().split(".")
    const priceNonMemberToString = wine.priceNonMember.toFixed(2).toString().replace(".", ",")
    const priceToString = wine.price.toFixed(2).toString().replace(".", ",")

    return(
        <ContainerCard>
            <ContentCard onClick={handleInfoPage}>
                <img src={wine.image} alt="Imagem do vinho" />
                <h1>{wine.name}</h1>
                <Discount>
                    <p>R$ {priceToString}</p>
                    <span>{wine.discount}% OFF</span>
                </Discount>
                <Member>
                    SÓCIO WINE
                    <strong> R$ <span>{priceMemberToString[0]},</span>{priceMemberToString[1]}</strong>
                </Member>  
                <NotMember>
                    NÃO SÓCIO <span>R$ {priceNonMemberToString}</span>
                </NotMember>
            </ContentCard>
            <button onClick={() => addToCart(1, dispatch, wine)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}