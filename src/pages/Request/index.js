import React from 'react';
import Header from '../../components/Header';
import { Sessao } from '../../styles/global';
import { Row, Col  } from 'antd';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function index() {
    return (
        <div>
            <Header/>
            <Sessao>
                <Row>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Endereço</h2>
                        <Form size={"mini"}>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' value="Nome completo" disabled/>
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' disabled/>
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' disabled/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Col>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Endereço</h2>
                    </Col>
                    <Col  xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2>Endereço</h2>
                    </Col>
                </Row>
            </Sessao>
        </div>
    )
}
