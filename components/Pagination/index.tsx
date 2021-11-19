import React, { FunctionComponent, useEffect, useState } from 'react'
import { Interface } from 'readline'

import { 
    ContainerPagination,
    Vinhos,
    Buttons,
    ButtonPag
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

    useEffect(()=>{
        setNumPage(Math.round(numItems/ItemsPerPage));
        setlimitedWines(ArrayTeste.slice(ItemsPerPage*page, ItemsPerPage*(page+1)));
    },[page])

    async function changeToPage(num:number){
        setPage(num);
        //setlimitedCampus(campus.slice(nRows*newPage, nRows*(newPage+1)))        
    }
    async function changePageToPage(num:number){
        const newPage = page+num;
        setPage(newPage);
        //setlimitedCampus(campus.slice(nRows*newPage, nRows*(newPage+1)))        
    }


    return(
        <ContainerPagination>
            <Vinhos>
                {limitedWines.map(vinho => {
                    return(
                        <div>
                            <h1>{vinho.name}</h1>
                            <h2>{vinho.price}</h2>
                        </div>
                    )
                })}
            </Vinhos>
            <Buttons>
                {page !== 0 && <button onClick={()=>changePageToPage(-1)}>Anterior</button>}
                {
                    [...Array(numPage)].map((pages, idx) => {
                        return(
                            <ButtonPag 
                                onClick={()=>changeToPage(idx)}
                                Selected={idx === page}
                                Next={idx === page+1}
                            >
                                {idx+1}
                            </ButtonPag>
                        )
                    })
                }
                {(page+1) !== numPage && <button onClick={()=>changePageToPage(1)}>Proximo</button>}
            </Buttons>
            pagina atual = {page+1}
        </ContainerPagination>  
    )
    
}