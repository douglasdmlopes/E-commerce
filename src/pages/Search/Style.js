import styled from 'styled-components';

export const FormFiltros = styled.div`
    width: 100%;
    height: 100px;
    padding-right: 5px;
    
    @media (max-width: 767px) {
        display: none;
    }
`;

export const FormFiltrosMobile = styled.div`
    width: 100%;
    margin: 10px 0px 15px 0px;
    text-align: right;
    
    @media (min-width: 767px) {
        display: none;
    }
`;

export const Rotulo = styled.label`
    color: #373737;
    font-size: 16px;
`;