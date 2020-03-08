import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { TituloStessao } from '../../../styles/global';
import {SubSessao} from '../../../styles/global';

export default function index() {
    return (
        <>
            <SubSessao>
                <TituloStessao><AiOutlineStar/>AVALIAÇÕES</TituloStessao>
            </SubSessao>
        </>
    )
}
