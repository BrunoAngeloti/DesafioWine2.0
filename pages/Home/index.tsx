import type { GetServerSideProps, NextPage } from 'next'

import React, { useEffect, useState } from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Wines } from './style'

import api from '../../documents/vinhos.json'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { PriceFilter } from '../../components/PriceFilter'

export interface iWines{ 
  Id: number,
  Image: string,
  Name: string,
  OldValue: string,
  Off: string,
  PriceMember: string,
  PriceNotMember: string,
  Type: string,
  Classification: string,
  Size: string,
  Rating: number,
  Avaliations: number,
  Country: string,
  State: string,
  CountryFlag: string,
  SommelierComment: string
}

export const Home: NextPage = () => {

  const [limitedWines, setlimitedWines] = useState <Array<iWines>>([]);

  const { ItemsPerPage, currentPage, numItems } = useSelector((state: RootState)=>state.pagination);
  const { min, max } = useSelector((state: RootState)=>state.pricesfilter);

  const dispatch = useDispatch()

  function stringToNumber(value:string){
    const split = value.split(",");
    const leftContent = parseInt(split[0])
    const rightContent = parseInt(split[1])
    const result = leftContent + (rightContent/100)

    return result
  }

  useEffect(()=>{
    const wineAux = max === 0 && min === 0 ? 
      api : 
      api.filter(wine => (stringToNumber(wine.PriceMember) > min && stringToNumber(wine.PriceMember) <= max) )
    
    setlimitedWines(wineAux.slice(ItemsPerPage*currentPage, ItemsPerPage*(currentPage+1)));
    dispatch({ type: 'CHANGE_NUM_ITEMS', payload: wineAux.length })
  }, [currentPage, min, max])

  return (
    
    <ContentHome>
      <Search>
        <h2>Refine sua busca</h2>
        <h3>Por preço</h3>
        <PriceFilter />
      </Search>
      <Items>
        <h3><strong>{numItems}</strong> produtos encontrados</h3>
        <Wines>
          {
            limitedWines.map(wine => {
              return (
                <CardWine key={wine.Id} wine={wine}/>
              )
            })
          }
          {
            limitedWines.length === 0 && <h1>Não temos vinhos para mostrar :(</h1>
          }
        </Wines>
      <Pagination />
      </Items>
    </ContentHome>
    
  )
}
