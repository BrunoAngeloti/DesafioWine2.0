import styled from 'styled-components'

export const ContainerPagination = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Vinhos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: fixed;
    margin-top: 400px;
`

export const ButtonPag = styled.button`
    transition: 0.4s;
    width: ${props => props.Next ? "80px" : "40px"};
    height: 40px;
    border: 2px solid #B6116E;
    color: ${props => props.Selected ? "white" : "#B6116E"};
    border-radius: 3px;
    background-color: ${props => props.Selected ? "#B6116E" : "transparent"};
`