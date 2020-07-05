import React, {useState, useEffect } from 'react'
import { Slider, ArrowLeft, ArrowRight } from './style';
import { FaChevronLeft, FaChevronRight } from  "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Index() {

    const [colunas, setColunas] = useState(6);
    //const [screen, setScreen] = useState(window.innerWidth);
    const screen = window.innerWidth;
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
            arrowLeft={ botoes ? <ArrowLeft name="angle-double-left"><FaChevronLeft size="18"/></ArrowLeft> : ""}
            arrowLeftDisabled={ botoes ? <ArrowLeft name="angle-double-left"><FaChevronLeft size="18"/></ArrowLeft> : ""}
            arrowRight={ botoes ? <ArrowRight name="angle-double-right"><FaChevronRight size="18"/></ArrowRight> : ""}
            arrowRightDisabled={ botoes ? <ArrowRight name="angle-double-right"><FaChevronRight size="18"/></ArrowRight> : ""}
            addArrowClickHandler
            infinite
             >
                <div>
                <Link to={`/search/marca=Samsung`} >
                    <img src="./empresas/empresa_03.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/search/marca=Xiaomi`} >
                <img src="./empresas/empresa_01.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/search/marca=Lenovo`} >
                <img src="./empresas/empresa_04.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/search/marca=Apple`} >
                    <img src="./empresas/empresa_02.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/search/marca=Huawei`} >
                <img src="./empresas/empresa_05.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                
            </Slider>
        </>
    )
}
