import React, {useState, useEffect} from 'react'
import {SubSessao, BotaoNormal, BotaoPadraoVerde, BotaoPadraoCinza} from '../../../styles/global';
import {NomeProduto, NomeEmpresa, Estrelas, Frete, FreteCalc, Divisoria} from './Style';
import { FaTruck } from "react-icons/fa";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Icon } from 'semantic-ui-react';
import { Row, Col, Input, message } from 'antd';


export default function Index({produto}) {
    
    const [botao, setBotao] = useState('comprar');//comprar - carregando - remover
    const [fav, setFav] = useState('favoritar');//favoritar - favoritando - desfavoritar
    
    message.config({
        maxCount: 3,
    });

    useEffect(() => {

        let cart = JSON.parse(localStorage.getItem("cart"));
        let favorites = JSON.parse(localStorage.getItem("favorites"));

        if(cart == null){
            localStorage.setItem("cart", JSON.stringify([]));
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        if(favorites == null){
            localStorage.setItem("favorites", JSON.stringify([]));
            favorites = JSON.parse(localStorage.getItem("favorites"));
        }
        
        cart.forEach(function(item) {
            if (produto.id == item.id) {
                setBotao('remover');
            }
        });

        favorites.forEach(function(item) {
            if (produto.id == item.id) {
                setFav('desfavoritar');
            }
        });

    }, []);


    function favoritarItem() {

        let favoritos = {};
                
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        favoritos.push(produto);
                
        localStorage.setItem("favorites", JSON.stringify(favoritos));
        
        setFav('desfavoritar');
        message.success('Item adicionado aos favoritos', 0.9);
    }

    function desfavoritarItem(){

        let favoritos =[];        
        
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        let favoritos_temp = [];

        favoritos.forEach(function(item) {
            if (produto.id != item.id) {
                favoritos_temp.push(item);
            }
        });

        localStorage.setItem("favorites", JSON.stringify(favoritos_temp));
        
        setFav('favoritar');
        message.success('Item removido dos favoritos', 0.9);
    }

    function adicionarItemCarrinho() {

        let carrinho = {};
                
        carrinho = JSON.parse(localStorage.getItem("cart"));

        produto.qtde = 1;
        
        carrinho.push(produto);
                
        localStorage.setItem("cart", JSON.stringify(carrinho));
        
        setBotao('carregando');

        window.setTimeout(() => {
            setBotao('remover');
            message.success('Item adicionado ao carrinho', 0.9);
        }, 10);

        window.setTimeout(() => {
            window.location.replace('/request');
        }, 200);

        
    }

    function removerItemCarrinho(){
        let carrinho =[];        
        
        carrinho = JSON.parse(localStorage.getItem("cart"));

        let carrinho_temp = [];

        carrinho.forEach(function(item) {
            if (produto.id != item.id) {
                carrinho_temp.push(item);
            }
        });

        localStorage.setItem("cart", JSON.stringify(carrinho_temp));

        setBotao('carregando');

        window.setTimeout(() => {
            setBotao('comprar');
            message.success('Item removido do carrinho', 0.9);
        }, 10);
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
                            produto.avaliacao == null ? 0 : produto.avaliacao
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
                            {
                                botao == 'comprar' ?

                                <BotaoPadraoVerde size='medium' className="ui active button" style={{width: '100%'}}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        adicionarItemCarrinho()
                                    }}>
                                    <Icon name='cart'  style={{fontSize: 16}}/>
                                    <span style={{fontSize: 12}}>COMPRAR</span>
                                </BotaoPadraoVerde>

                                :

                                <BotaoPadraoVerde size='medium' className="ui active button" style={{width: '100%'}}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    removerItemCarrinho()
                                }}>
                                    <Icon name='cart'  style={{fontSize: 16}}/>
                                    <span style={{fontSize: 12}}>REMOVER DO CARRINHO</span>
                                </BotaoPadraoVerde>

                            }
                            
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
