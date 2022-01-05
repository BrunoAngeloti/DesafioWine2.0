import ReactStars from 'react-stars'

import React, {  useEffect, useState  } from 'react'

import { GetServerSideProps } from "next";

import Head from 'next/head'
import Router from 'next/router'

interface ProductsProps {
    id: number;
}

import { 
    ContainerWineInfo, 
    ContentWineInfo, 
    LeftContent, 
    RightContent, 
    LocationWine, 
    DetailsWine, 
    PriceWine, 
    CommentsWine,
    Button,
    AddOnCart,
    FooterMobile,
} from '../../styles/pages/Products/style'

import { useDispatch } from 'react-redux';

import { addToCart, convertPricesWine } from '../../utils';

import { selectorItemsFiltreded } from '../../store/ducks/items/selector';

export default function Products(props:ProductsProps){
    const [qtd, setQtd] = useState(1);
    const [loading, setLoading] = useState(true)

    const wine  = selectorItemsFiltreded(props.id)

    const { price, priceMember, priceNonMember, priceMemberToString } = convertPricesWine(wine);

    const dispatch = useDispatch()
    
    useEffect(()=>{
       if(!wine) Router.push(`/`)
       else setLoading(false)
    }, [])

    return (
        <ContainerWineInfo>
            {!loading &&
            <>
                <Head>
                    <title>Wine | {wine?.name}</title>
                </Head>
                <header onClick={()=> {Router.back()}} >
                    <img src="/back.svg" alt="back arrow"/>
                    <span>Voltar</span>
                </header>
                <ContentWineInfo>
                    <LeftContent>
                        <img src={wine?.image} alt={`wine bottle ${wine?.image}`} />
                    </LeftContent>
                    <RightContent>
                        <LocationWine>
                            <h4>Vinhos</h4>
                            <img src="/arrowRight.svg" alt="right arrow" />
                            <h4>{wine?.country}</h4>
                            <img src="/arrowRight.svg" alt="right arrow" />
                            <h4>{wine?.region}</h4>
                        </LocationWine>
                        <DetailsWine>
                            <h1>{wine?.name}</h1>
                            <div>
                                <img src={wine?.flag} alt="country flag" />
                                <p>{wine?.country}</p> 
                                <p>{wine?.type}</p> 
                                <p>{wine?.classification}</p>
                                <p>{wine?.volume}</p>
                                <div>
                                    <ReactStars
                                        count={5}
                                        value={wine?.rating}
                                        size={20}                          
                                        color2={'#ffd700'} 
                                        edit={false}
                                    />
                                </div>
                                
                                <p>({wine?.avaliations})</p>
                            </div>
                        </DetailsWine>
                        <img src={wine?.image} alt={`wine bottle ${wine?.image}`} />
                        <PriceWine>
                            {                    
                                <h2>
                                    <span>R$</span>
                                    {priceMemberToString && priceMemberToString[0]},
                                    <span>{priceMemberToString && priceMemberToString[1]}</span>
                                </h2>
                            }
                            <h3>NÃO SÓCIO {priceNonMember}/UN.</h3>
                        </PriceWine>
                        <CommentsWine>
                            <h3>Comentário do Sommelier</h3>
                            <p>{wine?.sommelierComment}</p>
                        </CommentsWine>
                        <AddOnCart>
                            <div>
                                <button disabled={qtd===1} style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : undefined} onClick={()=>setQtd(qtd-1)}>-</button>
                                <span>{qtd}</span>
                                <button id="ButtonAddWine" onClick={()=>setQtd(qtd+1)}>+</button>
                            </div>
                            <Button id="ButtonAddWineOnCart" onClick={() => addToCart(qtd, dispatch, wine)}>Adicionar</Button>
                        </AddOnCart>               
                    </RightContent>
                </ContentWineInfo>
                <FooterMobile>
                    <section>
                        <span>{wine?.discount}% OFF</span>
                        <h2>{price}</h2>
                        <h1><strong>{priceMember}</strong></h1>
                        <h3>PREÇO NÃO-SÓCIO {priceNonMember}</h3>
                    </section>
                    
                    <Button id="ButtonMobileAddWineOnCart" onClick={() => addToCart(1, dispatch, wine)}>Adicionar</Button>
                </FooterMobile>
            </>
            }
        </ContainerWineInfo> 
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query.id;
    return {
        props: {
            id: id
        }
    }
}
