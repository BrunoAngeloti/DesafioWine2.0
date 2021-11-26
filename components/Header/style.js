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
    @media(max-width: 420px){
        justify-content: space-evenly; 
        gap: 20px;
    }
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    height:100%;
    margin: 0;
    
    img {
        width: 100px;
        @media(max-width: 420px){
             width: 60px;  
        }
        &:first-child{
            width: 30px;
            display: none;
            @media(max-width: 1020px){
                display: flex;
            }
            @media(max-width: 420px){
                width: 20px;  
            }
        }
    }
    @media(max-width: 1020px){
        gap: 30px;
    }
    @media(max-width: 420px){
        gap: 20px; 
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 40px;
        height:100% !important;
        @media(max-width: 1020px){
            display: none;
        }
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
        cursor: pointer;
    `}
    @media(max-width: 1020px){
        width: 80%;
        height:70px !important;
        justify-content:center;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    
    img{
        width: 60px;   
        @media(max-width: 420px){
            width: 50px;  
        }
    }
    @media(max-width: 1020px){
        gap: 20px;
        margin-left: 20px;
    }
   
    
`
export const Profile = styled.img`
    @media(max-width: 1020px){
        display: none;
    }
`

export const MenuMobile = styled.div`
    height: 100vh;
    width: 320px;
    background-color:white;
    position:fixed;
    left: -320px;
    z-index: 4;
    display: flex;
    transition: 0.4s;
    box-shadow: 4px 0px 5px rgba(0, 0, 0,0.25);
    padding: 20px;
    img{
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px;
        width: 32px;
    }
    div{
        display: flex;
        justify-content: center;
        flex-direction:column;
        align-items: center;
        img{
            width: 64px;
            position: relative;
        }
        width:100%;
    }
    @media(max-width: 1020px){
        display: flex;
    }
    ${props => props.show &&`
        left: 0px;
    `}
`

export const BackgroundMobile = styled.div`
    display: none;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
    background-color: rgba(0,0,0,0.5);
    transition: 0.4s;
    ${props => props.show &&`
        display: flex;
    `}
    overflow-y: hidden;
`