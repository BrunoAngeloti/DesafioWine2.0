import styled from 'styled-components'

export const ContainerPagination = styled.div<{ numberItems?: number }>`
    display: ${props => props.numberItems === 0 ? "none" : "flex"};;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        span{
            display: flex;
            align-items: center;
            color: #B6116E;
        }
    }
    
`

export const ButtonPag = styled.button<{ next?: boolean, selected?: boolean }>`
    width: ${props => props.next ? "80px" : "40px"};
    height: 40px;
    border: 2px solid #B6116E;
    color: ${props => props.selected ? "white" : "#B6116E"};
    border-radius: 3px;
    background-color: ${props => props.selected ? "#B6116E" : "transparent"};
    cursor: pointer;
    &:hover{
        background-color: #E43FA0;
        border-color: #E43FA0;
        color: #FFF;
    }
    @media (max-width: 360px){
        height: 30px;
        width: ${props => props.next ? "60px" : "30px"};
    }
`

export const ButtonPass = styled.button`  
    color: #B6116E;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 420px){
        display: none;
    }
`

