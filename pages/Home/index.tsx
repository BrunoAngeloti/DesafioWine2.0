import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Wines } from '../../styles/pages/Home/style'

import api from '../../documents/vinhos.json'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { PriceFilter } from '../../components/PriceFilter'
import { stringToNumber } from '../../utils/stringUtils'
import { iWines } from '../../interfaces/wines'


export default function Home(){

  const [limitedWines, setlimitedWines] = useState <Array<iWines>>([]);
  const [wines, setWines] = useState <Array<Array<iWines>>>([]);

  const { ItemsPerPage, currentPage, numItems } = useSelector((state: RootState)=>state.pagination);
  const { min, max } = useSelector((state: RootState)=>state.pricesfilter);

  const dispatch = useDispatch()

  function noApplyFilter(){
    return (max === 0 && min === 0)
  }

  function addInWines(wineAux:Array<iWines>){
    let arrayAux = [...wines]
    arrayAux[currentPage] = wineAux;
    setWines(arrayAux)
  }

  function applyingFilter(){
    const wineAux = api.Wines.filter(wine => (stringToNumber(wine.PriceMember) > min && stringToNumber(wine.PriceMember) <= max) )    
    setlimitedWines(wineAux.slice(ItemsPerPage*currentPage, ItemsPerPage*(currentPage+1)));
    dispatch({ type: 'CHANGE_NUM_ITEMS', payload: wineAux.length })  
  }

  function noApplyingFilter(){
    if(wines[currentPage] === undefined){        
      const wineAux = api.Wines.slice(ItemsPerPage*currentPage, ItemsPerPage*(currentPage+1))    
      addInWines(wineAux)
      setlimitedWines(wineAux);
    }else{
      setlimitedWines(wines[currentPage]);     
    }
    dispatch({ type: 'CHANGE_NUM_ITEMS', payload: api.QtdItems }) 
  }

  // UseEffect usado para renderizar os vinhos, com ou sem o filtro, de acordo com a página em questão
  useEffect(()=>{
    if(noApplyFilter()){
      noApplyingFilter()
    }else{      
      applyingFilter()   
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
