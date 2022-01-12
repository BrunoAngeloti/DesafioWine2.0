import styled from 'styled-components'

export const ContainerCart = styled.div`
    display: flex;
    cursor: pointer;
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

export const MenuCart = styled.div`
    height: 100%;
    width: 350px;
    background-color: white;
    position: fixed;
    right: -360px;
    flex-direction: column;
    z-index: 4;
    display: flex;
    transition: 0.4s;
    box-shadow: -4px 0px 5px rgba(0, 0, 0,0.25);
    top:0;
      
    ${props => props.show &&`
        right: 0px;
    `}

    @media(max-width: 500px){
        width: 320px;   
    }
`
export const HeaderMenuCart = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    padding: 3px;
    img{
        margin: 20px;
        width: 32px;
        cursor: pointer;
    }
    h4{
        margin: 0;
        font-weight: 500;
        font-size: 1.3rem;
    }
`

export const ContentMenuCart = styled.section`
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100%;
`

export const FooterMenuCart = styled.footer`
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 10px 20px;
`
export const TopSideFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    div:first-child{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5rem;
        h4{
            color: #666;
            margin: 0;
        }
        span{
            color: #B6116E;
            font-weight: 600;
            font-size: 1.5rem;
        }
    }
    p{
        display: flex;
        background-color: #E5F2D9;
        font-size: 0.8rem;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        gap: 4px;
        margin: 15px 0px 0px 0px;
        strong{
            font-weight: 500;
        }
    }
    span:last-child{
        margin: 0;
        font-size: 0.7rem;
        color: #9797BA;
    }
`
export const BotSideFooter = styled.div`
    display: flex;
    border-top: 1px solid #ddd;
    padding: 20px 0px 10px 0px;
    
    button{
        background-color: #7EBC43;
        width: 100%;
        color: white;
        border: none;
        height: 50px;
        border-radius: 5px;
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
    }
`

export const BackgroundCart = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
    right: 0;
    
    top:0;
    background-color: rgba(0,0,0,0.5);
    transition: 0.4s;
    ${props => props.show &&`
        display: flex;
    `}
`

export const NotBuyYet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color:#F5F5F5;
    h1{
        color: #C0C0C0;
        margin: 0;
    }
    h2{
        color: #1D1D1B;
        margin: 0;
    }
`