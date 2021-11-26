import React, { FunctionComponent } from 'react'

import { ContainerCard, LeftContent, RightContent, HeaderCardWine, FooterCardWine, AddMoreToCart, Price } from './style'


export const CardWineShoppingCart: FunctionComponent = () => {

    return(
        <ContainerCard>
            <LeftContent>
                <img src="https://www.wine.com.br/cdn-cgi/image/f=png,h=515,q=99/assets-images/produtos/26453-01.png" alt="Foto do vinho" />
            </LeftContent>
            <RightContent>
                <HeaderCardWine>
                    <div>
                        <h4>Dadá Nº 391 Art Cabernet 2020</h4>
                        <span>Argentina</span>
                    </div>
                    <div>
                        <img src="/x-circle.svg" alt="excluir vinho"/>
                    </div>                  
                </HeaderCardWine>
                <FooterCardWine>
                    <AddMoreToCart>
                        <button>-</button>
                        <span>3</span>
                        <button>+</button>                      
                    </AddMoreToCart>
                    <Price>
                        <strong> R$ <span>39</span>,90</strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
    
}