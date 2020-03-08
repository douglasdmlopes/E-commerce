import React from 'react'
import {SubSessao, BotaoComprar, BotaoFavoritar} from '../../../styles/global';
import {NomeProduto, NomeEmpresa, Estrelas, Frete} from './Style';
import { FaTruck } from "react-icons/fa";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";

import { Row, Col, Input } from 'antd';

const { Search } = Frete;

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
                        <Estrelas allowHalf defaultValue={2.5}  size={10} disabled />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NomeProduto>R$ 11.000,00</NomeProduto>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <BotaoComprar><TiShoppingCart size={20}/>Adicionar ao Carrinho</BotaoComprar>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <BotaoFavoritar><TiHeartOutline size={20}/>Adicionar aos Favoritos</BotaoFavoritar>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Search 
                        placeholder="Calcular Frete" 
                        prefix={<FaTruck />}
                        size="default"
                        style={{ width: 200 }}
                        loading={false}
                        enterButton />
                    </Col>
                </Row>
            </SubSessao>
        </>
    )
}
