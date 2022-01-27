import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 256px;
    margin-bottom: 5px;
    
    @media(max-width: 730px){
        width: 200px;
    }
    @media(max-width: 470px){
        width: 160px;
    }
    @media(max-width: 400px){
        width: 140px;
    }
    @media(max-width: 350px){
        width: 115px;
    }
    button{
        height: 40px;
        background: #7EBC43;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        padding: 12px 24px;
        color: #FFF;
        font-family: 'Lato-Bold';
        font-size: 14px;
        cursor: pointer;
        transition: 0.4s;
        align-items: center;
        justify-content: center;
        display: flex;
        &:hover{
            filter:brightness(0.9);
        }
    }
`

export const ContentCard = styled.div`
    display: flex;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 20px 10px;
    cursor: pointer;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
 
    h1{
        font-size: 1rem;
        color: #1D1D1B;
        text-align: center;
        font-family: 'Lato-Bold';
        @media(max-width: 470px){
            font-size: 0.8rem;
        }
        @media(max-width: 350px){
            font-size: 0.7rem;
        }
        flex-grow: 1;
    }
    
`

export const Discount = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 10px;
    margin: 0;
    align-items: center;
    p{
        margin: 0;
        text-decoration: line-through;
        font-family: 'Lato-Bold';
        font-size: 0.8rem;
        color: #888;
        @media(max-width: 350px){
            font-size: 0.7rem;
        }
    }
    span{
        background: #F79552;
        border-radius: 2px;
        padding: 2px 5px;
        font-family: 'Lato-Bold';
        color: white;
        font-size: 0.8rem;
        @media(max-width: 400px){
            font-size: 0.7rem;
        }
        @media(max-width: 350px){
            font-size: 0.6rem;
        }
        display: flex;
        margin: 0;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 400px){
        flex-direction: column;
    }
`

export const Member = styled.p`
    margin: 15px 0px 2px 0px;
    color: #1D1D1B;
    display: flex;
    align-items: flex-start;
    gap: 5px;
    h2{
        font-family: 'Lato-Bold';
        font-size: 11px;
    }
    strong{
        font-family: 'Lato-Bold';
        font-size: 11px;
        color: #B6116E;
        line-height: 27px;
        span{
            font-size: 23px;
            @media(max-width: 470px){
                font-size: 20px;
            }
            @media(max-width: 350px){
                font-size: 1.2rem;
            }
        }
    }
    @media(max-width: 470px){
        font-size: 0.6rem;
    }
    @media(max-width: 400px){
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
    }
    @media(max-width: 350px){
        font-size: 0.5rem;      
    }
`

export const NotMember = styled.p`
    color: #888;
    font-family: 'Lato-Bold';
    margin: 0;
    font-size: 12px;
    
    @media(max-width: 400px){
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media(max-width: 350px){
        font-size: 0.6rem;
    }
`