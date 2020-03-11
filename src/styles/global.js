import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import { Button } from 'antd';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body{
        background: #f2f2f2;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
    
    a {
        color: #1d1d1d;
    }
    a:hover {
        color: #1d1d1d;
    }
    a:active {
        color: #1d1d1d;
    }
    a:focus {
        color: #1d1d1d;
    }
`;


export const Sessao = styled.section`
    margin: auto;
    margin-top: 25px; 
    margin-bottom: 25px;
    
    padding: 8px;

    background: #f1f1f1;
    border-radius: 3px;

    @media (min-width: 975px) {
        max-width: 960px;
        min-width: 960px;
    }
    
`;

export const SessaoListaProdutos = styled.section`
    margin: auto;
    margin-top: 5px; 
    margin-bottom: 5px;
    padding: 10px;

    border-radius: 3px;

    @media (min-width: 975px) {
        max-width: 960px;
        min-width: 960px;
    }
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    li{
        list-style-type: none;
        padding: 0px 0px 30px 0px;
        margin-right: 5px;
        
    }

    li:hover{
        background: #c3c3c3;
    }

    li:active{
        background: #b5b5b5;
    }

    img{
            width: 40px;
            border-radius: 3px;
    }
    span{
        margin-left: 8px;
        font-size: 15px;
    }
`;

export const SubSessao = styled.section`
    
    padding: 15px;

`;

export const Titulo = styled.h1`
    font-size: 38px;
    cursor: default;   
`;

export const TituloStessao = styled.h2`

    overflow: hidden;
    text-align: left;
    display: flex;
    align-items: center;
    &:after {
        background-color: #373737;
        content: "";
        display: inline-block;
        height: 2px;
        position: relative;
        vertical-align: middle;
        width: 100%;
        left: 0.5em;
        margin-right: -50%;
    }

    &:before {
        right: 0.5em;
        margin-left: -50%;
    }
`;

export const ListaPopOver = styled.ul`

    display: block;
    list-style-type: disc;
    list-style: none;
    margin: -8px 0px;
    padding: 0px;
    cursor: pointer;    

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
  li{
    padding: 6px 29px 6px 29px;
    margin: 0px -16px 0px -16px;
  }

  li:hover{
    background: #c3c3c3;
  }

  li:active{
    background: #b5b5b5;
  }

  img{
        width: 40px;
        border-radius: 3px;
  }
  span{
    margin-left: 8px;
    font-size: 15px;
  }
`;

export const BotaoPadrao = styled.button`

    background: #0b5c56;
    border: 1px solid #073532;
    width: 95%;
    height: 35px;
    transition: 0.15s;
    color: #fff;

    &:hover {
        
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #0b5c56;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(110%);
    }
       
`;

export const BotaoAzul = styled.button`

`;

export const BotaoComprar = styled(Button)`

    background: #0b5c56;
    border: 1px solid #073532;
    border-radius: 0px;
    transition: 0.15s;
    color: #fff;
    display: flex;
    align-items: center;    
    margin-bottom: 10px;
    width: 200px;

    &:hover {
        color: #fff;
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(115%);
        transform: scale(1.01);
    }
    &:focus {
        color: #fff;
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        transform: scale(1.01);
    }
    &:active {
        color: #fff;
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(90%);
        transform: scale(1);
    }
    
    
`;

export const BotaoFavoritar = styled(Button)`

    background: #dadada;
    border: 1px solid #cccaca;
    border-radius: 0px;
    transition: 0.15s;
    color: #232323;
    display: flex;
    align-items: center;    
    margin-bottom: 10px;
    width: 200px;

    &:hover {
        color: #232323;
        transition: 0.25s;
        background: #dadada;
        border: 1px solid #cccaca;
        box-shadow: 0px 6px 10px -7px #828282;
        transform: scale(1.01);
    }
    &:focus {
        color: #232323;
        transition: 0.25s;
        background: #dadada;
        border: 1px solid #cccaca;
        box-shadow: 0px 6px 10px -7px #828282;
        transform: scale(1.01);
    }
    &:active {
        color: #232323;
        transition: 0.25s;
        background: #dadada;
        border: 1px solid #cccaca;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(90%);
        transform: scale(1);
    }
    
    
`;

export const BotaoRemover = styled.button`
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.15s;
    color: #fff;
    text-align: center;
    padding-top: 17%;
    &:hover {
        
        transition: 0.25s;
        background: #c3c3c3;
        border: none;
        filter: brightness(115%);
    }


`;


export const BotaoListagem = styled.button`
    background: none;
    border: none;
    width: 30px;
    height: 30px;
    transition: 0.15s;
    color: #fff;
    text-align: center;
    padding-top: 11%;
    &:hover {
        
        transition: 0.25s;
        background: #c3c3c3;
        border: none;
        filter: brightness(115%);
    }


`;