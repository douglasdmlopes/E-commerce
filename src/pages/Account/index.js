import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, Titulo} from '../../styles/global';
import { Row  } from 'antd';
import Footer from '../../components/Footer';
import { IconeSpace, Desc } from './Style';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BotaoPadraoVerde} from '../../styles/global';
import { Icon } from 'semantic-ui-react';

export default function Index() {
    
    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Conta</Titulo>
            <Row>
                <IconeSpace>
                    <FaExclamationTriangle size={90} />
                    <Desc>
                        <h2>Esta simulação não lida com dados referentes ao usuário, portanto esta página não está disponível</h2>
                    </Desc>
                    <Link to={'/'}>
                        <BotaoPadraoVerde style={{width: 150}}>
                        <Icon name='home'  style={{fontSize: 16}}/>Início</BotaoPadraoVerde>
                    </Link>
                </IconeSpace>
            </Row>
            </SessaoListaProdutos>
            <Footer/>
        </>
    )
}
