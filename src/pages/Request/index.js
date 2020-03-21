import React from 'react';
import Header from '../../components/Header';
import { SessaoPedido, Direita, FormControl, ListagemProdutos, HorizontalPadding, LinhaDivisoria, Divisoria, Titulo } from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  const { Option } = Select;

   

export default function index() {
    return (
        <div>
            <Header/>
            <SessaoPedido>
            <Titulo>Confira e finalize seu pedido</Titulo>
                <Row>
                    <Col  xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Divisoria>
                        <h2>Endereço</h2>
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
                        <h2>Produtos</h2>
                        <ListagemProdutos>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <li>
                                    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                        <Link to={`/product/1`} >
                                            <img src="/produto.png" alt="produto" draggable="false"/>
                                            <span>Xiaomi Mi mix Aupha 2020</span>
                                        </Link>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                        <Tooltip placement="top" title={"Quantidade"}>
                                        <FormControl>
                                            <Select  defaultValue="01" onChange={handleChange} style={{ width: 60 }} disabled>
                                                
                                            <Option value="1">01</Option>
                                            <Option value="2">02</Option>
                                            <Option value="3">03</Option>
                                            <Option value="4">04</Option>
                                            
                                            </Select>
                                            </FormControl>
                                        </Tooltip>
                                    </Col>
                                </li>
                            </Col>
                            
                        </ListagemProdutos>
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
                        <Button type='submit' style={{background: "#057A44", color: "#fff"}}>Finalizar</Button>
                    </Link>
                    </Direita>
                </Row>
            </SessaoPedido>
        </div>
    )
}
