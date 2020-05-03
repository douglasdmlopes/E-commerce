import React from 'react'
import {SubSessao, BotaoNormal, BotaoPadraoVerde, BotaoPadraoCinza} from '../../../styles/global';
import {NomeProduto, NomeEmpresa, Estrelas, Frete, FreteCalc, Divisoria} from './Style';
import { FaTruck } from "react-icons/fa";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Icon } from 'semantic-ui-react';
import { Row, Col, Input } from 'antd';


export default function index({produto}) {
    return (
        <>
            <SubSessao>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NomeProduto>{produto.nome}</NomeProduto>
                        <NomeEmpresa><span>Marca: </span>{produto.marca}</NomeEmpresa>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Estrelas allowHalf defaultValue={
                            produto.avaliacao != null ? produto.avaliacao : 0
                        }  size={10} disabled />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <NomeProduto>R$ {produto.preco}</NomeProduto>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Divisoria/>
                        <FreteCalc size='mini' action='Calcular' placeholder='Informe seu CEP' />
                        <Divisoria/>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <BotaoPadraoVerde size='medium' className="ui active button" style={{width: '100%'}}>
                                <Icon name='cart'  style={{fontSize: 16}}/>
                                <span style={{fontSize: 12}}>COMPRAR</span>
                            </BotaoPadraoVerde>
                            <Divisoria/>
                        </Col>
                        
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <BotaoPadraoCinza size='medium' className="ui  button" style={{width : '100%'}}>
                                <Icon name={'heart outline'}  style={{fontSize: 16}}/>
                                <span style={{fontSize: 12}}>FAVORITAR</span>
                            </BotaoPadraoCinza>
                            <Divisoria/>
                        </Col>
                        
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    </Col>
                </Row>
            </SubSessao>
        </>
    )
}
