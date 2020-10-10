import styled from 'styled-components';

export const Rodape = styled.footer`
    height: 100px;
    background: rgb(190, 15, 52);
    padding-top: 20px;
`;

export const MiniRodape = styled.footer`
    height: 25px;
    background: #9e112f;
    padding-top: 3px;
    text-align: center;
    span{
        font-size: 14px;
        color: #efefef;
    }
    a{
        color: #efefef;
    }
    a:hover{
        color: #ffcccc;
    }
`;

export const LogoFooter = styled.img`
    margin: auto;
    margin-top: 10px;
    height: 40px;
    display: flex;
    align-items: center; 
`;