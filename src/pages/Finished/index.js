import React from 'react';
import { Result, Button } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <>
            <Header/>
            <Result
                status="success"
                title="Pedido realizado com sucesso!"
                subTitle="Processo em andamento."
                extra={[
                <Link to={'/'}>
                <Button key="buy">Voltar para a página principal</Button>
                </Link>,
                ]}
            />,
            <Footer/>
        </>
    )
}
