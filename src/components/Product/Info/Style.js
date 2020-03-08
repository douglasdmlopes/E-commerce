import styled from 'styled-components';
import { Rate, Input } from 'antd';

export const NomeProduto = styled.h1`

    color: #2b2b2b;
    font-size: 28px;
    margin: 0px;
    
`;

export const NomeEmpresa = styled.h2`

    color: #4c4c4c;
    font-size: 14px;
    span {
        font-weight: bold;
    }
    margin-bottom: 0px;
`;

export const Estrelas = styled(Rate)`
    i {
        font-size: 14px;
    }
    ul{
        font-size: 14px !important;
    }
    li{
        margin-right: 3px !important;
    }
`;

export const Frete = styled(Input)`
    button{
        background-color: green !important;
    }
`;