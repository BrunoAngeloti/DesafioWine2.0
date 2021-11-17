import styled from 'styled-components'

export const ContentHome = styled.div`
    max-width: 1281px;
    display: flex;
    margin: 40px auto;
    width: 100%;
    padding: 0px 50px;
    height: 100%;
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
`

export const Filter = styled.div`
    display: flex;
    flex-direction:column;
    gap: 25px;

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;

        label{
            color: #1D1D1B;
            font-weight:500;
        }
    }
`