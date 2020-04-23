import React, { useState } from 'react';
import Header from '../../components/Header';
import {SessaoSearch,  Titulo, BotaoPadraoVerde, DefaultSelect} from '../../styles/global';
import { Row, Col, Drawer} from 'antd';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import { FormFiltros, FormFiltrosMobile } from './Style';
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
                            <span style={{fontSize: 12}}>Filtrar</span>
                        </BotaoPadraoVerde>
                        <Drawer
                            title="Filtrar busca"
                            width={300}
                            onClose={onClose}
                            visible={visible}
                            bodyStyle={{ padding: 0}}
                            placement="right"
                            style={{textAlign: 'center'}}
                        >
                            
                            <DefaultSelect style={{width: '90%'}} placeholder='Selecione' >
                                <option>Opção 01</option>
                                <option>Opção 01</option>
                            </DefaultSelect>
                        </Drawer>
                    </FormFiltrosMobile>
                
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                        <FormFiltros>
                            <DefaultSelect placeholder='Selecione' >
                            <option>Opção 01</option>
                            <option>Opção 01</option>
                            </DefaultSelect>
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