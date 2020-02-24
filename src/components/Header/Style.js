import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

export const Cabecalho = styled.header`

    height: 55px;
    width: 100% auto;
    background: #0b5c56;
    padding-top: 7px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (min-width: 768px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    input, input:hover, input:focus, input:active{
        background: #f1f1f1;
        border-color: #f1f1f1 !important;
        box-shadow: none;
        outline: 0px;
        border-radius: 0px;
        transform: 0.5s;
        height: 39px;
        
    }

    input:hover{
        background: #fff;
        border-color: #fff;
    }

    input:focus{
        background: #fff;
        border-color: #fff;
    }

    svg:{
        cursor: pointer;
    }

    @media (max-width: 1020px) {
        display: none;
    }

`;
export const Submenu = styled.div`
    height: 35px;
    width: 100% auto;
    background: #f1f1f1;
    box-shadow: 0px 3px 5px -1px #25252533;
    padding-top: 0px;    

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    padding-left: 10%;
    padding-right: 10%;

    svg{
        display: block;
        float: left;
        margin-left: 11px;
    }

    img{
        position: absolute;
    }

    span{
        float: left;
    }

    ul{
        margin-top: 0;
        display: inline-flex;/*flex*/
        
        list-style: none;
        height: 35px;
        width: auto;
        font-size: 0;
    }

    li{
        position: relative;
        display: block;
        text-align: center;
        font-size: 14px;
        height: 35px;
        margin: 0px;
        padding: 7px 15px;
        cursor: default;
        transition: 0.2s;
        
    }

    li: hover{
        background: #d6d6d6;
        cursor: pointer;
        transition: 0.2s;
    }
    
    li: active{
        background: #bbbbbb;
        transition: 0.2s;
    }

    @media (max-width: 1020px) {
        display: none;
    }
`;

export const Imagem = styled.img`
    width: 30px;
    margin 5px;
    
`;

export const Logo = styled.img`
    margin-top: -38px;
    width: 150px;
    cursor: pointer;
    
`;

export const UserMenu = styled.span`
    text-align: center;    
`;

export const MobileCabecalho = styled.header`

    height: 55px;
    width: 100% auto;
    background: #0b5c56;
    padding: 7px 15px;
    box-shadow: 0px 3px 5px -1px #25252533;

    text-align: center;

    svg{
        cursor: pointer;
    }

    @media (min-width: 1021px) {
        display: none;
    }
    @media (max-width: 720px) {
        padding: 9px 11px 9px 7px;
    }

`

export const Lupa = styled(FiSearch)`
    margin-top: 2px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);

    transform: rotate(90deg);
`;