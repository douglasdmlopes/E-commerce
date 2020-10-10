import React from 'react'
import {Rodape, LogoFooter, MiniRodape} from './Style';

export default function index() {
    return (
        <>
            <Rodape>
                <LogoFooter src="/logo.png" alt="Tech Store" draggable="false"/>
            </Rodape>
            <MiniRodape/>
        </>
    )
}
