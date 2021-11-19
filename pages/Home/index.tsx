import type { NextPage } from 'next'

import React from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Filter, Wines } from './style'

export const Home: NextPage = () => {
  return (
    
    <ContentHome>
      <Search>
        <h2>Refine sua busca</h2>
        <h3>Por preço</h3>
        <Filter>
          <div>
            <input type="radio" id="40" value="40"/>
            <label htmlFor="40">Até R$40</label>
          </div>
          <div>
            <input type="radio" id="60" value="60"/>
            <label htmlFor="60">R$40 A R$60</label>
          </div>
          <div>
            <input type="radio" id="100" value="100"/>
            <label htmlFor="100">R$100 A R$200</label>
          </div>
          <div>
            <input type="radio" id="200" value="200"/>
            <label htmlFor="200">R$200 A R$500</label>
          </div>
          <div>
            <input type="radio" id="500" value="500"/>
            <label htmlFor="500">Acima de R$500</label>
          </div>
        </Filter>
        
      </Search>
      <Items>
        <h3><strong>49</strong> produtos encontrados</h3>
        <Wines>
          <CardWine />
          <CardWine />
          <CardWine />
          <CardWine />
          <CardWine />
          <CardWine />
        </Wines>
      <Pagination />
      </Items>
    </ContentHome>
    
  )
}