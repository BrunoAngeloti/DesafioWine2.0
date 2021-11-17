import styled from 'styled-components'

export const ContainerWineInfo = styled.div`
    max-width: 1281px;
    display: flex;
    margin: 40px auto;
    width: 100%;
    padding: 0px 50px;
    height: 100%;
    flex-direction: column;
    

    header{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        span{
            font-size:1.2rem;
            font-weight:600;
            align-items: center;
        }
    }
`

export const ContentWineInfo = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const LeftContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color:aqua;
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color:red;
`