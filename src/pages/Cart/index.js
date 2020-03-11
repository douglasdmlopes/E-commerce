import React from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, BotaoListagem, Titulo} from '../../styles/global';
import { Row, Col, Tooltip  } from 'antd';
import { Link } from 'react-router-dom';
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";
import Footer from '../../components/Footer';

export default function index() {
    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Carrinho</Titulo>
            <Row>
            
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>
                
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover dos favoristos"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover dos favoristos"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover dos favoristos"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover dos favoristos"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="top" title={"Adicionar ao Carrinho"}>
                                <BotaoListagem>
                                    <TiShoppingCart size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <Tooltip placement="topRight" title={"Remover dos favoristos"}>
                                <BotaoListagem>
                                    <MdClose size={22} color="#515151" cursor="pointer"/>
                                </BotaoListagem>
                            </Tooltip>
                        </Col>
                    </li>
                </Col>
            </Row>
            </SessaoListaProdutos>
            <Footer/>
        </>
    )
}
/*
 Carrinho:
            Possui botão realizar pedido que manda para a página "Pedido"
            Na página de pedido (request) deve conter:

            Listagem de produtos (com quantidade) selecionados
            Endereço (Não editavel)
            Forma de pagamento
            botão "finalizar pedido"
*/