import React from 'react';
import Header from '../../components/Header';
import { SessaoPedido, Direita, FormControl, BotaoListagem } from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  const { Option } = Select;

   

export default function index() {
    return (
        <div>
            <Header/>
            <SessaoPedido>
                <Row>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Endereço</h2>
                        <Form size={"mini"}>
                        <Form.Field>
                                <label>CEP</label>
                                <input placeholder='First Name' value="00000-000" disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Estado</label>
                                <input placeholder='First Name' value="XXXXXX" disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Cidade</label>
                                <input placeholder='Last Name' value="XXXXXX"  disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Bairro</label>
                                <input placeholder='Last Name' value="XXXXXX" disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Rua</label>
                                <input placeholder='Last Name' value="XXXXXX" disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Número</label>
                                <input placeholder='First Name' value="XXXXXX" disabled/>
                            </Form.Field>
                        </Form>
                    </Col>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Produtos</h2>
                        
                    </Col>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Pagamento</h2>
                    </Col>
                </Row>
                <Row>
                    <Direita>
                    <Button type='submit'>Finalizar</Button>
                    </Direita>
                </Row>
            </SessaoPedido>
        </div>
    )
}
