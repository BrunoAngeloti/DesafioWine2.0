import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 260px;

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
        background: #7EBC43;
        box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
        border-radius: 3.89354px;
        border: none;
        padding: 11.6806px 23.3612px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 0.9rem;
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
    background-color:white;
    flex-direction: column;
    align-items: center;
    padding: 15px 5px;
    cursor: pointer;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    @media(max-width: 470px){
        img{
            width: 100%;
        }
    }
    h1{
        font-size: 1rem;
        color: #1D1D1B;
        text-align: center;
        @media(max-width: 470px){
            font-size: 0.8rem;
        }
        @media(max-width: 350px){
            font-size: 0.7rem;
        }
    }
    

`

export const Discount = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 10px;
    p{
        margin: 0;
        text-decoration: line-through;
        color: #888888;
        font-weight: bold;
        @media(max-width: 400px){
            font-size: 0.8rem;
        }
        @media(max-width: 350px){
            font-size: 0.7rem;
        }
    }
    span{
        background: #F79552;
        border-radius: 1.94677px;
        padding: 2px 5px;
        font-weight: bold;
        color: white;
        font-size:0.8rem;
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
`

export const Member = styled.p`
    color: #1D1D1B;
    font-weight: bold;
    font-size: 0.9rem;

    strong{
        color: #B6116E;

        span{
            font-size: 1.8rem;
            @media(max-width: 470px){
                font-size: 1.6rem;
            }
            @media(max-width: 400px){
                font-size: 1.4rem;
            }
            @media(max-width: 350px){
                font-size: 1.2rem;
            }
        }
    }
    @media(max-width: 470px){
        font-size: 0.7rem;
    }
    @media(max-width: 400px){
        font-size: 0.6rem;
    }
    @media(max-width: 350px){
        font-size: 0.5rem;
    }
`

export const NotMember = styled.p`
    color: #888888;
    font-weight: 600;
    margin:0;
    @media(max-width: 470px){
        font-size: 0.8rem;
    }
    @media(max-width: 350px){
        font-size: 0.6rem;
    }
`