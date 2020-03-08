import styled from 'styled-components';
//import { Carousel } from 'antd';
import Carousel from '@brainhubeu/react-carousel';

export const Pictures = styled(Carousel)`


    img{
        width: 100%
    }
    
    .BrainhubCarousel__arrows {
        
        
        border: none;
        overflow: hidden;
        outline: 0;
        font-size: 0;
        line-height: 0;
        background-color: #b9b9b9;
        &:hover {
            background-color: #0b5c56;
        }
    }
    
`;