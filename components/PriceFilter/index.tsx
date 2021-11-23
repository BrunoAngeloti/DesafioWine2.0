import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { Filter } from './style'

export const PriceFilter: FunctionComponent = () => {
    const dispatch = useDispatch()

    function handleChangeFilter(min:number, max:number){
        console.log(min);
        console.log(max)
        dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
    }

    return(       
        <Filter>
            <div>
                <input onClick={() => handleChangeFilter(0,40)} type="radio" id="40" value="40"/>
                <label htmlFor="40">Até R$40</label>
            </div>
            <div>
                <input onClick={() => handleChangeFilter(40,60)} type="radio" id="60" value="60"/>
                <label htmlFor="60">R$40 A R$60</label>
            </div>
            <div>
                <input onClick={() => handleChangeFilter(60,100)} type="radio" id="80" value="80"/>
                <label htmlFor="80">R$60 A R$100</label>
            </div>
            <div>
                <input onClick={() => handleChangeFilter(100,200)} type="radio" id="100" value="100"/>
                <label htmlFor="100">R$100 A R$200</label>
            </div>
            <div>
                <input onClick={() => handleChangeFilter(200,500)} type="radio" id="200" value="200"/>
                <label htmlFor="200">R$200 A R$500</label>
            </div>
            <div>
                <input onClick={() => handleChangeFilter(500,9999999)} type="radio" id="500" value="500"/>
                <label htmlFor="500">Acima de R$500</label>
            </div>
        </Filter>                 
    )  
}