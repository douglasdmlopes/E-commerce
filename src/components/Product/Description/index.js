import React from 'react';
import { AiOutlineFileText } from "react-icons/ai";
import { TituloStessao } from '../../../styles/global';
import {SubSessao} from '../../../styles/global';

export default function index({produto}) {

    return (
        <>
            <SubSessao>
                <TituloStessao>DESCRIÇÃO</TituloStessao>
                <p>
                    {produto.descricao}
                </p>
            </SubSessao>
        </>
    )
}
