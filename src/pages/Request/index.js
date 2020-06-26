import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { SessaoPedido, Direita, FormControl, ListagemProdutos, HorizontalPadding, LinhaDivisoria, Divisoria, Titulo } from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { BotaoPadraoVerde} from '../../styles/global';
import CardMobile from '../../components/CardMobile';
import {  TotalCarrinho} from "./Style";

function handleChange(value) {
    console.log(`Selected: ${value}`);
}
  
const { Option } = Select;

export default function Index() {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {

        handleUpdate();

    }, []);

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);

    function showDrawer() {
        
        handleUpdate();        
        setVisible(true);

    };

    function onClose() {
        setVisible(false);
    };

    function handleUpdate(){

        let cart = JSON.parse(localStorage.getItem("cart"));
        
        if(cart == null){
            localStorage.setItem("cart", JSON.stringify([]));
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        setCarrinho(cart);

        let total = 0;

        cart.map(produto => (
            total += (parseFloat(produto.qtde) * parseFloat(produto.preco))
        ));

        setTotal(total);

        if(total == 0){
            window.location.replace('/');
        }

    }

    return (
        <div>
            <Header/>
            <SessaoPedido>
            <Titulo>Confirme seu pedido</Titulo>
                <Row style={{minHeight: 'calc(100vh - 280px)'}}>
                <Col  xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Divisoria>
                        <h2>Produtos</h2>
                        
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            {carrinho.map(produto => (
                                <CardMobile key={produto.id} produto={produto} handleUpdate={ () => {handleUpdate()}}/>
                            ))}
                        </Col>

                        <TotalCarrinho>
                            <h2><span>TOTAL: R$</span>{total.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h2>
                        </TotalCarrinho>
                            
                            
                        </Divisoria>
                    </Col>
                    <Col  xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Divisoria>
                        <h2>Entrega</h2>
                        <Form size={"mini"}>
                            <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                                <HorizontalPadding>
                                <Form.Field>
                                    <label>CEP</label>
                                    <input placeholder='First Name' value="00000-000" disabled/>
                                </Form.Field>
                                </HorizontalPadding>
                            </Col>
                            <Col  xs={24} sm={24} md={16} lg={16} xl={16}>
                            <HorizontalPadding>
                                <Form.Field>
                                    <label>Estado</label>
                                    <input placeholder='First Name' value="XXXXXX" disabled/>
                                </Form.Field>
                                </HorizontalPadding>
                            </Col>
                            <HorizontalPadding>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Field>
                                    <label>Cidade</label>
                                    <input placeholder='Last Name' value="XXXXXX"  disabled/>
                                </Form.Field>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Field>
                                    <label>Bairro</label>
                                    <input placeholder='Last Name' value="XXXXXX" disabled/>
                                </Form.Field>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Field>
                                    <label>Rua</label>
                                    <input placeholder='Last Name' value="XXXXXX" disabled/>
                                </Form.Field>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Form.Field>
                                    <label>Número</label>
                                    <input placeholder='First Name' value="XXXXXX" disabled/>
                                </Form.Field>
                            </Col>
                            </HorizontalPadding>
                        </Form>
                        </Divisoria>
                    </Col>
                    <Col  xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Divisoria>
                        <h2>Pagamento</h2>
                        <Form size={"mini"}>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <HorizontalPadding>
                                <Form.Field>
                                    <label>Nome do Titular do cartão</label>
                                    <Input icon='user' 
                                    value="XXXXXXXXXXXXXX"
                                    iconPosition='left' disabled placeholder='Número do cartão...' />
                                </Form.Field>
                                </HorizontalPadding>
                            </Col>
                            <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                                <HorizontalPadding>
                                <Form.Field>
                                    <label>Número do cartão</label>
                                    <Input icon='cc mastercard' 
                                    value="0000 0000 0000 0000"
                                    iconPosition='left' disabled placeholder='Número do cartão...' />
                                </Form.Field>
                                </HorizontalPadding>
                            </Col>
                            
                                
                            <Form.Field>
                            <HorizontalPadding>
                            <Form.Field>
                                <label>Vencimento</label>
                                </Form.Field>
                                </HorizontalPadding>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}><HorizontalPadding>
                                    <Input icon='calendar check outline' 
                                    value="00"
                                    iconPosition='left' disabled/></HorizontalPadding>
                                    </Col>
                                
                                
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12}><HorizontalPadding>
                                <Input icon='calendar alternate outline' 
                                iconPosition='left'
                                value="0000" disabled/></HorizontalPadding>
                                </Col>
                                
                            </Form.Field>

                        </Form>
                        </Divisoria>
                    </Col>
                </Row>
                <Row>
                <LinhaDivisoria></LinhaDivisoria>
                </Row>
                <Row>
                    <Direita>
                    <Link to={`/finished`} >
                        <BotaoPadraoVerde>Finalizar</BotaoPadraoVerde>
                    </Link>
                    </Direita>
                </Row>
            </SessaoPedido>
        </div>
    )
}
