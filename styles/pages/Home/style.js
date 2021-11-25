import styled from 'styled-components'

export const ContentHome = styled.div`
    max-width: 1281px;
    display: flex;
    margin: 40px auto;
    width: 100%;
    padding: 0px 50px;
    height: 100%;

    @media(max-width: 552px){
        padding: 0px 10px;
    }
`

export const Search = styled.div`
    display: flex;
    width: 20%;
    flex-direction:column;
    height: 100%;
    padding: 0;
    h2{
        color: #000000;
        font-weight: 700;
        margin: 0;
    }
    h3{
        color: #333333;
        font-weight: 600;
    }

    @media(max-width: 900px){
        display: none;
    }
`

export const Items = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    padding: 0;
    padding: 0px 40px;
    h3{
        color: #262626;
        font-weight: 600;
        margin: 5px 10px 25px 10px;
        @media(max-width: 900px){
            padding: 10px 0px 10px 0px;
            border-bottom: 1px solid #D5D5D5;
            box-sizing: border-box;
        }
    }
    @media(max-width: 900px){
        width: 100%;
    }
    @media(max-width: 610px){
        padding: 0px 10px;
    }
`

export const Wines = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    @media(max-width: 470px){
        gap: 20px;
    }
    @media(max-width: 400px){
        gap: 5px;
    }
    
`