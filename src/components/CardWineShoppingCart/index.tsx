import React, { FunctionComponent, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { 
    ContainerCard, 
    LeftContent, 
    RightContent, 
    HeaderCardWine, 
    FooterCardWine, 
    AddMoreToCart, 
    Price 
} from './style'

import { addToCart, removeToCart } from '../../Shared/utils/index'
import { IItemCart } from '../../Shared/interfaces/cart'

interface IwineCart{ 
    wine: IItemCart,
}

export const CardWineShoppingCart: FunctionComponent<IwineCart> = ({wine}:IwineCart) => {

    const dispatch = useDispatch()

    const [real, centavo] = useMemo(()=>{
        return (wine.wine.priceMember * wine.qtdWine).toFixed(2).toString().split(".");
    }, [wine.qtdWine])

    return(
        <ContainerCard>
            <LeftContent>
                <img width="100%" height="100%" src={wine?.wine.image} alt={`${wine?.wine.name}`} />
            </LeftContent>
            <RightContent>
                <HeaderCardWine>
                    <div>
                        <h4>{wine?.wine.name}</h4>
                        <span>{wine?.wine.country}</span>
                    </div>
                    <div>
                        <img 
                            width="100%" height="100%"
                            id={`removeItemId${wine?.wine.id}`} 
                            onClick={() => removeToCart({ qtdRequested: wine.qtdWine, dispatch, wine: wine.wine })} 
                            src="/x-circle.svg" alt="delete wine"
                        />
                    </div>                  
                </HeaderCardWine>
                <FooterCardWine>
                    <AddMoreToCart>
                        <button 
                            id={`removeOneItemId${wine?.wine.id}`} 
                            onClick={() => removeToCart({ qtdRequested: 1, dispatch, wine: wine.wine })}
                        >
                            -
                        </button>
                        <span>{wine.qtdWine}</span>
                        <button 
                            id={`addOneItemId${wine?.wine.id}`} 
                            onClick={() => addToCart({ qtdRequested: 1, dispatch, wine: wine.wine })}
                        >
                            +
                        </button>                      
                    </AddMoreToCart>
                    <Price>
                        <strong> 
                            R$ <span>{real ?? 0}</span>,
                            {centavo ?? 0}
                        </strong>
                    </Price>
                </FooterCardWine>
            </RightContent>
        </ContainerCard>  
    )
}