import React, { FunctionComponent, useEffect, useState } from 'react'

import { Container, ContentHeader, LeftContent, RightContent, ShoppingCart, Button } from './style'

export const Header: FunctionComponent = () => {
    const [qtdProducts, setQtdProducts] = useState<Number>(0)

    useEffect(()=>{
        const aux = localStorage.getItem('shoppingCart')
        setQtdProducts(aux !== null ? JSON.parse(aux) : 0)
        console.log(aux)
    }, [])

    return(
        <Container>
            <ContentHeader>
                <LeftContent>
                    <img src="LogoWine.svg" alt="Logo da Wine" />   
                    <div>     
                        <Button>Clube</Button>
                        <Button selected={true}>Loja</Button>
                        <Button>Produtores</Button>
                        <Button>Ofertas</Button>
                        <Button>Eventos</Button>
                    </div>  
                </LeftContent>
                
                <RightContent>
                    <img src="Busca.svg" alt="Icone de buscar" />
                    <img src="conta.svg" alt="Icone de perfil" />
                    <ShoppingCart>
                        <img src="winebox.svg" alt="Icone do carrinho de compras" />
                        <span>{qtdProducts}</span>
                    </ShoppingCart>  
                </RightContent>
            </ContentHeader>
        </Container>  
    )
    
}