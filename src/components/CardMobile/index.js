import React from 'react'
import { Container, Remover, Picture, Description, Valor, Quantidade, InputNumber } from './Style';
import { Row, Col } from 'antd';
import { Tooltip, message } from 'antd';
import { MdRemove, MdAdd} from "react-icons/md";

export default function index() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }} xl={{ span: 23 }}>                        
                        <Col xs={{ span: 8 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <a href={`/product/`} > 
                                <Picture src={`/produtos/mi-10-pro-5G-1.png`} />
                            </a>
                        </Col>
                        <Col xs={{ span: 16 }} sm={{ span: 18 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                <Description>
                                    <a href={`/product/`} >
                                        <h2>Notebook Asus Vivobook X510UA</h2>
                                    </a>
                                </Description>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                <Valor>
                                    <h2>R$ 10.000,00</h2>
                                </Valor>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                <Quantidade>
                                    <h2>Quantidade: </h2>
                                    <span>
                                        <Tooltip placement="topRight" title={"Adicionar"}>
                                            <MdAdd size={25} style={{'cursor': 'pointer'}}/>
                                        </Tooltip>
                                    </span>
                                    <span>
                                        <InputNumber disabled min="1" max="8"/>
                                    </span>
                                    <span>
                                        <Tooltip placement="top" title={"Remover"}>
                                            <MdRemove size={25} style={{'cursor': 'pointer'}}/>
                                        </Tooltip>
                                    </span>
                                </Quantidade>
                            </Col>
                        </Col>
                    </Col>
                    <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }}>
                        <Remover size={22} />
                    </Col>
                </Row>            
            </Container>
            
        </>
    )
}
