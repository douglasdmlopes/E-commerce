import React, { Component }  from 'react'
import { Container, Remover, Picture, Description, Valor } from './style';
import { Row, Col } from 'antd';
import { message } from 'antd';

export default class Index extends Component {
//export default function index() {

    constructor(props){
        super(props);
    }
    
    render(){
        console.log('pedido');
        console.log(this.props);
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }} xl={{ span: 23 }}>                        
                            <Col xs={{ span: 8 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 6 }} xl={{ span: 6 }}>
                                <a href={`/product/` + this.props.produto.id} > 
                                    <Picture src={`/produtos/${this.props.produto.id_img_01}.png`} />
                                </a>
                            </Col>
                            <Col xs={{ span: 16 }} sm={{ span: 18 }} md={{ span: 20 }} lg={{ span: 18 }} xl={{ span: 18 }}>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Pedido: {this.props.produto.numero}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Data: {this.props.produto.data}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Status: {this.props.produto.status}</h2>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <h2>Valor: {this.props.produto.total}</h2>
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
