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
            infinite
             >
                <div>
                <Link to={`/product/30`} >
                    <img src="./slide01.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/27`} >
                <img src="./slide02.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                <Link to={`/product/19`} >
                <img src="./slide03.png" alt="Tech Store" draggable="false"/>
                </Link>
                </div>
                <div>
                    <Link to={`/product/29`} >
                        <img src="./slide04.png" alt="Tech Store" draggable="false"/>
                    </Link>
                </div>
            </Slider>
        </>
    )
}
