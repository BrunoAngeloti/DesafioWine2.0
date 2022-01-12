import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { 
    ContainerPagination,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'

import { ItemsTypes, selectorPagination, PaginationTypes, selectorPriceFilter } from '@/store/ducks'
import { valueFilter1, valueFilter7 } from '@/utils/index'

export const Pagination: FunctionComponent = () => {

    const { numItems, currentPage, totalPages } = selectorPagination()
    const { min, max } = selectorPriceFilter()

    const dispatch = useDispatch()
    const router = useRouter()

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleDispatchItems(payload: Object){
        dispatch({
          type: ItemsTypes.REQUEST_ITEMS, 
          payload
        })
      }

    function visible(idx:number){
        return (idx === 1 || (idx) === totalPages) || (idx > (currentPage - 2) && idx < (currentPage + 2));
    }

    function EllipsisFinal(idx:number){
       return (idx===totalPages) && currentPage < (idx - 2)
 
    }

    function EllipsisBegin(idx:number){
        return (idx === 1) && currentPage > (idx + 2)
    }

    function handleButton(idx: number){
        scrollToTop()
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: idx })
        if(min === valueFilter1 && max === valueFilter7){
            handleDispatchItems({
                pageAtual: idx,
            })
        }else{
            handleDispatchItems({
                pageAtual: idx,
                filter:{ min, max } 
            })
        }
        router.push(`/?pagina=${idx}`)
    }

    return(
        <ContainerPagination numberItems={numItems}>
            <Buttons>
                {currentPage !== 1 && <ButtonPass id="ButtonBackPage" onClick={()=>handleButton(currentPage-1)}>{'<< '}Anterior</ButtonPass>}
                {[...Array(totalPages)].map((pages, idx) => {
                    return(
                        visible(idx+1) && 
                        <div key={idx+1}>
                            {EllipsisFinal(idx+1) && <span>...</span>}
                            <ButtonPag 
                                onClick={()=>handleButton(idx+1)}
                                selected={idx+1 === currentPage}
                                next={idx+1 === currentPage+1}
                                id={`ButtonPage${idx+1}`}
                            >
                                {idx+1}
                            </ButtonPag>
                            {EllipsisBegin(idx+1) && <span>...</span>}
                        </div>
                    )
                })}
                {(currentPage) !== totalPages && <ButtonPass id="ButtonPassPage" onClick={()=>handleButton(currentPage+1)}>Próximo{' >>'}</ButtonPass>}
            </Buttons>
        </ContainerPagination>  
    )
    
}