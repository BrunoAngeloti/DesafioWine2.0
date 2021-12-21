import React, { FunctionComponent } from 'react'

import ReactLoading from "react-loading";
import { ContainerLoading } from './style'

export const Loading: FunctionComponent = () => {
    return(
        <ContainerLoading>
            <ReactLoading type="spin" color="#B6116E" height={80} width={80}/>
        </ContainerLoading>  
    )
}