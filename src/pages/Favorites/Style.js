import styled from 'styled-components';

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
        margin-left: -8px;
        color: #3c3c3c;
    }
    h2{
        font-size: 40px;
        color: #3c3c3c;
    }
`;