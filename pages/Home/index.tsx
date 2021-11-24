import type { NextPage } from 'next'

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
  const [wines, setWines] = useState <Array<Array<iWines>>>([]);

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
    // Verifica se o filtro foi aplicado
    if(max === 0 && min === 0){
      // Verifica se ele ja fez a requisição
      if(wines[currentPage] === undefined){
        // Se não fez a requisição, faz apenas a parcela indicada e limita a visualizacao
        const wineAux = api.Wines.slice(ItemsPerPage*currentPage, ItemsPerPage*(currentPage+1))
  
        let arrayAux = [...wines]
        arrayAux[currentPage] = wineAux;
        setWines(arrayAux)
  
        setlimitedWines(wineAux);
      }else{
        // Se ja fez a requisição, apenas mostre
        setlimitedWines(wines[currentPage]);     
      }

      dispatch({ type: 'CHANGE_NUM_ITEMS', payload: api.QtdItems }) 
    }else{
      // Se o filtro foi aplicado, pega todos os vinhos da requisição e filtra pelo preço
      const wineAux = api.Wines.filter(wine => (stringToNumber(wine.PriceMember) > min && stringToNumber(wine.PriceMember) <= max) )

      // Limita a visualização e altera o valor de numero de itens total
      setlimitedWines(wineAux.slice(ItemsPerPage*currentPage, ItemsPerPage*(currentPage+1)));
      dispatch({ type: 'CHANGE_NUM_ITEMS', payload: wineAux.length })
    }   
    
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
          {limitedWines?.map(wine => {
            return (
              <CardWine key={wine.Id} wine={wine}/>
            )
          })}
          {limitedWines?.length === 0 && <h1>Não temos vinhos para mostrar :(</h1>}
        </Wines>
      <Pagination />
      </Items>
    </ContentHome>
    
  )
}
