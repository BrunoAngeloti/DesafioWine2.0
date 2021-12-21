import React, { useEffect, useState } from 'react'
import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'

import { Search, Items, ContentHome, Wines } from '../../styles/pages/Home/style'

import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { PriceFilter } from '../../components/PriceFilter'
import { ItemsTypes } from '../../store/ducks/items/types'


import { selectorPagination } from '../../store/ducks/pagination/selector'
import { selectorItems } from '../../store/ducks/items/selector'

import { useRouter } from 'next/router'
import { Loading } from '../../components/Loading'
import { selectorPriceFilter } from '../../store/ducks/pricesFilter/selector'

interface HomeProps {
  page: number;
}

export default function Home(props:HomeProps){
  const { currentPage, numItems } = selectorPagination()
  const { wines, loading } = selectorItems()
  const { min, max } = selectorPriceFilter()
  
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(()=>{
    if(min === 0 && max === 999999){
      dispatch({
        type: ItemsTypes.REQUEST_ITEMS, 
        payload: {
          pageAtual: router.query.pagina || 1,
        }
      })
    }else{
      dispatch({
          type: ItemsTypes.REQUEST_ITEMS, 
          payload: {
            pageAtual: router.query.pagina || 1,
              filter:{
                  min: min,
                  max: max
              },           
          }
      }) 
  }
    
  }, [router.query.pagina])

  const returnCardWines = () => {
    if(wines?.length === 0) return <h1>Não temos vinhos para mostrar :(</h1>

    return wines[currentPage]?.map(wine => {
      return (
        <CardWine key={wine.id} wine={wine}/>
      )
    })
  }

  return (
    <ContentHome>
      <Search>
        <h2>Refine sua busca</h2>
        <h3>Por preço</h3>
        <PriceFilter />
      </Search>
      <Items>
        {loading ? 
          <Loading />
        :
          <>
            <h3><strong>{numItems}</strong> produtos encontrados</h3>
            <Wines>
              {returnCardWines()}
            </Wines>
            <Pagination />
          </>
        }
      </Items>
    </ContentHome>   
  )
}


