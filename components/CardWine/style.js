import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 260px;

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

    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

    h1{
        font-size: 1rem;
        color: #1D1D1B;
        text-align: center;
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
    }
    span{
        background: #F79552;
        border-radius: 1.94677px;
        padding: 2px 5px;
        font-weight: bold;
        color: white;
        font-size:0.8rem;
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
        }
    }
`

export const NotMember = styled.p`
    color: #888888;
    font-weight: 600;
    margin:0;
`