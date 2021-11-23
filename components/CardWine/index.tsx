import Router from 'next/router'
import React, { FunctionComponent, useEffect } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

import { addToCart } from '../ShoppingCart'
import { useDispatch } from 'react-redux'
import { iWines } from '../../pages/Home'

interface iCardWine { 
    wine: iWines
}

export const CardWine: FunctionComponent<iCardWine> = ({wine}:iCardWine) => {

    function handleInfoPage(){
        Router.push(`/Products/${wine.Id}`)        
    }
    const dispatch = useDispatch()

    const PriceMember = wine.PriceMember.split(",")
    
    return(
        <ContainerCard>
            <ContentCard onClick={handleInfoPage}>
                <img src={wine.Image} alt="Imagem do vinho" />
                <h1>{wine.Name}</h1>
                <Discount>
                    <p>R$ {wine.OldValue}</p>
                    <span>{wine.Off} OFF</span>
                </Discount>
                <Member>SÓCIO WINE <strong> R$ <span>{PriceMember[0]}</span>,{PriceMember[1]}</strong></Member>  
                <NotMember>NÃO SÓCIO R$ {wine.PriceNotMember}</NotMember>
            </ContentCard>
            <button onClick={() => addToCart(1, dispatch)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}