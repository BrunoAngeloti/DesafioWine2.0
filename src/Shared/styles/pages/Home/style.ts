import styled from 'styled-components'

const flexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentHome = styled.div`
    max-width: 1281px;
    margin: 40px auto;
    display: flex;
    width: 100%;
    padding: 0px 50px;
    height: 100%;
    @media(max-width: 552px){
        padding: 0px 10px;
    }
`

export const Search = styled(flexColumn)`
    width: 20%;
    height: 100%;
    padding: 0;
    h2{
        color: #000000;
        font-family: 'NeoSansStd-Bold';
        font-size: 20px;
        line-height: 24px;
        margin: 0;
    }
    h3{
        margin-top: 32px;
        margin-bottom: 16px;
        color: #333333;
        font-family: 'Lato-Bold';
    }
    @media(max-width: 900px){
        display: none;
    }
`

export const Items = styled(flexColumn)`
    width: 80%;
    height: 100%;
    padding: 0;
    padding: 0px 40px;
    h3{
        color: #262626;
        margin: 0px 10px 25px 10px;
        font-family: 'Lato-Regular';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        span{
            font-family: 'Lato-Bold';
            
            color: #262626;
            font-size: 18px;
        }

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
    justify-content: center ;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 30px;
    @media(max-width: 470px){
        gap: 20px;
    }
    @media(max-width: 400px){
        gap: 5px;
    }
    
`