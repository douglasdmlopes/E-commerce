import styled from 'styled-components';

export const FloatRight = styled.div`

    float:right;
    padding-right: 5px;
    margin-top: 20px
`;


export const Total = styled.div`
    width: 100%;
    padding: 0px 5px;
    text-align: right;
    span{
        font-size: 16px;
    }
    .total{
        font-weight: bold;
    }
`;

export const CarrinhoVazio = styled.div`
    margin-top: 65px;
    text-align: center;
    svg{
        margin-left: -26px;
        color: #3c3c3c;
    }
    h2{
        font-size: 40px;
        color: #3c3c3c;
    }
`;

export const ListagemItens = styled.div`
    
`;


export const TotalCarrinho = styled.div`

    span {
        font-weight: bold;    
    }

    h2 {
        font-size: 16px;
        float: right;
        margin-right: 10px;
        margin-top: 25px;
    }
`;
