import React, {useState} from 'react';
import { Pictures } from './Style';
import {SubSessao} from '../../../styles/global';
  
export default function Index() {

    const [visible, setVisible] = useState(0);

    function onChange(visible) {
        setVisible(visible);
    };

    return (
        <>
        <SubSessao>
            <Pictures
                infinite
                autoPlay={5000}
                animationSpeed={1500}
                >

                <div>
                    <h3><img src="/produto.png" alt="produto" draggable="false"/></h3>
                </div>
                <div>
                <h3><img src="/produto.png" alt="produto" draggable="false"/></h3>
                </div>
                <div>
                <h3><img src="/produto.png" alt="produto" draggable="false"/></h3>
                </div>
                <div>
                <h3><img src="/produto.png" alt="produto" draggable="false"/></h3>
                </div>
            </Pictures>
        </SubSessao>
        </>
    )
}