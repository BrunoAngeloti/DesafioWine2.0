import React, { useEffect } from 'react'

import { CardWine } from '../../components/CardWine'
import { Pagination } from '../../components/Pagination'
import { Loading } from '../../components/Loading'
import { PriceFilter } from '../../components/PriceFilter'

import { Search, Items, ContentHome, Wines } from '../../styles/pages/Home/style'

import { useDispatch } from 'react-redux'

import { ItemsTypes, selectorPagination, selectorItems, selectorPriceFilter } from '../../store/ducks'

import { useRouter } from 'next/router'

import { valueFilter1, valueFilter7 } from '../../utils'

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
    if(min === valueFilter1 && max === valueFilter7){
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


