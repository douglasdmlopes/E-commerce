import styled from 'styled-components';
//import { Carousel } from 'antd';
import Carousel from '@brainhubeu/react-carousel';

export const Slider = styled(Carousel)`
        margin-top: 15px;
        margin-bottom: 15px;
        img{
            width: 100%
        }
        .BrainhubCarousel__arrows {
        
            padding: 18px;
            border: none;
            overflow: hidden;
            outline: 0;
            font-size: 0;
            line-height: 0;
            background-color: #b9b9b9;
            &:hover {
                background-color: rgb(190, 15, 52);;
            }
        }
        button{
            background-color: #fafafa !important;
            border: 1px solid #ff0000 !important;
            border-color: #dbdbdb !important;
            border-radius: 50px !important;
            margin: 5px !important;
        }
        button:hover{
            box-shadow: 0px 2px 4px 0px #9a9a9a !important;
            background-color: #ffffff !important;
            border-color: #c1c1c1b5 !important;
            transition: 0.15s;
        }
        span{
            border-color: #676767 !important;
        }
        img:hover{
            transition: 0.3s;
            filter: brightness(1.08);
        }
        img:active{
            transition: 0.25s;
            filter: brightness(0.96);
        }
`;



