import React, { FunctionComponent } from 'react'

import { 
    Container, 
    ContentHeader, 
    LeftContent, 
    RightContent, 
    Button, 
    Profile 
} from './style'

import { ShoppingCart } from '../ShoppingCart'

export const Header: FunctionComponent = () => {

    return(
        <Container>
            <ContentHeader>
                <LeftContent>
                    <img src="/ic-line.svg" alt="Icone para o menu" />
                    <img src="/LogoWine.svg" alt="Logo da Wine" />   
                    <div>     
                        <Button>Clube</Button>
                        <Button selected={true}>Loja</Button>
                        <Button>Produtores</Button>
                        <Button>Ofertas</Button>
                        <Button>Eventos</Button>
                    </div>  
                </LeftContent>
                
                <RightContent>
                    <img src="/Busca.svg" alt="Icone de buscar" />
                    <Profile src="/conta.svg" alt="Icone de perfil" />
                    <ShoppingCart /> 
                </RightContent>
            </ContentHeader>
        </Container>  
    )
    
}