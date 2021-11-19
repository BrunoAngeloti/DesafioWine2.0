import React, { FunctionComponent, useEffect, useState } from 'react'
import { Interface } from 'readline'

import { 
    ContainerPagination,
    Vinhos,
    Buttons,
    ButtonPag,
    ButtonPass
} from './style'

interface Teste {
    name: string;
    price: number
}
  

export const Pagination: FunctionComponent = () => {
    const [numPage, setNumPage] = useState<number>(0)
    const [page, setPage] = useState<number>(0);
    const numItems = 62;
    const ItemsPerPage = 4;

    const teste = {     
        name: 'vinho tinto',
        price: 15000        
    }
    const teste2 = {     
        name: 'vinho seco',
        price: 6        
    }

    const ArrayTeste = [teste, teste, teste, teste2, teste2, teste, teste, teste, teste, teste2, teste2]

    const [limitedWines, setlimitedWines] = useState <Array<Teste>>([]);

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        setNumPage(Math.round(numItems/ItemsPerPage));
        setlimitedWines(ArrayTeste.slice(ItemsPerPage*page, ItemsPerPage*(page+1)));
        scrollToTop()
    },[page])

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
        <ContainerPagination>
            {/*<Vinhos>
                {limitedWines.map(vinho => {
                    return(
                        <div>
                            <h1>{vinho.name}</h1>
                            <h2>{vinho.price}</h2>
                        </div>
                    )
                })}
            </Vinhos>*/}
            <Buttons>
                {page !== 0 && <ButtonPass onClick={()=>changePageToPage(-1)}>{'<< '}Anterior</ButtonPass>}
                {
                    [...Array(numPage)].map((pages, idx) => {
                        return(
                            visible(idx) && 
                            <>
                                {EllipsisFinal(idx) && <span>...</span>}
                                <ButtonPag 
                                    onClick={()=>changeToPage(idx)}
                                    Selected={idx === page}
                                    Next={idx === page+1}
                                >
                                    {idx+1}
                                </ButtonPag>
                                {EllipsisBegin(idx) && <span>...</span>}
                            </>
                        )
                    })
                }
                {(page+1) !== numPage && <ButtonPass onClick={()=>changePageToPage(1)}>Próximo{' >>'}</ButtonPass>}
            </Buttons>
        </ContainerPagination>  
    )
    
}