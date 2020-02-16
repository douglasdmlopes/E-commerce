import styled from 'styled-components';


export const Cabecalho = styled.header`

    height: 55px;
    width: 100% auto;
    background: #0b5c56;
    padding-top: 7px;
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


`;

export const Imagem = styled.img`
    width: 30px;
    margin 5px;
    
`;

export const Logo = styled.img`
    margin-top: -40px;
    width: 150px;
`;

export const UserMenu = styled.span`
    text-align: center;
`;