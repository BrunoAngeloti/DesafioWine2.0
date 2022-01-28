import React, { FunctionComponent, useState } from 'react'
import Router from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ShoppingCart = dynamic(() => import('../ShoppingCart').then((mod) => mod.ShoppingCart))

import { 
    Container, 
    ContentHeader, 
    LeftContent, 
    RightContent, 
    Button, 
    MenuMobile,
    BackgroundMobile,
    ImageHamburger,
    ImageProfile
} from './style'

const Navbar: FunctionComponent = () => {
    const [menuMobile, setMenuMobile] = useState(false)

    function changePage(){
        setMenuMobile(false)
        Router.push(`/`)
    }

    const returnButtonsMenu = (img: boolean) => { 
        return (
            <div>
                {img && <Image width={64} height={64} src="/conta.svg" alt="Icon Search" />}
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
                <Image width={32} height={32} onClick={() => {setMenuMobile(!menuMobile)}} src="/x.svg" alt="close tab" />  
                {returnButtonsMenu(true)}            
            </MenuMobile>
            <Container>
                <ContentHeader>
                    <LeftContent>

                        <ImageHamburger>
                            <Image width={30} height={30} id="LogoMenuMobile" onClick={() => {setMenuMobile(!menuMobile)}} src="/ic-line.svg" alt="Icon to the menu" />
                        </ImageHamburger>
                        <Image width={100} height={28} src="/LogoWine.svg" alt="Wine" />   

                        {returnButtonsMenu(false)}   
                    </LeftContent>
                    
                    <RightContent>
                        <Image width={56} height={56} src="/Busca.svg" alt="Icon Search" />
                        <ImageProfile>
                            <Image width={56} height={56} src="/conta.svg" alt="Icon profile" />
                        </ImageProfile>
                        <ShoppingCart /> 
                    </RightContent>
                </ContentHeader>             
            </Container>  
        </>
    )
    
}

export const Header = React.memo(Navbar)