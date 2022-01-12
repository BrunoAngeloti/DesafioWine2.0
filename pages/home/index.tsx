import React, { useEffect } from 'react'

import { 
  Search, 
  Items, 
  ContentHome, 
  Wines 
} from '../../styles/pages/Home/style'

import { CardWine, Pagination, Loading, PriceFilter } from '@/components/index'
import { ItemsTypes, selectorPagination, selectorItems, selectorPriceFilter } from '@/store/ducks'
import { valueFilter1, valueFilter7 } from '@/utils/index'

import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

export default function Home(){
  const { currentPage, numItems } = selectorPagination()
  const { wines, loading } = selectorItems()
  const { min, max } = selectorPriceFilter()
  
  const router = useRouter()
  const dispatch = useDispatch()

  function handleDispatchItems(payload: Object){
    dispatch({
      type: ItemsTypes.REQUEST_ITEMS, 
      payload
    })
  }

  useEffect(()=>{
    if(min === valueFilter1 && max === valueFilter7){
      handleDispatchItems({
        pageAtual: router.query.pagina || 1,
      })
    }else{
      handleDispatchItems({
        pageAtual: router.query.pagina || 1,
        filter:{ min, max } 
      })
    }  
  }, [router.query.pagina])

  const returnCardWines = () => {
    if(wines?.length === 0) return <h1>Não temos vinhos para mostrar :(</h1>

    return wines[currentPage]?.map(wine => <CardWine key={wine.id} wine={wine}/>)
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


