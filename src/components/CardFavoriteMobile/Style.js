import styled from 'styled-components';
import { RiCloseLine } from "react-icons/ri";

export const Container = styled.div`

    padding: 5px;
    margin-left: 5px;
    margin-top: 8px;
    width: 100% auto;
    background: #f5f5f5;
    border-radius: 3px;
    border: 1px solid #e2e2e2;
    -webkit-box-shadow: 0px 3px 8px #e1e1e3
`;

export const Remover = styled(RiCloseLine)`
    float: right;
    margin-top: -2px;
    &:hover{
        cursor: pointer;
    }
`;

export const Picture = styled.img`
    width: 100%;
    border-radius: 3px;    
`;

export const Description = styled.div`
    padding: 5px 7px;
    padding-bottom: 0px;
    font-weight: bold;

    h2{
        font-size: 16px;
        margin-bottom: 4px;
        font-family:  Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
    }
`;

export const Valor = styled.div`

    height: 21px;
    padding-left: 7px;

    h2{
        width: 242px;
        font-size: 14px;
        float: left;
        font-weight: bold;
        font-family:  Montserrat, Roboto, Arial, Helvetica, sans-serif !important;
    }
`;
