import styled from 'styled-components'

export const Filter = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        input{
            cursor: pointer;
            height: 16px;
            width: 16px;
        }
        label{
            color: #1D1D1B;
            font-family: 'Lato-Regular';
            cursor: pointer;
            font-size: 14px;
            line-height: 17px;
        }
    }
`