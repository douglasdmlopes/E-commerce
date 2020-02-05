import React, { useState } from 'react';
import {Cabecalho, Imagem, Logo} from './style';
import Headroom from 'react-headroom';

import { Input, Row, Col, Layout } from 'antd';

const { Search } = Input;

const { Header } = Layout;

export default function index() {

    //const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    //const [visible, setVisible] = useState(true);

    return (
        <Headroom> 
            <Cabecalho>
                <Row>
                    <Col span={4}>
                        <Logo src="./logo.png" alt="Tech Store"/>
                        </Col>
                    <Col span={17}>
                        <Search
                            placeholder="Faça uma busca"
                            onSearch={value => console.log(value)}
                            style={{ width: '90%'}}
                        />
                    </Col>
                    <Col span={1}><Imagem src="./heart.png" alt="Tech Store" width="50px"/></Col>
                    <Col span={1}><Imagem src="./cart.png" alt="Tech Store"/></Col>
                    <Col span={1}><Imagem src="./user.png" alt="Tech Store"/></Col>
                </Row>
            </Cabecalho>
        </Headroom>
    )
}
