import React, {useState, useEffect} from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { TituloStessao } from '../../../styles/global';
import {SubSessao} from '../../../styles/global';
import { Estrelas, Avaliacao, Texto } from './Style';

export default function index({produto}) {
    return (
        <>
            <SubSessao>
                <TituloStessao>AVALIAÇÕES</TituloStessao>
                <Estrelas allowHalf defaultValue={
                            produto.avaliacao == null ? 0 : produto.avaliacao
                        }  size={10} disabled />
                <Avaliacao>{ produto.avaliacao == null ? 0 : produto.avaliacao }</Avaliacao>
                <Texto>Não há comentários sobre o produto</Texto>
            </SubSessao>
            
        </>
    )
}
