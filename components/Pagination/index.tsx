import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Interface } from 'readline'
import { RootState } from '../../store'

import { 
    ContainerPagination,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'


export const Pagination: FunctionComponent = () => {
    const [numPage, setNumPage] = useState<number>(0)
    const [page, setPage] = useState<number>(0);

    const { ItemsPerPage, numItems } = useSelector((state: RootState)=>state.pagination);

    const dispatch = useDispatch()

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        setNumPage(Math.ceil(numItems/ItemsPerPage));
        dispatch({ type: 'CHANGE_CURRENT_PAGE', payload: page })
        scrollToTop()

    },[page, numItems])

    async function changeToPage(num:number){
        setPage(num);       
    }
    async function changePageToPage(num:number){
        const newPage = page+num;
        setPage(newPage);       
    }

    function visible(idx:number){
        if(idx === 0 || (idx+1) === numPage) return true;
        if(idx > (page - 2) && idx < (page + 2)) return true;
        return false;
    }

    function EllipsisFinal(idx:number){
        if(idx===numPage-1)
            return page < (idx - 2) ?  true : false
        return
    }
    function EllipsisBegin(idx:number){
        if(idx === 0)
            return page > (idx + 2) ? true : false
        return
    }

    return(
        <ContainerPagination numeroItems={numItems}>
            <Buttons>
                {page !== 0 && <ButtonPass onClick={()=>changePageToPage(-1)}>{'<< '}Anterior</ButtonPass>}
                {
                    [...Array(numPage)].map((pages, idx) => {
                        return(
                            visible(idx) && 
                            <div key={idx}>
                                {EllipsisFinal(idx) && <span>...</span>}
                                <ButtonPag 
                                    onClick={()=>changeToPage(idx)}
                                    Selected={idx === page}
                                    Next={idx === page+1}
                                >
                                    {idx+1}
                                </ButtonPag>
                                {EllipsisBegin(idx) && <span>...</span>}
                            </div>
                        )
                    })
                }
                {(page+1) !== numPage && <ButtonPass onClick={()=>changePageToPage(1)}>Próximo{' >>'}</ButtonPass>}
            </Buttons>
        </ContainerPagination>  
    )
    
}