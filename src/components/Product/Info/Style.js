import styled from 'styled-components';
import { Rate/*, Input */} from 'antd';
import { Input } from 'semantic-ui-react'

export const NomeProduto = styled.h1`

    color: #353535;
    font-size: 25px;
    margin: 0px;
    font-family: Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
    
`;

export const NomeEmpresa = styled.h2`

    color: #4c4c4c;
    font-size: 14px;
    font-family: Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
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

export const FreteCalc = styled(Input)`
    width: 100% !important;
    border-radius: 6px !important;
    input{
        height: 40px;
    }
    button{
        height: 40px;
    }

    width: 100% !important;
    box-shadow: 0px 3px 4px -3px #6f6f6fba !important;

    &:hover{
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
    }
    &:active{
        box-shadow: 0px 3px 4px -3px #6f6f6fba !important;
    }
    &:focus{
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
    }

    input:focus {
        
        border-color: rgba(34,36,38,.15) !important;
        border-right-color: red !important;
        border-right: solid 0px red !important;
    }

    input:active{
        border-color: rgba(34,36,38,.15) !important;
        border-right-color: red !important;
        border-right: solid 0px red !important;
    }
`;

export const Divisoria = styled.div`
    height: 10px;
`;