import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { FiHeart } from "react-icons/fi";

export const Cartao = styled(Card)`
    width: 95% !important;
    margin: auto !important;
    margin-bottom: 10px !important;
    transition: 0.35s !important;
    border-radius: 0px !important;
    img{
        width: 100%
    }

    svg{
        text-align: right !important;
    }
    &:hover{
        box-shadow: 0px 2px 5px 3px #bfbfbfad !important;
        transition: 0.35s !important;
    }
    @media (max-width: 768px) {
        ${props => props.content && `
        padding-left: 0px !important;
        `}
        .ui.card>.content, .ui.cards>.card>.content {
            padding-left: 0px !important;
        }
    }
`;

export const FavCard = styled(FiHeart)`
    position: absolute;
    color: #848484;
    margin: 5px;
`;

export const CarrinhoCard = styled(Button)`

`;