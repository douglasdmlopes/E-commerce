import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

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
    box-shadow: 0px 0px 6px 0px #25252533;
    background: #f1f1f1;
    border-radius: 3px;
    height: 900px;
    
    @media (min-width: 768px) {
        
        margin-left: 30px;
        margin-right: 30px;
    }

`;