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
        Router.push(`/Products/${wine.Id}`)        
    }
    
    const priceMember = wine.PriceMember.split(",")
    
    return(
        <ContainerCard>
            <ContentCard onClick={handleInfoPage}>
                <img src={wine.Image} alt="Imagem do vinho" />
                <h1>{wine.Name}</h1>
                <Discount>
                    <p>R$ {wine.OldValue}</p>
                    <span>{wine.Off} OFF</span>
                </Discount>
                <Member>
                    SÓCIO WINE
                    <strong> R$ <span>{priceMember[0]}</span>,{priceMember[1]}</strong>
                </Member>  
                <NotMember>
                    NÃO SÓCIO <span>R$ {wine.PriceNotMember}</span>
                </NotMember>
            </ContentCard>
            <button onClick={() => addToCart(1, dispatch, wine)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}