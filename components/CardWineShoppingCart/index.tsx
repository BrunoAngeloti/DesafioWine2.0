import React, { FunctionComponent } from 'react'
import { iWines } from '../../pages/Home'

import { ContainerCard, LeftContent, RightContent, HeaderCardWine, FooterCardWine, AddMoreToCart, Price } from './style'

import { iItemCart } from '../ShoppingCart/index'

interface iwineCart{ 
    wine: iItemCart,
}

export const CardWineShoppingCart: FunctionComponent<iwineCart> = ({wine}:iwineCart) => {

    const PriceMember = wine.wine.PriceMember.split(",")

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
                        <img src="/x-circle.svg" alt="excluir vinho"/>
                    </div>                  
                </HeaderCardWine>
                <FooterCardWine>
                    <AddMoreToCart>
                        <button>-</button>
                        <span>{wine.qtdWine}</span>
                        <button>+</button>                      
                    </AddMoreToCart>
                    <Price>
                        <strong> R$ <span>{PriceMember[0]}</span>,{PriceMember[1]}</strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
    
}