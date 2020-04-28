import React, { useState } from 'react';
import Header from '../../components/Header';
import {SessaoSearch,  Titulo, BotaoPadraoVerde, DefaultSelect, DefaultInput} from '../../styles/global';
import { Row, Col, Drawer} from 'antd';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import { FormFiltros, FormFiltrosMobile, Rotulo } from './Style';
import { Icon } from 'semantic-ui-react';

export default function Index() {
    const [visible, setVisible] = useState(false);

    function showDrawer() {
        setVisible(true);
    };

    function onClose() {
        setVisible(false);
    };

    return (
        <>
            <Header/>
            <SessaoSearch>
                <Titulo>Busca</Titulo>
                
                    <FormFiltrosMobile>
                        <BotaoPadraoVerde onClick={showDrawer}>
                            <Icon name='filter'  style={{fontSize: 14, color: '#fff'}}/>
                            <span style={{fontSize: 14}}>Filtrar</span>
                        </BotaoPadraoVerde>
                        <Drawer
                            title="Filtrar busca"
                            width={270}
                            onClose={onClose}
                            visible={visible}
                            bodyStyle={{ padding: 0}}
                            placement="right"
                            
                        >
                            <div style={{paddingLeft: '5px', paddingTop: '10px'}}>
                                <Rotulo>Marca</Rotulo>
                                <DefaultSelect placeholder='Marca' >
                                    <option value="Apple">Apple</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Lenovo">Lenovo</option>
                                    <option value="Motorola">Motorola</option>
                                    <option value="LG">LG</option>
                                    <option value="Positivo">Positivo</option>
                                    <option value="Sony">Sony</option>
                                    <option value="Dell">Dell</option>
                                    <option value="Multilaser">Multilaser</option>
                                </DefaultSelect>
                                <Rotulo>Tipo</Rotulo>
                                <DefaultSelect placeholder='Tipo' >
                                    <option value="Notebook">Notebook</option>
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Computadores">Computadores</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Tablet">Tablet</option>
                                </DefaultSelect>
                                <Rotulo>Avaliação</Rotulo>
                                <DefaultSelect placeholder='Avaliação' >
                                    <option>1 Estrela</option>
                                    <option>2 Estrelas</option>
                                    <option>3 Estrelas</option>
                                    <option>4 Estrelas</option>
                                    <option>5 Estrelas</option>
                                </DefaultSelect>
                                <Rotulo>Faixa de preço</Rotulo>
                                <DefaultInput type="number" placeholder="Preço minimo"/>
                                <DefaultInput type="number" placeholder="Preço máximo"/>
                                <BotaoPadraoVerde onClick={showDrawer} style={{width: '98%'}}>
                                    <span style={{fontSize: 16}}>Buscar</span>
                                </BotaoPadraoVerde>
                            </div>
                        </Drawer>
                    </FormFiltrosMobile>
                
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                        <FormFiltros>
                            <Rotulo>Marca</Rotulo>
                            <DefaultSelect placeholder='Marca' >
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Motorola">Motorola</option>
                                <option value="LG">LG</option>
                                <option value="Positivo">Positivo</option>
                                <option value="Sony">Sony</option>
                                <option value="Dell">Dell</option>
                                <option value="Multilaser">Multilaser</option>
                            </DefaultSelect>
                            <Rotulo>Tipo</Rotulo>
                            <DefaultSelect placeholder='Tipo' >
                                <option value="Notebook">Notebook</option>
                                <option value="Smartphone">Smartphone</option>
                                <option value="Computadores">Computadores</option>
                                <option value="Hardware">Hardware</option>
                                <option value="Tablet">Tablet</option>
                            </DefaultSelect>
                            <Rotulo>Avaliação</Rotulo>
                            <DefaultSelect placeholder='Avaliação' >
                                <option>1 Estrela</option>
                                <option>2 Estrelas</option>
                                <option>3 Estrelas</option>
                                <option>4 Estrelas</option>
                                <option>5 Estrelas</option>
                            </DefaultSelect>
                            <Rotulo>Faixa de preço</Rotulo>
                            <DefaultInput type="number" placeholder="Preço minimo"/>
                            <DefaultInput type="number" placeholder="Preço máximo"/>
                            <BotaoPadraoVerde onClick={showDrawer} style={{width: '98%'}}>
                                <span style={{fontSize: 16}}>Buscar</span>
                            </BotaoPadraoVerde>
                        </FormFiltros>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                    </Col>
                    
                </Row>
            </SessaoSearch>
            <Footer/>
        </>
    )
}