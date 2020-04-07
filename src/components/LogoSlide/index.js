import React from 'react'
import { Slider } from './style';
//import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function index() {

    return (
        <>
            <Slider 
            autoPlay={5000}
            animationSpeed={1000}
            slidesPerPage={5}
            arrows
            infinite
             >
                <div>
                <Link to={`/product/1`} >
                    <img src="./empresas/empresa_01.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                <img src="./empresas/empresa_02.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
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
                <img src="./empresas/empresa_02.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/1`} >
                <img src="./empresas/empresa_03.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                
            </Slider>
        </>
    )
}
