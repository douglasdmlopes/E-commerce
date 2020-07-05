import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

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
    .header {
        height: 70px !important;
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

export const FavCard = styled(FaHeart)`
    position: absolute;
    color: #b9b9b9;
    margin: 5px;
`;

export const FavoritadoCard = styled(FaHeart)`
    position: absolute;
    color: rgb(214, 15, 15);
    margin: 5px;
`;


export const CarrinhoCard = styled(Button)`

`;