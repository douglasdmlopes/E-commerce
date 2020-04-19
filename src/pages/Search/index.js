import React from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos,  Titulo} from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import Footer from '../../components/Footer';
   

export default function index() {
    
    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Busca</Titulo>
            <Row>
            
            
                
            </Row>
            </SessaoListaProdutos>
            <Footer/>
        </>
    )
}