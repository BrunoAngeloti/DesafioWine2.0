import React, { FunctionComponent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Filter } from './style'

export const PriceFilter: FunctionComponent = () => {
    const dispatch = useDispatch()
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)

    function handleChangeFilter(min:number, max:number, selected:string){   
        if(selected === "1")  {
            if(!checked1){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(true)
                setChecked2(false)
                setChecked3(false)
                setChecked4(false)
                setChecked5(false)
                setChecked6(false)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked1(false)
            }
        }
        if(selected === "2")  {
            if(!checked2){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(false)
                setChecked2(true)
                setChecked3(false)
                setChecked4(false)
                setChecked5(false)
                setChecked6(false)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked2(false)
            }
        }
        if(selected === "3")  {
            if(!checked3){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(false)
                setChecked2(false)
                setChecked3(true)
                setChecked4(false)
                setChecked5(false)
                setChecked6(false)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked3(false)
            }
        }
        if(selected === "4")  {
            if(!checked4){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(false)
                setChecked2(false)
                setChecked3(false)
                setChecked4(true)
                setChecked5(false)
                setChecked6(false)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked4(false)
            }
        }
        if(selected === "5")  {
            if(!checked5){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(false)
                setChecked2(false)
                setChecked3(false)
                setChecked4(false)
                setChecked5(true)
                setChecked6(false)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked5(false)
            }
        }
        if(selected === "6")  {
            if(!checked6){
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: min, max: max} })
                setChecked1(false)
                setChecked2(false)
                setChecked3(false)
                setChecked4(false)
                setChecked5(false)
                setChecked6(true)
            }else{
                dispatch({ type: 'CHANGE_PRICE_FILTER', payload: {min: 0, max: 0} })
                setChecked6(false)
            }
        }      
    }

    return(       
        <Filter>
            <div>
                <input checked={checked1} onClick={() => handleChangeFilter(0,40, "1")} type="radio" id="40" value="40"/>
                <label htmlFor="40">Até R$40</label>
            </div>
            <div>
                <input checked={checked2} onClick={() => handleChangeFilter(40,60, "2")} type="radio" id="60" value="60"/>
                <label htmlFor="60">R$40 A R$60</label>
            </div>
            <div>
                <input checked={checked3} onClick={() => handleChangeFilter(60,100, "3")} type="radio" id="80" value="80"/>
                <label htmlFor="80">R$60 A R$100</label>
            </div>
            <div>
                <input checked={checked4} onClick={() => handleChangeFilter(100,200, "4")} type="radio" id="100" value="100"/>
                <label htmlFor="100">R$100 A R$200</label>
            </div>
            <div>
                <input checked={checked5} onClick={() => handleChangeFilter(200,500, "5")} type="radio" id="200" value="200"/>
                <label htmlFor="200">R$200 A R$500</label>
            </div>
            <div>
                <input checked={checked6} onClick={() => handleChangeFilter(500,9999999, "6")} type="radio" id="500" value="500"/>
                <label htmlFor="500">Acima de R$500</label>
            </div>
        </Filter>                 
    )  
}