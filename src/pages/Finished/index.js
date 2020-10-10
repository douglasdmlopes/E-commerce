import React from 'react';
import { Result, Button } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { BotaoPadraoVerde} from '../../styles/global';
import { Icon } from 'semantic-ui-react';

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
                    <>
                <Link to={'/'}>
                    <BotaoPadraoVerde style={{width: 150}}>
                    <Icon name='home'  style={{fontSize: 16}}/>Início</BotaoPadraoVerde>
                </Link>
                <Link to={'/requests'}>
                    <BotaoPadraoVerde style={{width: 150}}><Icon name='box'  style={{fontSize: 16}}/>Pedidos</BotaoPadraoVerde>
                </Link>
                </>,
                ]}
            />,
            <Footer/>
        </>
    )
}
