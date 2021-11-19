import React, { FunctionComponent, useEffect, useState } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

export function addToCart(qtdRequested:number){
    const aux = localStorage.getItem('shoppingCart')
    var qtd = (aux? parseInt(aux)+qtdRequested : qtdRequested);
    localStorage.setItem('shoppingCart', qtd.toString());
}

export const CardWine: FunctionComponent = () => {
    return(
        <ContainerCard>
            <ContentCard>
                <img src="Wine.svg" alt="Imagem do vinho" />
                <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>
                <Discount>
                    <p>R$ 37,40</p>
                    <span>60% OFF</span>
                </Discount>
                <Member>SÓCIO WINE <strong> R$ <span>30</span>,00</strong></Member>  
                <NotMember>NÃO SÓCIO R$ 37,40</NotMember>
            </ContentCard>
            <button onClick={() => addToCart(1)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}