import React, { useState } from 'react';
import {Cabecalho, Imagem, Logo, UserMenu} from './style';
import Headroom from 'react-headroom';

import { TiShoppingCart, TiUser, TiHeartFullOutline} from "react-icons/ti";

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
                    <Col xs={8} sm={6} md={6} lg={4} xl={4}>
                        <Logo src="./logo.png" alt="Tech Store" draggable="false"/>
                        </Col>
                    <Col xs={10} sm={12} md={13} lg={16} xl={16}>
                        <Search
                            placeholder="Faça uma busca"
                            onSearch={value => console.log(value)}
                            style={{ width: '90%'}}
                        />
                    </Col>
                    <Col xs={6} sm={6} md={5} lg={4} xl={4}>
                        <UserMenu>
                            
                            <TiHeartFullOutline size={40} color="#fff"/>
                            <TiShoppingCart size={40} color="#fff"/>
                            <TiUser size={40} color="#fff"/>

                            
                        </UserMenu>
                    </Col>
                </Row>
            </Cabecalho>
        </Headroom>
    )
}
