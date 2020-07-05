import React, { Component }  from 'react'
import { Container, Description, Valor } from './style';
import { Row, Col } from 'antd';
import { FaCheckCircle } from "react-icons/fa";

export default class Index extends Component {
//export default function index() {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }} xl={{ span: 23 }}>                        
                            <Col xs={{ span: 7 }} sm={{ span: 4 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }}>
                                <div style={{'textAlign' : 'center'}}>
                                    <FaCheckCircle color="#05b934" size="80" />
                                </div>
                            </Col>
                            <Col xs={{ span: 17 }} sm={{ span: 20 }} md={{ span: 21 }} lg={{ span: 21 }} xl={{ span: 21 }}>
                                <Col xs={{ span: 14 }} sm={{ span: 16 }} md={{ span: 18 }} lg={{ span: 19 }} xl={{ span: 19 }}>
                                    <Description>
                                        <h2>Pedido: {this.props.produto.numero}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 10 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 5 }} xl={{ span: 5 }}>
                                    <Description style={{'textAlign': 'right'}}>
                                        <h2>{this.props.produto.data}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Status: {this.props.produto.status}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Valor: R$ {this.props.produto.total}</h2>
                                    </Description>
                                </Col>
                                
                            </Col>
                        </Col>
                        <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }}>
                            
                        </Col>
                    </Row>            
                </Container>
                
            </>
        )
    }
}
