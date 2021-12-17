import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { selectorItems } from '../../store/ducks/items/selector'
import { ItemsTypes } from '../../store/ducks/items/types'
import { selectorPagination } from '../../store/ducks/pagination/selector'
import { PaginationTypes } from '../../store/ducks/pagination/types'
import { selectorPriceFilter } from '../../store/ducks/pricesFilter/selector'

import { 
    ContainerPagination,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'


export const Pagination: FunctionComponent = () => {

    const { numItems, currentPage, totalPages } = selectorPagination()
    const { min, max } = selectorPriceFilter()

    const dispatch = useDispatch()

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function visible(idx:number){
        if(idx === 1 || (idx) === totalPages) return true;
        if(idx > (currentPage - 2) && idx < (currentPage + 2)) return true;
        return false;
    }

    function EllipsisFinal(idx:number){
        if(idx===totalPages)
            return currentPage < (idx - 2)
        return false
    }

    function EllipsisBegin(idx:number){
        if(idx === 1)
            return currentPage > (idx + 2)
        return false
    }

    function handleButton(idx: number){
        scrollToTop()
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: idx })
        if(min === 0 && max === 999999){
            dispatch({
                type: ItemsTypes.REQUEST_ITEMS, 
                payload: {
                  pageAtual: idx,
                  
                }
            }) 
        }else{
            dispatch({
                type: ItemsTypes.REQUEST_ITEMS, 
                payload: {
                    pageAtual: idx,
                    filter:{
                        min: min,
                        max: max
                    },
                    
                }
            }) 
        }
    }

    return(
        <ContainerPagination numeroItems={numItems}>
            <Buttons>
                {currentPage !== 1 && <ButtonPass id="ButtonBackPage" onClick={()=>handleButton(currentPage-1)}>{'<< '}Anterior</ButtonPass>}
                {[...Array(totalPages)].map((pages, idx) => {
                    return(
                        visible(idx+1) && 
                        <div key={idx+1}>
                            {EllipsisFinal(idx+1) && <span>...</span>}
                            <ButtonPag 
                                onClick={()=>handleButton(idx+1)}
                                Selected={idx+1 === currentPage}
                                Next={idx+1 === currentPage+1}
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