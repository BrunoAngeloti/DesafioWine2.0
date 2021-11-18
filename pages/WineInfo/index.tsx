import type { NextPage} from 'next'
import ReactStars from 'react-stars'

import React, {  useState  } from 'react'

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
    FooterMobile
} from './style'

import { addToCart } from '../../components/CardWine'

export const WineInfo: NextPage = () => {
    const [qtd, setQtd] = useState(1);

    function add(){
        setQtd(qtd+1);
    }

    function sub(){
        if(qtd > 1)
            setQtd(qtd-1);
    }

    return (
        <ContainerWineInfo>
            <header>
                <img src="back.svg" alt="seta de voltar" />
                <span>Voltar</span>
            </header>
            <ContentWineInfo>
                <LeftContent>
                    <img src="Wine2.svg" alt="garrafa do vinho" />
                </LeftContent>
                <RightContent>
                    <LocationWine>
                        <h4>Vinhos</h4>
                        <img src="arrowRight.svg" alt="seta para direita" />
                        <h4>Estados Unidos</h4>
                        <img src="arrowRight.svg" alt="seta para direita" />
                        <h4>Califórnia</h4>
                    </LocationWine>
                    <DetailsWine>
                        <h1>Apothic Red 2019</h1>
                        <div>
                            <img src="pais.svg" alt="bandeira do país" />
                            <p>Estados Unidos</p> 
                            <p>Tinto</p> 
                            <p>Meio Seco/Demi-Sec</p>
                            <p>750 ml</p>
                            <div>
                                <ReactStars
                                    count={5}
                                    value={4}
                                    size={24}                          
                                    color2={'#ffd700'} 
                                    edit={false}
                                />
                            </div>
                            
                            <p>(2)</p>
                        </div>
                    </DetailsWine>
                    <img src="Wine2.svg" alt="garrafa do vinho" />
                    <PriceWine>
                        <h2><span>R$</span>63,<span>67</span></h2>
                        <h3>NÃO SÓCIO R$ 120,95/UN.</h3>
                    </PriceWine>
                    <CommentsWine>
                        <h3>Comentário do Sommelier</h3>
                        <p>Produzido no terroir californiano, esse tinto mescla as variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho inspirado nas antigas Apothecas (adegas subterrâneas), um lugar misterioso onde há mais de 800 anos os viticultores misturavam e armazenavam seus cobiçados vinhos.</p>
                    </CommentsWine>
                    <AddOnCart>
                        <div>
                            <button style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : {}} onClick={sub}>-</button>
                            <span>{qtd}</span>
                            <button onClick={add}>+</button>
                        </div>
                        <Button onClick={() => addToCart(qtd)}>Adicionar</Button>
                    </AddOnCart>               
                </RightContent>
            </ContentWineInfo>
            <FooterMobile>
                <section>
                    <span>15% OFF</span>
                    <h2>R$ 30.007,40</h2>
                    <h1>R$ <strong>28.000,00</strong></h1>
                    <h3>PREÇO NÃO-SÓCIO R$ 29.999,90</h3>
                </section>
                
                <Button onClick={() => addToCart(1)}>Adicionar</Button>
            </FooterMobile>
        </ContainerWineInfo> 
    )
}