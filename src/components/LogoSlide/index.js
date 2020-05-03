import React, {useState, useEffect } from 'react'
import { Slider } from './style';
//import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function Index() {

    const [colunas, setColunas] = useState(6);
    const [screen, setScreen] = useState(window.innerWidth);
    const [ botoes, setBotoes] = useState(true);

    useEffect(() => {
        if(screen <= 500){
            setColunas(3);
            setBotoes(false);
        }else if(screen >= 501 && screen <= 700){
            setColunas(4);
        }
    },[screen]);
    return (
        <>
            <Slider             
            autoPlay={5000}
            animationSpeed={1000}
            slidesPerPage={colunas}
            arrows={botoes}
            infinite
             >
                <div>
                <Link to={`/product/1`} >
                    <img src="./empresas/empresa_03.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                <img src="./empresas/empresa_01.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                <img src="./empresas/empresa_04.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                    <img src="./empresas/empresa_02.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                <img src="./empresas/empresa_05.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                
            </Slider>
        </>
    )
}
