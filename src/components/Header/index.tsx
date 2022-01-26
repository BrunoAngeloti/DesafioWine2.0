import React, { FunctionComponent, useState } from 'react'
import Router from 'next/router'

import { 
    Container, 
    ContentHeader, 
    LeftContent, 
    RightContent, 
    Button, 
    Profile,
    MenuMobile,
    BackgroundMobile
} from './style'

import { ShoppingCart } from '../ShoppingCart'

const Navbar: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)

    function changePage(){
        setMenuMobile(false)
        Router.push(`/`)
    }

    const returnButtonsMenu = (img: boolean) => { 
        return (
            <div>
                {img && <img width={64} height={64} src="/conta.svg" alt="Icon Search" />}
                <Button>Clube</Button>
                <Button id="BackToMenu" onClick={()=>changePage()} selected>Loja</Button>
                <Button>Produtores</Button>
                <Button>Ofertas</Button>
                <Button>Eventos</Button>
            </div>
        )
    }

    return(
        <>
            <BackgroundMobile onClick={() => {setMenuMobile(!menuMobile)}} show={menuMobile}/>
            <MenuMobile show={menuMobile}>
                <img width={32} height={32} onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="close tab" />  
                {returnButtonsMenu(true)}            
            </MenuMobile>
            <Container>
                <ContentHeader>
                    <LeftContent>
                        <img width="100%" height="100%" id="LogoMenuMobile" onClick={() => {setMenuMobile(!menuMobile)}} src="/ic-line.svg" alt="Icon to the menu" />
                        <img width="100%" height="100%" src="/LogoWine.svg" alt="Wine" />   
                        {returnButtonsMenu(false)}   
                    </LeftContent>
                    
                    <RightContent>
                        <img width="100%" height="100%" src="/Busca.svg" alt="Icon Search" />
                        <Profile src="/conta.svg" alt="Icon profile" />
                        <ShoppingCart /> 
                    </RightContent>
                </ContentHeader>             
            </Container>  
        </>
    )
    
}

export const Header = React.memo(Navbar)