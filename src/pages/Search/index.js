import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {SessaoSearch,  Titulo, BotaoPadraoVerde, DefaultSelect, DefaultInput} from '../../styles/global';
import { Row, Col, Drawer, notification} from 'antd';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { FormFiltros, FormFiltrosMobile, Rotulo } from './Style';
import { Icon } from 'semantic-ui-react';
import { useParams } from "react-router-dom";
import Card from '../../components/Card';
import { Loader } from 'semantic-ui-react';

export default function Index() {

    const [visible, setVisible] = useState(false);

    let { termo } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        async function fetchData() {
            console.log(termo);
            setLoading(true);

            if(termo != undefined){
                await api.post(`/api`, {nome : termo})
                .then(response => {

                    const dados = response.data;

                    console.log(dados.data);
                    if(dados.error == 0){
                        setProdutos(dados.data);
                    }else{
                        setProdutos([]);
                    }
                    
                })
                .catch(e => {
                    console.error(e);
                    
                    notification['error']({
                        message: 'Desculpe',
                        description:
                        'Ocorreu um erro ao tentar se conectar ao servidor, tente novamente mais tarde.',
                        placement: 'bottomRight'
                    });
                    
                });
                setLoading(false);
            }else{
                setLoading(false);
            }            
            
        }
        fetchData();
        
    }, []);

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
                                    <option value="">Selecione</option>
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
                                    <option value="">Selecione</option>
                                    <option value="Notebook">Notebook</option>
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Computadores">Computadores</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Tablet">Tablet</option>
                                </DefaultSelect>
                                <Rotulo>Avaliação</Rotulo>
                                <DefaultSelect placeholder='Avaliação' >
                                    <option value="">Selecione</option>
                                    <option value="1">1 Estrela</option>
                                    <option value="2">2 Estrelas</option>
                                    <option value="3">3 Estrelas</option>
                                    <option value="4">4 Estrelas</option>
                                    <option value="5">5 Estrelas</option>
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
                                <option value="">Selecione</option>
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
                                <option value="">Selecione</option>
                                <option value="Notebook">Notebook</option>
                                <option value="Smartphone">Smartphone</option>
                                <option value="Computadores">Computadores</option>
                                <option value="Hardware">Hardware</option>
                                <option value="Tablet">Tablet</option>
                            </DefaultSelect>
                            <Rotulo>Avaliação</Rotulo>
                            <DefaultSelect placeholder='Avaliação' >
                                <option value="">Selecione</option>
                                <option value="1">1 Estrela</option>
                                <option value="2">2 Estrelas</option>
                                <option value="3">3 Estrelas</option>
                                <option value="4">4 Estrelas</option>
                                <option value="5">5 Estrelas</option>
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
                        {
                            loading ? 
                            
                            <Loader active inline='centered' size='large'/>
                            :
                            produtos.map(produto => (
                                <Col key={produto.id} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                                    <Card produto={produto}/>
                                </Col>
                            ))                            
                        }
                    </Col>
                    
                </Row>
            </SessaoSearch>
        </>
    )
}

/* <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }}>
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
                    </Col>*/