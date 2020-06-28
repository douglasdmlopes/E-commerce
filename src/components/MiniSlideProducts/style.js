import styled from 'styled-components';
//import { Carousel } from 'antd';
import Carousel from '@brainhubeu/react-carousel';


export const Slider = styled(Carousel)`

    li{
        padding-top: 6px;
    }
`;

export const ArrowLeft = styled.button`
    
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #ffffff !important;
    border: 1px solid #bdbdbd !important;
    border-radius: 50px !important;
    margin: 2px !important;

    &:hover{
        box-shadow: 0px 1px 3px 0px #0000004a !important;
        background-color: #ffffff !important;
        
        transition: 0.25s;
    }

    &:active{
        box-shadow: 0px 1px 2px 0px #0000004a !important;
        background-color: #f5f5f5 !important;
        border-color: #bbbbbbb5 !important;
        transition: 0.0s;
    }

    svg{
        color: #3e3e3e;
    }
`;

export const ArrowRight = styled.button`

    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #ffffff !important;
    border: 1px solid #bdbdbd !important;
    border-radius: 50px !important;
    margin: 2px !important;

    &:hover{
        box-shadow: 0px 1px 3px 0px #0000004a !important;
        background-color: #ffffff !important;
        
        transition: 0.25s;
    }

    &:active{
        box-shadow: 0px 1px 2px 0px #0000004a !important;
        background-color: #f5f5f5 !important;
        border-color: #bbbbbbb5 !important;
        transition: 0.0s;
    }

    svg{
        color: #3e3e3e;
    }

`;