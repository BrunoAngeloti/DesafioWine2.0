import type { NextPage } from 'next'

import React from 'react'

import { ContainerWineInfo, ContentWineInfo, LeftContent, RightContent } from './style'

export const WineInfo: NextPage = () => {
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
                <span>
                    <h4>Vinhos</h4>
                    <h4>Estados Unidos</h4>
                    <h4>Califórnia</h4>
                </span>
                <h1>Apothic Red 2019</h1>
                <div>
                    Estados Unidos Tinto Meio Seco/Demi-Sec 750 ml
                </div>
                <h2>R$63,67</h2>
                <span>NÃO SÓCIO R$ 120,95/un.</span>
                <h3>Comentário do Sommelier</h3>
                <p>Produzido no terroir californiano, esse tinto mescla as variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho inspirado nas antigas Apothecas (adegas subterrâneas), um lugar misterioso onde há mais de 800 anos os viticultores misturavam e armazenavam seus cobiçados vinhos.</p>

                <button>Adicionar</button>
            </RightContent>
        </ContentWineInfo>
    </ContainerWineInfo> 
  )
}