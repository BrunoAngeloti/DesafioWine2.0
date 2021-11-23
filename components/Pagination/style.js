import styled from 'styled-components'

export const ContainerPagination = styled.div`
    display: ${props => props.numeroItems === 0 ? "none" : "flex"};;
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

export const ButtonPag = styled.button`
    transition: 0.4s;
    width: ${props => props.Next ? "80px" : "40px"};
    height: 40px;
    border: 2px solid #B6116E;
    color: ${props => props.Selected ? "white" : "#B6116E"};
    border-radius: 3px;
    background-color: ${props => props.Selected ? "#B6116E" : "transparent"};
    cursor: pointer;
`

export const ButtonPass = styled.button`  
    color: #B6116E;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

