import Router from 'next/router'
import React, { FunctionComponent } from 'react'

import { ContainerCard, ContentCard, Discount, Member, NotMember } from './style'

import { addToCart } from '../ShoppingCart'
import { useDispatch } from 'react-redux'



export const CardWine: FunctionComponent = () => {

    function handleInfoPage(){
        Router.push('/Products/59')
    }

    const dispatch = useDispatch()
    
    return(
        <ContainerCard>
            <ContentCard onClick={handleInfoPage}>
                <img src="Wine.svg" alt="Imagem do vinho" />
                <h1>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</h1>
                <Discount>
                    <p>R$ 37,40</p>
                    <span>60% OFF</span>
                </Discount>
                <Member>SÓCIO WINE <strong> R$ <span>30</span>,00</strong></Member>  
                <NotMember>NÃO SÓCIO R$ 37,40</NotMember>
            </ContentCard>
            <button onClick={() => addToCart(1, dispatch)}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )
    
}