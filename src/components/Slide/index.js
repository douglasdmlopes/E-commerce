import React from 'react'
import { Slider } from './style';
//import Slider from "react-slick";

export default function index() {

    return (
        <>
            <Slider autoplay >
                <div>
                <img src="./slide01.png" alt="Tech Store" draggable="false"/>
                </div>
                <div>
                <img src="./slide02.png" alt="Tech Store" draggable="false"/>
                </div>
                <div>
                <img src="./slide03.png" alt="Tech Store" draggable="false"/>
                </div>
                <div>
                <img src="./slide04.png" alt="Tech Store" draggable="false"/>
                </div>
            </Slider>
        </>
    )
}
