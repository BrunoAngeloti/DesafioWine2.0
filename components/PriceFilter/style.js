import styled from 'styled-components'

export const Filter = styled.form`
    display: flex;
    flex-direction:column;
    gap: 25px;

    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        input{
            cursor: pointer;
        }
        label{
            color: #1D1D1B;
            font-weight:500;
            cursor: pointer;
        }
    }
`