import ReactStars from 'react-stars'

import React, {  useEffect, useState  } from 'react'

import { GetServerSideProps } from "next";

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
} from './style'

import { addToCart } from '../../components/ShoppingCart';
import { useDispatch } from 'react-redux';
import { iWines } from '../Home';

import api from '../../documents/vinhos.json'

export default function Products(props:ProductsProps){
    const [qtd, setQtd] = useState(1);

    const [wines, setWines] = useState<iWines>()


    function add(){
        setQtd(qtd+1);
    }

    function sub(){
        if(qtd > 1)
            setQtd(qtd-1);
    }

    const dispatch = useDispatch()
    

    useEffect(()=>{
        const vinho = api.find(wine => wine.Id == props.id)        
        setWines(vinho);
    }, [])

    return (
        <ContainerWineInfo>
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
                            <img src="/pais.svg" alt="bandeira do país" />
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
                    <img src="/Wine2.svg" alt="garrafa do vinho" />
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
                            <button style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : {}} onClick={sub}>-</button>
                            <span>{qtd}</span>
                            <button onClick={add}>+</button>
                        </div>
                        <Button onClick={() => addToCart(qtd, dispatch)}>Adicionar</Button>
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
                
                <Button onClick={() => addToCart(1, dispatch)}>Adicionar</Button>
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
