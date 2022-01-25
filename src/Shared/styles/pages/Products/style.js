import styled from 'styled-components'

const flexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerWineInfo = styled(flexColumn)`
    max-width: 1281px;
    margin: 40px auto;
    width: 100%;
    padding: 0px 50px;
    height: 100%;
    
    header{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        align-self: flex-start;
        cursor: pointer;
        span{
            font-size: 1.2rem;
            font-weight: 600;
            align-items: center;
        }
        @media(max-width: 1020px){
            display: none;
        }
    }
    @media(max-width: 1020px){
        margin: 10px auto;
        margin-bottom: 140px;
    }
    
`

export const ContentWineInfo = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 30px;
    @media(max-width: 1020px){
        margin-top: 0px;
        padding: 0;
    }
    
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-content: center;
    img{
        width: 70%;
    }
    @media(max-width: 1210px){
        width: 40%;
    }
    @media(max-width: 1020px){
        display: none;
    }
`

export const RightContent = styled(flexColumn)`
    width: 50%;
    
    h4{
        color: #C81A78;
        font-weight: 600;
    }
    h4:last-child{
        color: #888888;
    }

    > img{
        display: none;
        @media(max-width: 1020px){
            display: flex;
            width: 300px;
            margin: 20px 0px 20px 0px;
        }
        @media(max-width: 560px){
            width: 200px;
            margin: 20px 0px 5px 0px;
        }
    }
    @media(max-width: 1210px){
        width: 60%;
    }
    @media(max-width: 1020px){
        width: 100%;
        align-items: center;
    }
`

export const LocationWine = styled.span`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const DetailsWine = styled(flexColumn)` 
    h1{
        color: #111111;
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
        @media(max-width: 1020px){
            text-align: center;
        }  
    }

    div{
        color: #555555;
        display: flex;
        align-items: center;
        flex-direction: row;
        font-weight: 400;
        img{
            width: 20px;
        }
        p{
            margin:0px 8px 0px 8px;
            @media(max-width: 1020px){
                &:last-child{display:none}
            }         
        }
        div{
            @media(max-width: 1020px){
                display: none;
            }
        }
        @media(max-width: 1020px){
            margin-top: 10px;
            align-items: center;
            justify-content: center;
        }
    }

    
`

export const PriceWine = styled(flexColumn)`
    margin-top: 50px;
    h2{
        margin:0;
        color: #C81A78;
        font-weight: 700;
        font-size: 2.5rem;
        span{
            font-size: 1.4rem;

            &:last-child{
                font-size:1.8rem;
            }
        }
    }

    h3{
        color: #888;
        margin: 0;
        font-weight: 500;
    }
    @media(max-width: 1020px){
        display: none;
    }

`

export const CommentsWine = styled(flexColumn)`
    gap: 15px;
    margin-top: 50px;

    h3{
        margin: 0;
        color: #111111;
        @media(max-width: 1020px){
            content: '';
        }
    }

    p{
        margin: 0;
        color: #666666;
        text-align: justify;
    }
`

export const AddOnCart = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    flex-direction: row;
    background-color: red;
    background: #7EBC43;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    width: 300px;
    height: 55px;
    justify-content: space-evenly;
    div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        color: white;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 50%;
        button{
            border: 1px solid rgba(255, 255, 255, 0.4);
            width: 20px;
            color: white;
            background-color: transparent;
            height: 20px;
            align-items: center;
            justify-content: center;
            display: flex;
            border-radius: 50%;
            cursor: pointer;
        }
        span{
            font-size: 1.2rem;
        }
    }
    @media(max-width: 1020px){
        display: none;
    }
    
`

export const Button = styled.button`
    background: #7EBC43;
    border: none;
    color: white;
    font-size:1.2rem;
    height: 80%;
    cursor: pointer;
    border-left: 0.5px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    width: 50%;
`
export const FooterMobile = styled.footer`
    display: none;
    position: fixed;    
    background: #FFF;
    box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
    bottom: 0;
    width: 100%;
    left: 0;
    height: 120px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    section{
        margin-right: 15px;
        h2{
            margin: 0;
            text-decoration: line-through;
            color: #555555;
            font-size: 1rem;
            font-weight: bold;
            @media(max-width: 435px){
                font-size: 0.8rem;
            } 
        }
        h1{
            margin: 0;
            color: #C81A78;
            font-size: 1.2rem;

            strong{
                font-size: 1.8rem;
                @media(max-width: 435px){
                    font-size: 1.6rem;
                } 
            }
            @media(max-width: 435px){
                font-size: 1.0rem;
            } 
        }
        h3{
            margin:0;
            color: #555555;
            font-weight: 600;
            font-size: 0.8rem;  
            @media(max-width: 435px){
                font-size: 0.7rem;
            }        
        }
        span{
            background: #F26649;
            width: 70px;
            position: absolute;
            transform: translateY(-30px);
            border-radius: 2px;
            padding: 2px 5px;
            font-weight: bold;
            color: white;
            font-size:0.8rem;
            display: flex;
            margin: 0;
            align-items: center;
            justify-content: center;
        }
    }

    @media(max-width: 1020px){
        display: flex;
    } 
`
