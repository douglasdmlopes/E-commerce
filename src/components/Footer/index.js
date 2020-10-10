import React from 'react'
import {Rodape, LogoFooter, MiniRodape} from './Style';

export default function index() {
    return (
        <>
            <Rodape>
                <LogoFooter src="/logo.png" alt="Tech Store" draggable="false"/>
            </Rodape>
            <MiniRodape>
                <span><a href="https://forms.gle/4im2JMTaYuD674Hn6">Responder o Questionário</a></span>
            </MiniRodape>
        </>
    )
}
