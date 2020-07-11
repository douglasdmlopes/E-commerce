import styled from 'styled-components';
import { Rate } from 'antd';

export const Estrelas = styled(Rate)`
    i {
        font-size: 35px;
    }
    ul{
        font-size: 35px !important;
    }
    li{
        margin-right: 3px !important;
    }
    margin-left: 10px !important;
`;

export const Avaliacao = styled.h1`
    float: left;
    font-size: 35px;
    margin-top: -5px;
`;
export const Texto = styled.h1`
    text-align: center;
    font-size: 25px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
`;