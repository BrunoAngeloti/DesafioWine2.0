import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { ItemsTypes, PaginationTypes, selectorPriceFilter, PriceFilterTypes } from '../../store/ducks'

import { Filter } from './style'

import { valueFilter1, valueFilter7} from '../../utils'
import { dataFilter } from '../../helper/filter'


export const PriceFilter: FunctionComponent = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { min, max } = selectorPriceFilter();

    function handleChangeFilter(minimum:number, maximum:number){  
        
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: 1 })
        dispatch({ type: ItemsTypes.SET_ITEMS, payload: {pageAtual: 1, wines: []}})
        
        if((min === valueFilter1 && max === valueFilter7) || min !== minimum) {
            dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: minimum, max: maximum} })
            dispatch({ type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: minimum, max:maximum}, pageAtual:1}})

        }else{  
            dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: valueFilter1, max: valueFilter7} })
            dispatch({ type: ItemsTypes.REQUEST_ITEMS, payload: {pageAtual:1}})
        }   
        
        router.push(`/?pagina=1`)          
    }

    const returnButtonsFilter = () => { 
        return (
            dataFilter.map(data => 
                <div key={data.min}>
                    <input 
                        checked={min === data.min && max === data.max}
                        onClick={() => handleChangeFilter(data.min,data.max)} 
                        type="radio" id={`filter${data.max}`} value="option1" readOnly 
                    />
                    <label htmlFor={`filter${data.max}`}>
                        {data.min === valueFilter1 ? 'Até R$40' : data.max === valueFilter7 ? 'Acima de $500' : `R$${data.min} A R$${data.max}`}
                    </label>
                </div>
            )
        )
    }

    return(       
        <Filter>
            {returnButtonsFilter()}
        </Filter>                 
    )  
}