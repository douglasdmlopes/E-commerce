import React, { useState } from 'react';
import {Cabecalho, Imagem, Logo, UserMenu} from './style';
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
                    <Col xs={8} sm={7} md={6} lg={4} xl={4}>
                        <Logo src="./logo.png" alt="Tech Store" draggable="false"/>
                        </Col>
                    <Col xs={10} sm={12} md={13} lg={16} xl={16}>
                        <Search
                            placeholder="Faça uma busca"
                            onSearch={value => console.log(value)}
                            style={{ width: '90%'}}
                        />
                    </Col>
                    <Col xs={6} sm={5} md={5} lg={4} xl={4}>
                        <UserMenu>
                            <Imagem src="./heart.png" alt="Tech Store" width="50px" draggable="false"/>
                            <Imagem src="./cart.png" alt="Tech Store" draggable="false"/>
                            <Imagem src="./user.png" alt="Tech Store" draggable="false"/>
                        </UserMenu>
                    </Col>
                </Row>
            </Cabecalho>
        </Headroom>
    )
}
