import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { RiCloseLine } from "react-icons/ri";

export const Cartao = styled.div`    margin-left: 5px;
    margin-top: 8px;
    width: 390px;
    background: #f5f5f5;
    border-radius: 3px;    
    border: 1px solid #e2e2e2;
    -webkit-box-shadow: 0px 3px 8px #e1e1e3, 0 9px 0px #ffffff;

`;

export const Picture = styled.img`
    width: 110px;
    border-radius: 3px;    
`;

export const Content = styled.div`
    width: 278px;
    float: right;
    height: 83px;
`; 

export const Description = styled.div`
    padding: 5px 7px;
    padding-bottom: 0px;
    font-weight: bold;
    h2{
        width: 242px;
        font-size: 16px;
        float: left;
        margin-bottom: 1px;
        font-family: Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
    }
`;

export const Remover = styled(RiCloseLine)`
    margin-top: -2px;
    &:hover{
        cursor: pointer;
    }
`;

export const Valor = styled.div`

    height: 21px;
    width: 278px;
    padding-left: 7px;

    h2{
        width: 242px;
        font-size: 12px;
        float: left;
        font-weight: bold;
        font-family: Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
    }
`;

export const InputNumber = styled.input`
    -webkit-appearance: none;    
    width: 35px;
    height: 25px;
    background: #f9f9f9;
    border: 1px solid #cecece;
    text-align: center;
`;


