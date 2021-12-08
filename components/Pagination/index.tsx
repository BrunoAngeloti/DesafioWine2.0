import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { PaginationTypes } from '../../store/ducks/pagination/types'

import { 
    ContainerPagination,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'


export const Pagination: FunctionComponent = () => {
    const [numPage, setNumPage] = useState<number>(0)
    const [page, setPage] = useState<number>(0);

    const { itemsPerPage, numItems } = useSelector((state: ApplicationState)=>state.pagination);
    const { max } = useSelector((state: ApplicationState)=>state.pricesFilter);

    const dispatch = useDispatch()

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        setNumPage(Math.ceil(numItems/itemsPerPage));
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: page })
        scrollToTop()
    },[page, numItems])

    useEffect(()=>{
        setPage(0)
    },[max])
    
    function visible(idx:number){
        if(idx === 0 || (idx+1) === numPage) return true;
        if(idx > (page - 2) && idx < (page + 2)) return true;
        return false;
    }

    function EllipsisFinal(idx:number){
        if(idx===numPage-1)
            return page < (idx - 2)
        return false
    }

    function EllipsisBegin(idx:number){
        if(idx === 0)
            return page > (idx + 2)
        return false
    }

    return(
        <ContainerPagination numeroItems={numItems}>
            <Buttons>
                {page !== 0 && <ButtonPass onClick={()=>setPage(page-1)}>{'<< '}Anterior</ButtonPass>}
                {[...Array(numPage)].map((pages, idx) => {
                    return(
                        visible(idx) && 
                        <div key={idx}>
                            {EllipsisFinal(idx) && <span>...</span>}
                            <ButtonPag 
                                onClick={()=>setPage(idx)}
                                Selected={idx === page}
                                Next={idx === page+1}
                            >
                                {idx+1}
                            </ButtonPag>
                            {EllipsisBegin(idx) && <span>...</span>}
                        </div>
                    )
                })}
                {(page+1) !== numPage && <ButtonPass onClick={()=>setPage(page+1)}>Próximo{' >>'}</ButtonPass>}
            </Buttons>
        </ContainerPagination>  
    )
    
}