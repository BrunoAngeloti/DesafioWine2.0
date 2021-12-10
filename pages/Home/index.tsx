import React, { useEffect } from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Wines } from '../../styles/pages/Home/style'

import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { PriceFilter } from '../../components/PriceFilter'
import { ItemsTypes } from '../../store/ducks/items/types'

import ReactLoading from "react-loading";

export default function Home(){
  const { currentPage, numItems } = useSelector((state: ApplicationState)=>state.pagination);
  const { wines, loading } = useSelector((state: ApplicationState)=>state.items)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({
      type: ItemsTypes.REQUEST_ITEMS, 
      payload: {
        pageAtual: 1,
        wines: wines
      }
    }) 
  }, [])

  return (
    <ContentHome>
      <Search>
        <h2>Refine sua busca</h2>
        <h3>Por preço</h3>
        <PriceFilter />
      </Search>
      <Items>
        {
          loading 
          ? <div style={{alignSelf: 'center'}}><ReactLoading type="spin" color="#B6116E" height={80} width={80}/></div>
          :
          <>
            <h3><strong>{numItems}</strong> produtos encontrados</h3>
            <Wines>
              {wines[currentPage]?.map(wine => {
                return (
                  <CardWine key={wine.id} wine={wine}/>
                )
              })}
              {wines[currentPage]?.length === 0 && <h1>Não temos vinhos para mostrar :(</h1>}
            </Wines>
            <Pagination />
          </>
        }
      </Items>
    </ContentHome>   
  )
}
