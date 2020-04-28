import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';
import LogoSlide from '../../components/LogoSlide';
import Card from '../../components/Card';
import {Sessao, TitleHome} from './style';
import { Row, Col } from 'antd';

export default function index() {
    const produto = {
        id: 1,
        name: "Xiaomi",
        rate: 5,
        value: '500,00',
        img: 'produto'
    };
    return (
        <>
        <Header/>
        <Slide/>
        <TitleHome>Principais Marcas</TitleHome>
        <LogoSlide/>

        <TitleHome>Produtos</TitleHome>
        <Sessao>
            <Row>
                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

                <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                    <Card produto={produto}/>
                </Col>

            </Row>
        </Sessao>
        <Footer/>
        </>
    )
}
