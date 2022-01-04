import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    height: 160px;
    background-color: #F5F5F5;
    border-bottom: 1px solid #ddd;
    padding: 16px;
    gap: 5px;
`

export const LeftContent = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
    img{
        width: 100%;
        height: 100%;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-direction:column;
    width: 70%;
`

export const HeaderCardWine = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-grow: 1;
    
    div:first-child{
        width: 80%;
        h4{
            margin: 0;
            font-weight: 400;
            font-size: 0.9rem;
            color:#333333;
        }
        span{
            color: #B5B5B5;
            font-size: 0.8rem;
        }
    }
    div:last-child{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img{
            width: 22px;
            cursor: pointer;
        }
    }
`

export const FooterCardWine = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const AddMoreToCart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #BFBFBF;
    height: 100%;
    gap: 5px;
    padding: 8px 5px;
    border-radius: 5px;

    button{
        border: none;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        display: flex;
        color: #888;
        cursor: pointer;
    }
`

export const Price = styled.div`
    color: #1D1D1B;
    font-weight: bold;
    font-size: 0.7rem;
    
    strong{
        color: #B6116E;
        span{
            font-size: 1.5rem;
        }
    }
`