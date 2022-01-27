import Router from 'next/router'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { 
    ContainerCard, 
    ContentCard, 
    Discount, 
    Member, 
    NotMember 
} from './style'

import { IWines } from '../../Shared/interfaces/wines'
import { addToCart, convertPricesWine } from '../../Shared/utils/index'

interface ICardWine { 
    wine: IWines
}

export const CardWine: FunctionComponent<ICardWine> = ({ wine }:ICardWine) => {

    const dispatch = useDispatch()

    function handleInfoPage(){
        Router.push(`/products/${wine.id}`)        
    }

    const { price, priceNonMember, priceMemberToString } = convertPricesWine(wine);

    return(
        <ContainerCard>
            <ContentCard id={`Vinho${wine.id}`} onClick={handleInfoPage}>

                <Image objectFit='contain' width={200} height={200} src={wine.image} alt={`${wine.name}`} />

                <h1>{wine.name}</h1>
                <Discount>
                    <p>{price}</p>
                    <span>{wine.discount}% OFF</span>
                </Discount>
                <Member>
                    <h2>SÓCIO WINE</h2>
                    <strong> R$ 
                        <span>{priceMemberToString && priceMemberToString[0] ? priceMemberToString[0] : 0},</span>
                        {priceMemberToString && priceMemberToString[1] ? priceMemberToString[1] : 0}
                    </strong>
                </Member>  
                <NotMember>
                    NÃO SÓCIO <span>{priceNonMember}</span>
                </NotMember>
            </ContentCard>
            <button id={`AdicionarVinho${wine.id}`} onClick={() => addToCart({ qtdRequested: 1, dispatch, wine: wine })}>
                ADICIONAR
            </button>
        </ContainerCard>  
    )  
}