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
    
`;


export const Sessao = styled.section`
    
    margin-top: 25px; 
    margin-bottom: 25px;

    padding: 8px;

    box-shadow: 0px 0px 6px 0px #25252533;
    background: #f1f1f1;
    border-radius: 3px;
    height: 900px;
    
    @media (min-width: 768px) {
        
        margin-left: 30px;
        margin-right: 30px;
    }

`;

export const SubSessao = styled.section`
    
    padding: 15px;

`;

export const TituloStessao = styled.h2`

    overflow: hidden;
    text-align: left;
    
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
    border: 1px solid #0b5c56;
    width: 95%;
    height: 35px;
    transition: 0.15s;
    color: #fff;

    &:hover {
        
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #0b5c56;
        box-shadow: 0px 3px 12px 0px #828282;
        filter: brightness(115%);
    }
    

    
`;

export const BotaoAzul = styled.button`

`;

export const BotaoComprar = styled(Button)`
    background: #0b5c56;
    border: 1px solid #0b5c56;
    width: 200px;
    height: 45px;
    transition: 0.15s;
    color: #fff;

    display: flex;
    align-items: center;
    
    &:hover {
        
        transition: 0.25s;
        background: #0b5c56;
        border: 1px solid #0b5c56;
        box-shadow: 0px 3px 12px 0px #828282;
        filter: brightness(115%);
    }
    padding-left: 18px;
    
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