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

import api from '../../documents/vinhos.json'
import { addToCart } from '../../utils/cartUtils';
import { iWines } from '../../interfaces/wines';

export default function Products(props:ProductsProps){
    const [qtd, setQtd] = useState(1);

    const wines:iWines | undefined = api.Wines.find(wine => wine.Id == props.id)

    const dispatch = useDispatch()
    
    return (
        <ContainerWineInfo>
            <Head>
                <title>Wine | {wines?.Name}</title>
            </Head>
            <header onClick={()=> {Router.back()}} >
                <img src="/back.svg" alt="seta de voltar"/>
                <span>Voltar</span>
            </header>
            <ContentWineInfo>
                <LeftContent>
                    <img src={wines?.Image} alt="garrafa do vinho" />
                </LeftContent>
                <RightContent>
                    <LocationWine>
                        <h4>Vinhos</h4>
                        <img src="/arrowRight.svg" alt="seta para direita" />
                        <h4>{wines?.Country}</h4>
                        <img src="/arrowRight.svg" alt="seta para direita" />
                        <h4>{wines?.State}</h4>
                    </LocationWine>
                    <DetailsWine>
                        <h1>{wines?.Name}</h1>
                        <div>
                            <img src={wines?.CountryFlag} alt="bandeira do país" />
                            <p>{wines?.Country}</p> 
                            <p>{wines?.Type}</p> 
                            <p>{wines?.Classification}</p>
                            <p>{wines?.Size}</p>
                            <div>
                                <ReactStars
                                    count={5}
                                    value={wines?.Rating}
                                    size={20}                          
                                    color2={'#ffd700'} 
                                    edit={false}
                                />
                            </div>
                            
                            <p>({wines?.Avaliations})</p>
                        </div>
                    </DetailsWine>
                    <img src={wines?.Image} alt="garrafa do vinho" />
                    <PriceWine>
                        {                    
                            <h2>
                                <span>R$</span>
                                {wines?.PriceMember.substr(0, wines?.PriceMember.indexOf(","))}
                                <span>{wines?.PriceMember.substr(wines?.PriceMember.indexOf(","))}</span>
                            </h2>
                        }
                        <h3>NÃO SÓCIO R$ {wines?.PriceNotMember}/UN.</h3>
                    </PriceWine>
                    <CommentsWine>
                        <h3>Comentário do Sommelier</h3>
                        <p>{wines?.SommelierComment}</p>
                    </CommentsWine>
                    <AddOnCart>
                        <div>
                            <button disabled={qtd===1} style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : {}} onClick={()=>setQtd(qtd-1)}>-</button>
                            <span>{qtd}</span>
                            <button onClick={()=>setQtd(qtd+1)}>+</button>
                        </div>
                        <Button onClick={() => addToCart(qtd, dispatch, wines)}>Adicionar</Button>
                    </AddOnCart>               
                </RightContent>
            </ContentWineInfo>
            <FooterMobile>
                <section>
                    <span>{wines?.Off} OFF</span>
                    <h2>R$ {wines?.OldValue}</h2>
                    <h1>R$ <strong>{wines?.PriceMember}</strong></h1>
                    <h3>PREÇO NÃO-SÓCIO R$ {wines?.PriceNotMember}</h3>
                </section>
                
                <Button onClick={() => addToCart(1, dispatch, wines)}>Adicionar</Button>
            </FooterMobile>
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
