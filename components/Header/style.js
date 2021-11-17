import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    
    z-index: 2;
    height: 100px;
    box-shadow: 0px 3px 2px rgba(0, 0, 0,0.25);
`

export const ContentHeader = styled.div`
    max-width: 1281px;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100%;
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    height:100%;
    margin: 0;

    img {
        width: 100px;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 40px;
        height:100% !important;
    }
`

export const Button = styled.button`
    display: flex ;
    background-color:transparent;
    border: none;
    height:100% !important;
    align-items: center;
    color: rgba(85, 85, 85, 1);

    ${props => props.selected &&`
        border-bottom: 2px solid rgba(209, 75, 143, 1);
        color: rgba(209, 75, 143, 1);
    `}
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    img{
        width: 60px;
    }
`

export const ShoppingCart = styled.div`
    display: flex;
    span{
        background-color:white;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:50%;
        align-self: flex-end;
        transform: translateX(-25px);
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
        color: rgba(79, 191, 165, 1);
        font-weight:700;
    }
`
