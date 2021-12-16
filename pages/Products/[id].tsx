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

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../utils/cartUtils';
import { iWines } from '../../interfaces/wines';
import { ApplicationState } from '../../store';
import { numberToString } from '../../utils/stringUtils';

export default function Products(props:ProductsProps){
    const [qtd, setQtd] = useState(1);
    const [loading, setLoading] = useState(true)

    const wines: Array<Array<iWines>> = useSelector((state: ApplicationState)=>state.items.wines)
    const wine = wines.map(wines=>wines?.find(wine => wine.id == props.id)).find(wine=> wine !== undefined)

    const priceMemberToString = wine?.priceMember.toFixed(2).toString().split(".")
    const priceMemberToStringNotSplit = numberToString(wine?.priceMember)
    const priceNonMemberToString = numberToString(wine?.priceNonMember)
    const priceToString = numberToString(wine?.price);
    
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
                    <img src="/back.svg" alt="seta de voltar"/>
                    <span>Voltar</span>
                </header>
                <ContentWineInfo>
                    <LeftContent>
                        <img src={wine?.image} alt="garrafa do vinho" />
                    </LeftContent>
                    <RightContent>
                        <LocationWine>
                            <h4>Vinhos</h4>
                            <img src="/arrowRight.svg" alt="seta para direita" />
                            <h4>{wine?.country}</h4>
                            <img src="/arrowRight.svg" alt="seta para direita" />
                            <h4>{wine?.region}</h4>
                        </LocationWine>
                        <DetailsWine>
                            <h1>{wine?.name}</h1>
                            <div>
                                <img src={wine?.flag} alt="bandeira do país" />
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
                        <img src={wine?.image} alt="garrafa do vinho" />
                        <PriceWine>
                            {                    
                                <h2>
                                    <span>R$</span>
                                    {priceMemberToString && priceMemberToString[0]},
                                    <span>{priceMemberToString && priceMemberToString[1]}</span>
                                </h2>
                            }
                            <h3>NÃO SÓCIO R$ {priceNonMemberToString}/UN.</h3>
                        </PriceWine>
                        <CommentsWine>
                            <h3>Comentário do Sommelier</h3>
                            <p>{wine?.sommelierComment}</p>
                        </CommentsWine>
                        <AddOnCart>
                            <div>
                                <button disabled={qtd===1} style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : {}} onClick={()=>setQtd(qtd-1)}>-</button>
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
                        <h2>R$ {priceToString}</h2>
                        <h1>R$ <strong>{priceMemberToStringNotSplit}</strong></h1>
                        <h3>PREÇO NÃO-SÓCIO R$ {priceNonMemberToString}</h3>
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
