import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Description from '../../components/Product/Description';
import Info from '../../components/Product/Info';
import Pictures from '../../components/Product/Pictures';
import Rating from '../../components/Product/Rating';
import Specification from '../../components/Product/Specification';

import {Sessao} from '../../styles/global';

import { Row, Col } from 'antd';

export default function index() {
    return (
        <>
            <Header/>
            <Sessao>
                <Row>
                    <Col xs={24} sm={11} md={16} lg={16} xl={16}>
                        <Pictures/>
                    </Col>
                    <Col xs={24} sm={13} md={8} lg={8} xl={8}>
                        <Info/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Description/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Specification/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Rating/>
                    </Col>
                </Row>
            </Sessao>
            <Footer/>       
        </>
    )
}
