import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

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

export const SessaoPedido = styled.section`
    margin: auto;
    margin-top: 25px; 
    margin-bottom: 25px;
    
    padding: 8px;

    /*background: #f1f1f1;*/
    
    border-radius: 3px;

    @media (min-width: 1250px) {
        max-width: 1250px;
        min-width: 1250px;
    }
    
`;

export const SessaoListaProdutos = styled.section`
    margin: auto;
    margin-top: 5px; 
    margin-bottom: 5px;
    padding: 10px;

    border-radius: 3px;
    min-height: calc(100vh - 165px);
    @media (min-width: 975px) {
        
        max-width: 960px;
        min-width: 960px;
    }
    
    @media (max-width: 1020px) {
        min-height: calc(100vh - 165px);
    }

    @media (min-width: 1020px) {
        min-height: calc(100vh - 200px);
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
        transition: 0.15s;
        background: #f3f3f3;
    }

    li:active{
        background: #e2e2e2;
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
    
    cursor: default;

    @media (min-width: 501px) {
        font-size: 32px;
    }
    @media (max-width: 500px) {
        font-size: 28px;
    }
`;

export const TituloStessao = styled.h2`

    overflow: hidden;
    text-align: left;
    display: flex;
    align-items: center;

    color: #353535;
    font-size: 20px;
    font-family: 'PT Sans', arial, sans-serif;


    &:after {
        background-color: #353535;
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
    transition: 0.15s;
    background: #f3f3f3;
  }

  li:active{
    background: #e2e2e2;
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


export const ListaPopOverCart = styled.ul`

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
    transition: 0.15s;  
    background: #f3f3f3;
  }

  li:active{
    background: #e2e2e2;
  }

  img{
        width: 40px;
        border-radius: 3px;
  }
  span{
    margin-left: 8px;
    font-size: 14px;
  }

  .div-img{
    display: inline;
  }

  .div-content{
    display: inline;
  }
  .total-card-pop{
    padding: 15px 0px 8px 0px;
    font-weight: bold;
    
    span{
        margin-left: 0px;
        font-size: 12px;
        float: right;
    }
  }
`;

export const BotaoPadrao = styled.button`

    background: rgb(190, 15, 52);;
    border: 1px solid #073532;
    width: 95%;
    height: 35px;
    transition: 0.15s;
    color: #fff;

    &:hover {
        
        transition: 0.25s;
        background: rgb(190, 15, 52);;
        border: 1px solid rgb(190, 15, 52);;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(110%);
    }
       
`;

export const BotaoPadraoVerde = styled(Button)`
    font-weight: bold;
    background: rgb(190,15,52) !important;
    color: rgb(245, 245, 245) !important;
    box-shadow: 0px 3px 4px -3px #6f6f6fba !important;
    border: 1px solid #7d0a22 !important;
    transition: 0.15s;

    &:hover{
        transition: 0.2s;
        background: #de123d !important;
        color: rgb(245, 245, 245) !important;
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
    }
    &:active{
        transition: 0.2s;
        background: #a70a2b !important;
        color: rgb(245,245,245) !important;
        box-shadow: 0px 3px 4px -3px #6f6f6fba !important;
    }
    &:focus{
        transition: 0.2s;
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
        color: rgb(245,245,245) !important;
    }
`;

export const BotaoPadraoCinza = styled(Button)`
    font-weight: bold;
    box-shadow: 0px 3px 4px -3px #6f6f6fba !important;
    border: 1px solid #bdbdbd !important;
    transition: 0.15s;

    &:hover{
        transition: 0.2s;
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
    }
    &:active{
        transition: 0.2s;
        border: 1px solid #a2a2a2 !important;
        box-shadow: 0px 3px 4px -3px #6f6f6fba !important;
    }
    &:focus{
        transition: 0.2s;
        box-shadow: 0px 3px 5px -2px #6f6f6fba !important;
    }
    
`;

export const BotaoComprar = styled(Button)`

    background: rgb(190, 15, 52);;
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
        background: rgb(190, 15, 52);;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(115%);
        transform: scale(1.01);
    }
    &:focus {
        color: #fff;
        transition: 0.25s;
        background: rgb(190, 15, 52);;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        transform: scale(1.01);
    }
    &:active {
        color: #fff;
        transition: 0.25s;
        background: rgb(190, 15, 52);;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(90%);
        transform: scale(1);
    }
    
    
