import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

import { 
    ContainerPagination,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'

import { ItemsTypes, selectorPagination, PaginationTypes, selectorPriceFilter } from '../../Data/Redux/ducks'
import { valueFilter1, valueFilter7 } from '../../Shared/utils/index'

interface IPayload{
    pageAtual: number;
    filter?:  { 
        min: number;
        max: number;
    }
}

export const Pagination = () => {

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

    function handleDispatchItems(payload: IPayload){
        dispatch({
          type: ItemsTypes.REQUEST_ITEMS, 
          payload
        })
    }

    function visible(idx: number){
        return (idx === 1 || (idx) === totalPages) || (idx > (currentPage - 2) && idx < (currentPage + 2));
    }

    function ellipsisFinal(idx: number){
       return (idx === totalPages) && currentPage < (idx - 2)
 
    }

    function ellipsisBegin(idx: number){
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
                filter: { min, max } 
            })
        }
        router.push(`/?pagina=${idx}`)
    }

    return(
        <ContainerPagination numberItems={numItems}>
            <Buttons>
                {currentPage !== 1 && <ButtonPass id="ButtonBackPage" onClick={() => handleButton(currentPage - 1)}>{'<< '}Anterior</ButtonPass>}
                {[...Array(totalPages)].map((_, idx) => {
                    const idxPlusOne = idx + 1;
                    return(
                        visible(idxPlusOne) && 
                        <div key={idxPlusOne}>
                            {ellipsisFinal(idxPlusOne) && <span>...</span>}
                            <ButtonPag 
                                onClick={() => handleButton(idxPlusOne)}
                                selected={idxPlusOne === currentPage}
                                next={idxPlusOne === currentPage + 1}
                                id={`ButtonPage${idxPlusOne}`}
                            >
                                {idxPlusOne}
                            </ButtonPag>
                            {ellipsisBegin(idxPlusOne) && <span>...</span>}
                        </div>
                    ) 
                })}
                {(currentPage) !== totalPages && <ButtonPass id="ButtonPassPage" onClick={() => handleButton(currentPage + 1)}>Próximo{' >>'}</ButtonPass>}
            </Buttons>
        </ContainerPagination>  
    )
    
}