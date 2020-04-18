import React from 'react'
import {Rodape, LogoFooter} from './Style';

export default function index() {
    return (
        <>
            <Rodape>
                <LogoFooter src="/logo.svg" alt="Tech Store" draggable="false"/>
            </Rodape>
        </>
    )
}
