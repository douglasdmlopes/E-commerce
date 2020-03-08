import React from 'react'
import {SubSessao, BotaoComprar} from '../../../styles/global';
import {NomeProduto, NomeEmpresa} from './Style';
import { FaTruck } from "react-icons/fa";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Row, Col, Rate, Input } from 'antd';

const { Search } = Input;


export default function index() {
    return (
        <>
            <SubSessao>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NomeProduto>Xiaomi MI MIX ALPHA</NomeProduto>
                        <NomeEmpresa><span>Marca: </span>Xiaomi</NomeEmpresa>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Rate allowHalf defaultValue={2.5} disabled />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NomeProduto>R$ 11.000,00</NomeProduto>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <BotaoComprar  icon={<ShoppingCartOutlined />}><TiShoppingCart size={20}/>Adicionar ao Carrinho</BotaoComprar>
                        <Search placeholder="Calcular Frete" prefix={<FaTruck />} loading enterButton />
                    </Col>
                </Row>
            </SubSessao>
        </>
    )
}
