import type { NextPage } from 'next'

import React, { useEffect, useState } from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Wines } from '../../styles/pages/Home/style'

import api from '../../documents/vinhos.json'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { PriceFilter } from '../../components/PriceFilter'
import { stringToNumber } from '../../utils/stringUtils'
import { iWines } from '../../interfaces/wines'
import { PaginationTypes } from '../../store/ducks/pagination/types'
import { ItemsTypes } from '../../store/ducks/items/types'


export default function Home(){

  const [limitedWines, setlimitedWines] = useState <Array<iWines>>([]);

  const { itemsPerPage, currentPage, numItems } = useSelector((state: ApplicationState)=>state.pagination);
  const { min, max } = useSelector((state: ApplicationState)=>state.pricesFilter);

  const { wines } = useSelector((state: ApplicationState)=>state.items)

  const dispatch = useDispatch()

  function noApplyFilter(){
    return (max === 0 && min === 0)
  }

  function addInWines(wineAux:Array<iWines>){
    let arrayAux = [...wines]
    arrayAux[currentPage] = wineAux;
    dispatch({type: ItemsTypes.SET_ITEMS, payload: { wines: arrayAux}})
  }

  function applyingFilter(){
    const wineAux = api.Wines.filter(wine => (stringToNumber(wine.PriceMember) > min && stringToNumber(wine.PriceMember) <= max) )    
    setlimitedWines(wineAux.slice(itemsPerPage*currentPage, itemsPerPage*(currentPage+1)));
    dispatch({ type: PaginationTypes.CHANGE_NUM_ITEMS, payload: wineAux.length })  
  }

  function noApplyingFilter(){
    if(wines[currentPage] === undefined){        
      const wineAux = api.Wines.slice(itemsPerPage*currentPage, itemsPerPage*(currentPage+1))    
      addInWines(wineAux)
      setlimitedWines(wineAux);
    }else{
      setlimitedWines(wines[currentPage]);     
    }
    dispatch({ type: PaginationTypes.CHANGE_NUM_ITEMS, payload: api.QtdItems }) 
  }

  // UseEffect usado para renderizar os vinhos, com ou sem o filtro, de acordo com a página em questão
  useEffect(()=>{
    //dispatch({type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: 0, max:100}, pageAtual:2}})
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
