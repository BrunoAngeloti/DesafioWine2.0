import React, { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { ItemsTypes } from '../../store/ducks/items/types'
import { PaginationTypes } from '../../store/ducks/pagination/types'
import { PriceFilterTypes } from '../../store/ducks/pricesFilter/types'

import { Filter } from './style'


export const PriceFilter: FunctionComponent = () => {
    const dispatch = useDispatch()

    const { min, max } = useSelector((state: ApplicationState)=>state.pricesFilter);

    function handleChangeFilter(minimo:number, maximo:number){  
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: 0 })
        if(min === 0 && max === 0) {
            dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: minimo, max: maximo} })
            dispatch({type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: minimo, max:maximo}, pageAtual:1}})

        }else{
            if(min === minimo){
                dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: 0, max: 0} })
                dispatch({type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: 0, max:1000}, pageAtual:1}})

            }else{
                dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: minimo, max: maximo} })
                dispatch({type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: minimo, max:maximo}, pageAtual:1}})

            }
        }             
    }

    return(       
        <Filter>
            <div>
                <input readOnly checked={min === 0 && max===40} onClick={() => handleChangeFilter(0,40)} type="radio" id="40" value="option1"/>
                <label htmlFor="40">Até R$40</label>
            </div>
            <div>
                <input readOnly checked={min === 40} onClick={() => handleChangeFilter(40,60)} type="radio" id="60" value="option2"/>
                <label htmlFor="60">R$40 A R$60</label>
            </div>
            <div>
                <input readOnly checked={min === 60} onClick={() => handleChangeFilter(60,100)} type="radio" id="80" value="option3"/>
                <label htmlFor="80">R$60 A R$100</label>
            </div>
            <div>
                <input readOnly checked={min === 100} onClick={() => handleChangeFilter(100,200)} type="radio" id="100" value="option4"/>
                <label htmlFor="100">R$100 A R$200</label>
            </div>
            <div>
                <input readOnly checked={min === 200} onClick={() => handleChangeFilter(200,500)} type="radio" id="200" value="option5"/>
                <label htmlFor="200">R$200 A R$500</label>
            </div>
            <div>
                <input readOnly checked={min === 500} onClick={() => handleChangeFilter(500,9999999)} type="radio" id="500" value="option6"/>
                <label htmlFor="500">Acima de R$500</label>
            </div>
        </Filter>                 
    )  
}