import styled from 'styled-components';
import { FiSearch, FiX } from "react-icons/fi";
import {Menu } from 'antd';

export const Cabecalho = styled.header`

    height: 55px;
    width: 100% auto;
    background: rgb(190, 15, 52);;
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
    .ant-input-affix-wrapper .ant-input-suffix{
        font-size: 30px !important;
        svg, i{
            font-size: 30px !important;
        }
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
    width: 173px;
    margin-top: 4px;
    cursor: pointer;
    
`;

export const UserMenu = styled.span`
    text-align: center;    
`;

export const MobileCabecalho = styled.header`

    height: 55px;
    width: 100% auto;
    background: rgb(190, 15, 52);;
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
        span{
            margin-left: -8px;
            width: 103%;
        }
    }

    @media (min-width: 721px) {
        span{
            margin-left: -15px;
            width: 114%;
        }
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
    

`

export const Lupa = styled(FiSearch)`
    margin-top: 2px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);

    transform: rotate(90deg);
`;

export const Fechar = styled(FiX)`
    margin-top: 8px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);

    transform: rotate(90deg);
`;

export const BuscaMobile = styled.input`
    height: 55px;
    width: 93%;
    background: #e4e4e4;
    border: none;
    color: black;
    font-size: 18px;
    font-family: 'PT Sans', arial, sans-serif;
    padding: 10px;
    
    border-color: #f1f1f1 !important;
    box-shadow: none;
    outline: 0px;
    border-radius: 0px;
    transform: 0.5s;
        
`;


export const MobileCabecalhoBusca = styled.header`

    height: 55px;
    width: 100% auto;
    background: #e4e4e4;
    
    box-shadow: 0px 3px 5px -1px #25252533 !important;
    transition: 0.15s;
    text-align: center;

    svg{
        margin-top: 11px;
        cursor: pointer;
        -webkit-filter: invert(70%);
        filter: invert(70%);
        transition: 0.2s;
        
        &:hover{
            -webkit-filter: invert(85%);
            -webkit-filter: invert(85%);
            filter: invert(85%);
            transition: 0.2s;
        }
    }

    @media (min-width: 1021px) {
        display: none;
    }

    @media (max-width: 1020px) {
        padding: 0px 11px 0px 7px;
        span{
            margin-left: -8px;
            width: 103%;
        }
    }

    @media (min-width: 1021px) {
        span{
            margin-left: -15px;
            width: 114%;
        }
    }
`


export const Listagem = styled(Menu)`

    .ant-menu-item:active, .ant-menu-submenu-title:active {
        background: #d6123c !important;
    }
`;