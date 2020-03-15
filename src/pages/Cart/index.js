import React from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, BotaoListagem, Titulo, FormControl, BotaoFinalizar} from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Link } from 'react-router-dom';
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";
import Footer from '../../components/Footer';
import {FloatRight} from './Style';

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  const { Option } = Select;

   

export default function index() {
    
    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Carrinho</Titulo>
            <Row>
            
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <li>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                            <Link to={`/product/1`} >
                                <img src="/produto.png" alt="produto" draggable="false"/>
                                <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
                        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                        <Link to={`/product/1`} >
                            <img src="/produto.png" alt="produto" draggable="false"/>
                            <span>Xiaomi Mi mix Aupha 2020</span>
                            </Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Tooltip placement="top" title={"Quantidade"}>
                            <FormControl>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }}>
                                    
                                <Option value="1">01</Option>
                                <Option value="2">02</Option>
                                <Option value="3">03</Option>
                                <Option value="4">04</Option>
                                
                                </Select>
                                </FormControl>
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
            <Row>
                <FloatRight>
                    <Link to={`/request`} >
                        <BotaoFinalizar><TiShoppingCart size={20}/>Finalizar Pedido</BotaoFinalizar>
                    </Link>
                </FloatRight>
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