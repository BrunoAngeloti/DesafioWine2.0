import styled from 'styled-components'
import Image from 'next/image'

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

export const ImageHamburger = styled.span`
     
    display: none;
    @media(max-width: 1020px){
        display: flex;
    }
  
`

export const ImageProfile = styled.span`  
    display: flex;
    @media(max-width: 1020px){
        display: none;
    }
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 83px;
    height: 100%;
    margin: 0;
    
    img {
        width: 100px;
        @media(max-width: 450px){
             width: 60px;  
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
        gap: 48px;
        height: 100% !important;
        @media(max-width: 1020px){
            display: none;
        }
    }
`

export const Button = styled.button<{ selected?: boolean }>`
    display: flex ;
    background-color: transparent;
    border: none;
    height: 100% !important;

    font-size:18px;
    font-family: 'NeoSansStd-Regular';

    align-items: center;
    color: rgba(85, 85, 85, 1);
    ${props => props.selected &&`
        border-bottom: 2px solid rgba(209, 75, 143, 1);
        color: rgba(209, 75, 143, 1);
        cursor: pointer;
    `}
    @media(max-width: 1020px){
        width: 80%;
        height: 70px !important;
        justify-content: center;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 42px;
       
    @media(max-width: 1020px){
        gap: 20px;
        margin-left: 20px;
    }  
`

export const MenuMobile = styled.div<{ show?: boolean}>`
    height: 100%;
    width: 320px;
    background-color: white;
    position: fixed;
    left: -330px;
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
        flex-direction: column;
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

export const BackgroundMobile = styled.div<{ show: boolean }>`
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