`;

export const BotaoFinalizar = styled(Button)`

    background: rgb(190, 15, 52);;
    border: 1px solid #073532;
    border-radius: 0px;
    transition: 0.15s;
    color: #fff;
    display: flex;
    align-items: center;    
    margin-bottom: 10px;
    width: 172px;

    &:hover {
        color: #fff;
        transition: 0.25s;
        background: rgb(190, 15, 52);;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        filter: brightness(115%);
        transform: scale(1.01);
    }
    &:focus {
        color: #fff;
        transition: 0.25s;
        background: rgb(190, 15, 52);;
        border: 1px solid #073532;
        box-shadow: 0px 6px 10px -7px #828282 !important;
        transform: scale(1.01);
    }
    &:active {
        color: #fff;
        transition: 0.25s;
        background: rgb(190, 15, 52);;
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
    border-radius: 0px;
    &:hover {
        
        transition: 0.25s;
        background: #f3f3f3;
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
        background: #f3f3f3;
        border: none;
        filter: brightness(115%);
    }


`;


export const FormControlCartHeader = styled.div`
.ant-select-selection--single {
    position: relative;
    height: 20px;    
    font-size:12px;
    padding: 0px;
    cursor: pointer;
}
.ant-select-selection__rendered{
    line-height: 20px !important;
}

.ant-select-selection {
    width: 55px;
    background-color: #f2f2f2;
    border: 1px solid #e6e6e6;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-top-width: 1.02px;
    border-radius: 0px;
    outline: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.ant-select-selection:hover {
    background-color: #e8e8e8;
    border: 1px solid #e8e8e8;
}

.ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
    /* border-color: #ff0000; */
    border-right-width: 1px !important;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.dhVhBU .ant-select-selection {
    background-color: #e8e8e8;
    border: 1px solid #e8e8e8;
    
}


.ant-select-dropdown {
    
    border-radius: 0px !important;
}
`;

export const FormControl = styled.div`
.ant-select-selection--single {
    position: relative;
    height: 30px;
    cursor: pointer;
}
.ant-select-selection {
    background-color: #f2f2f2;
    border: 1px solid #e6e6e6;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-top-width: 1.02px;
    border-radius: 0px;
    outline: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.ant-select-selection:hover {
    background-color: #e8e8e8;
    border: 1px solid #e8e8e8;
}

.ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active {
    /* border-color: #ff0000; */
    border-right-width: 1px !important;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.dhVhBU .ant-select-selection {
    background-color: #e8e8e8;
    border: 1px solid #e8e8e8;
    
}


.ant-select-dropdown {
    
    border-radius: 0px !important;
}
`;

export const Direita = styled.div`
    float: right;
`;

export const ListagemProdutos = styled.section`
    margin: auto;
    margin-top: 5px; 
    margin-bottom: 5px;
    padding: 5px;

    border-radius: 3px;
    
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
        transition: 0.15s;
        background: #f3f3f3;
    }

    li:active{
        background: #e2e2e2;
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

export const HorizontalPadding = styled.div`
    margin: 0px;
    padding: 0px 5px;
`;

export const LinhaDivisoria = styled.h2`

    overflow: hidden;
    text-align: left;
    display: flex;
    align-items: center;
    
    &:after {
        background-color: rgba(216, 216, 216, 0.85);
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    &:before {
    }
`;

export const Divisoria = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Centralizar = styled.div`
    text-align: center;
`;

export const SelectPadrao = styled.select`
    width: 42px !important;
    height: 20px !important;
    background: #ececec;
    border: 1px solid #d4d4d4;
    border-radius: 0px;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        background: #f7f7f7 !important;
        border: 1px solid #e8e8e8 !important;  
        transition: 0.2s;
    }
`;


export const SessaoSearch = styled.section`
    margin: auto;
    margin-top: 5px; 
    margin-bottom: 5px;
    padding: 10px;

    border-radius: 3px;
    @media (min-width: 975px) {
        max-width: 98%;
        min-width: 960px;
    }

`;

export const DefaultSelect = styled.select`
    margin-bottom: 15px;
    text-align: center;
    width: 98%;
    height: 38px;
    border-radius: 5px;
    border-color: #bfbfbf;
    background: #efefef;
    color: #191919;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'PT Sans', arial, sans-serif;
    padding-left: 5px;
    transition: 0.2s;
    &:hover{
        background: #f7f7f7;
        cursor: pointer;
        box-shadow: 0px 2px 5px -1px #2525252e;
        transition: 0.25s;
    }
`;

export const DefaultInput = styled.input`  
    text-align: left !important;
    border: 1px solid #bfbfbf;
    margin-bottom: 15px;
    text-align: center;
    width: 98%;
    height: 38px;
    border-radius: 5px;
    border-color: #bfbfbf;
    background: #efefef;
    color: #191919;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'PT Sans', arial, sans-serif;
    padding-left: 10px;
    transition: 0.2s;
    &:hover{
        background: #f7f7f7;
        cursor: pointer;
        box-shadow: 0px 2px 5px -1px #2525252e;
        transition: 0.25s;
    }
`;