import React, {useState} from 'react'
import {SubSessao, BotaoNormal, BotaoPadraoVerde, BotaoPadraoCinza} from '../../../styles/global';
import {NomeProduto, NomeEmpresa, Estrelas, Frete, FreteCalc, Divisoria} from './Style';
import { FaTruck } from "react-icons/fa";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Icon } from 'semantic-ui-react';
import { Row, Col, Input, message } from 'antd';


export default function Index({produto}) {
    
    const [fav, setFav] = useState('favoritar');//favoritar - favoritando - desfavoritar
    
    message.config({
        maxCount: 3,
    });

    function favoritarItem() {
        
        setFav('desfavoritar');
        message.success('Item adicionado aos favoritos', 0.9);
    }

    function desfavoritarItem(){
        
        setFav('favoritar');
        message.success('Item removido dos favoritos', 0.9);
    }

    function adicionarItemCarrinho() {
        console.log("Adicionar item ao carrinho e redirecionar usuario para o carrinho");
    }
    
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
                        <NomeProduto>R$ {produto.preco_formatado}</NomeProduto>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Divisoria/>
                        <FreteCalc size='mini' action='Calcular' placeholder='Calcular Frete' disabled />
                        <Divisoria/>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <BotaoPadraoVerde size='medium' className="ui active button" style={{width: '100%'}}
                            onClick={(event) => {
                                event.stopPropagation();
                                adicionarItemCarrinho()
                            }}>
                                <Icon name='cart'  style={{fontSize: 16}}/>
                                <span style={{fontSize: 12}}>COMPRAR</span>
                            </BotaoPadraoVerde>
                            <Divisoria/>
                        </Col>
                        
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            {
                                fav == "favoritar"  ?
                                <BotaoPadraoCinza size='medium' className="ui  button" style={{width : '100%'}}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    favoritarItem()
                                } }>
                                    <Icon name={'heart outline'}  style={{fontSize: 16}}/>
                                    <span style={{fontSize: 12}}>FAVORITAR</span>
                                </BotaoPadraoCinza>
                                :
                                (
                                    fav == "favoritando"  ?
                                        <BotaoPadraoCinza size='medium' className="ui  button" style={{width : '100%'}}
                                        disabled>
                                            <Icon name={'heart outline'}  style={{fontSize: 16}}/>
                                            <span style={{fontSize: 12}}>ADICIONANDO</span>
                                        </BotaoPadraoCinza>
                                    :
                                        <BotaoPadraoCinza size='medium' className="ui  button" style={{width : '100%'}}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            desfavoritarItem()
                                        } }>
                                            <Icon name={'heart'}  style={{fontSize: 16}}/>
                                            <span style={{fontSize: 12}}>REMOVER DOS FAVORITOS</span>
                                        </BotaoPadraoCinza>

                                )
                            }
                            
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
