import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { ItemsTypes } from '../../store/ducks/items/types'
import { PaginationTypes } from '../../store/ducks/pagination/types'
import { selectorPriceFilter } from '../../store/ducks/pricesFilter/selector'
import { PriceFilterTypes } from '../../store/ducks/pricesFilter/types'

import { Filter } from './style'

import { valueFilter1, valueFilter2, valueFilter3, valueFilter4, valueFilter5, valueFilter6, valueFilter7} from '../../utils/constants/filter'

const dataFilter = [
    { 
        min: valueFilter1, 
        max: valueFilter2,
    }, 
    { 
        min: valueFilter2, 
        max: valueFilter3,
    }, 
    { 
        min: valueFilter3, 
        max: valueFilter4,
    },
    { 
        min: valueFilter4, 
        max: valueFilter5,
    }, 
    { 
        min: valueFilter5, 
        max: valueFilter6,
    }, 
    { 
        min: valueFilter6, 
        max: valueFilter7,
    }
]


export const PriceFilter: FunctionComponent = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { min, max } = selectorPriceFilter();

    function handleChangeFilter(minimo:number, maximo:number){  
        
        dispatch({ type: PaginationTypes.CHANGE_CURRENT_PAGE, payload: 1 })
        dispatch({ type: ItemsTypes.SET_ITEMS, payload: {pageAtual: 1, wines: []}})
        
        if(min === valueFilter1 && max === valueFilter7) {
            dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: minimo, max: maximo} })
            dispatch({ type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: minimo, max:maximo}, pageAtual:1}})

        }else{
            if(min === minimo){
                
                dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: valueFilter1, max: valueFilter7} })
                dispatch({ type: ItemsTypes.REQUEST_ITEMS, payload: {pageAtual:1}})

            }else{
                dispatch({ type: PriceFilterTypes.CHANGE_PRICE_FILTER, payload: {min: minimo, max: maximo} })
                dispatch({ type: ItemsTypes.REQUEST_ITEMS, payload: {filter:{min: minimo, max:maximo}, pageAtual:1}})

            }
        }   
        router.push(`/?pagina=1`)          
    }

    const returnButtonsFilter = () => { 
        return (
            dataFilter.map(data => 
                <div>
                    <input 
                        checked={min === data.min && max === data.max}
                        onClick={() => handleChangeFilter(data.min,data.max)} 
                        type="radio" id={`filter${data.max}`} value="option1" readOnly 
                    />
                    <label htmlFor={`filter${data.max}`}>
                        {data.max === valueFilter2 ? 'Até R$40' : data.max === valueFilter7 ? 'Acima de $500' : `R$${data.min} A R$${data.max}`}
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