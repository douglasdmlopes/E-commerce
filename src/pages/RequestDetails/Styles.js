import styled from 'styled-components';

export const Detalhes = styled.div`
    font-size: 14px;
    font-family: Montserrat, Roboto, Arial, Helvetica, sans-serif;

    h2 {
        font-size: 20px;
        margin-bottom: 5px;
    }
    
    h3 {
        font-size: 18px;
        margin: 0px;
    }

    span {
        font-weight: normal;
    }
`;

export const Itens = styled.div`

    @media screen and (min-width: 576px) {
        height: 350px;
        overflow: auto;
        padding-right: 5px;
    }
`;
