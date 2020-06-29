import React from 'react';
import { Result, Button } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { BotaoPadraoVerde} from '../../styles/global';

export default function index() {
    return (
        <>
            <Header/>
            <Result
                status="success"
                title="Pedido realizado com sucesso!"
                subTitle="Processo em andamento."
                style={{minHeight : 'calc(100vh - 174px)'}}
                extra={[
                <Link to={'/'}>
                    <BotaoPadraoVerde>Voltar para a página principal</BotaoPadraoVerde>
                </Link>,
                ]}
            />,
            <Footer/>
        </>
    )
}
