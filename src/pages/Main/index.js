import React, {useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';
import LogoSlide from '../../components/LogoSlide';
import Card from '../../components/Card';
import {Sessao, TitleHome} from './style';
import { Row, Col, notification } from 'antd';

import api from '../../services/api';

import { Loader } from 'semantic-ui-react'

export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        
        async function fetchData() {
            setLoading(true);

            await api.post(`/api`)
            .then(response => {
                const dados = response.data;
                if(dados.error == 0){
                    setProdutos(dados.data);                
                }else{
                    setProdutos([]);
                }

            })
            .catch(e => {
                console.error(e);
                console.log("Erro ao tentar se conectar com o servidor");
                notification['error']({
                    message: 'Desculpe',
                    description:
                      'Ocorreu um erro ao tentar se conectar ao servidor, tente novamente mais tarde.',
                    placement: 'bottomRight'
                  });
                
            });
            
            setLoading(false);
        }
        fetchData();
        
    }, []);
    
    return (
        <>
        <Header/>
        <Slide/>
        <TitleHome>Principais Marcas</TitleHome>
        <LogoSlide/>
        <TitleHome>Produtos</TitleHome>
        <Sessao>
            <Row>
                {
                    loading ? 
                    
                    <Loader active inline='centered' size='large'/>
                         :
                    produtos.map(produto => (
                        <Col key={produto.id} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card produto={produto}/>
                        </Col>
                    ))

                }

            </Row>
        </Sessao>
        
        {
            loading ? "" : <Footer/>
        }
        
        </>
    )
}
