import React, { FunctionComponent, useState } from 'react'

import { 
    Container, 
    ContentHeader, 
    LeftContent, 
    RightContent, 
    Button, 
    Profile,
    MenuMobile
} from './style'

import { ShoppingCart } from '../ShoppingCart'
import Router from 'next/router'

export const Header: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)

    function changePage(){
        setMenuMobile(false)
        Router.push(`/`)
    }

    return(
        <>
            <MenuMobile show={menuMobile}>
                <img onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="fechar aba" />
                <div>
                    <img src="/conta.svg" alt="Icone de buscar" />
                    <Button>Clube</Button>
                    <Button onClick={()=>changePage()} selected={true}>Loja</Button>
                    <Button>Produtores</Button>
                    <Button>Ofertas</Button>
                    <Button>Eventos</Button>
                </div>
            </MenuMobile>
            <Container>
                <ContentHeader>
                    <LeftContent>
                        <img onClick={() => {setMenuMobile(!menuMobile)}} src="/ic-line.svg" alt="Icone para o menu" />
                        <img src="/LogoWine.svg" alt="Logo da Wine" />   
                        <div>     
                            <Button>Clube</Button>
                            <Button onClick={()=>{Router.push(`/`)}} selected={true}>Loja</Button>
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
        </>
    )
    
}