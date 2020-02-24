import React from 'react'
import Header from '../../components/Header';

import Description from '../../components/Product/Description';
import Info from '../../components/Product/Info';
import Pictures from '../../components/Product/Pictures';
import Product from '../../components/Product/Product';
import Rating from '../../components/Product/Rating';
import Specification from '../../components/Product/Specification';

import {Sessao} from '../../styles/global';

export default function index() {
    return (
        <>
            <Header/>
            <Sessao>
                <Description/>
                <Info/>
                <Pictures/>
                <Product/>
                <Rating/>
                <Specification/>
            </Sessao>
        
        </>
    )
}
