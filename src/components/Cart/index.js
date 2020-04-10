import React from 'react';
import { Popover } from 'antd';
import { ListaPopOverCart, BotaoPadrao, BotaoRemover, FormControlCartHeader } from '../../styles/global';
import { TiShoppingCart } from "react-icons/ti";
import { MdClose} from "react-icons/md";
import { Link } from 'react-router-dom';
import { InputNumber } from 'antd';
import {Total} from './Style';

import { Row, Col, Tooltip, Select  } from 'antd';

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

const { Option } = Select;

export default function index() {

    const content = (<>
        <ListaPopOverCart style={{maxHeight: 350, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>     
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div className="div-img"><img src="/produto.png" alt="produto" draggable="false"/></div>
                        <div className="div-content"><span>Xiaomi Mi mix Aupha 2020</span></div>
                        <div className="total-card-pop">
                            <FormControlCartHeader style={{ display: 'inline' }}>
                                <Select  defaultValue="01" onChange={handleChange} style={{ width: 60, height: 20}}>
                                
                                    <Option value="1">01</Option>
                                    <Option value="2">02</Option>
                                    <Option value="3">03</Option>
                                    <Option value="4">04</Option>
                                
                                </Select>
                            </FormControlCartHeader>
                            <span>R$ 11.000,00</span>
                        </div>
                        
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            
        </ListaPopOverCart>
        <div style={{marginTop: 20, textAlign: "center"}}>
            <Total><span className="total">TOTAL:</span><span>R$ 11.000,00</span></Total>
        </div>
        <div style={{marginTop: 20, textAlign: "center"}}>
            <Link to={`/cart`} ><BotaoPadrao>Abrir Carrinho</BotaoPadrao></Link>
        </div>
        </>);


    return (
        <>
            <Popover placement="bottom" content={content} title="Carrinho" style="max-height: 200px !important;" trigger="click">
                <TiShoppingCart size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
