import React, { FunctionComponent, useEffect, useState } from 'react'

import { ContainerCart } from './style'

export const ShoppingCart: FunctionComponent = () => {
    const [qtdProducts, setQtdProducts] = useState<Number>(0)

    useEffect(()=>{
        const aux = localStorage.getItem('shoppingCart')
        setQtdProducts(aux !== null ? JSON.parse(aux) : 0)
    }, [])

    return(       
        <ContainerCart>
            <img src="winebox.svg" alt="Icone do carrinho de compras" />
            <span>{qtdProducts}</span>
        </ContainerCart>                 
    )
    
}