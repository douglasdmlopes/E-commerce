import React, {useState, useEffect } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Description from '../../components/Product/Description';
import Info from '../../components/Product/Info';
import Pictures from '../../components/Product/Pictures';
import Rating from '../../components/Product/Rating';
import Specification from '../../components/Product/Specification';
import { Loader } from 'semantic-ui-react';
import {Sessao} from '../../styles/global';

import { Row, Col, notification } from 'antd';
import api from '../../services/api';
import { useParams } from "react-router-dom";

export default function Index() {

    
    let { id_produto } = useParams();
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        async function fetchData() {
            
            setLoading(true);

            if(id_produto != undefined){
                
                let produtos = JSON.parse(localStorage.getItem("produtos"));

                produtos.forEach(function(produto) {
                    if (produto.id == id_produto) {
                        setProduto(produto);
                        return false;
                    }
                })
               
                /*
                await api.post(`/api`, {id : id_produto})
                .then(response => {

                    const dados = response.data;
                    //console.log(dados.data);
                    if(dados.error == 0){
                        dados.data.map(produto => (
                            setProduto(produto)
                        ));
                    }else{
                        setProduto([]);
                    }
                    
                })
                .catch(e => {
                    console.error(e);
                    
                    notification['error']({
                        message: 'Desculpe',
                        description:
                        'Ocorreu um erro ao tentar se conectar ao servidor, tente novamente mais tarde.',
                        placement: 'bottomRight'
                    });
                    
                });*/
                setLoading(false);
            }else{
                setLoading(false);
            }
            
            
        }
        fetchData();
        
    }, []);

    return (
        <>
        <Header/>
        <Sessao>
        {
            loading ? 
            
            <Loader active inline='centered' size='large'/>
            :
            <Row>
                <Col xs={24} sm={11} md={16} lg={16} xl={16}>
                    <Pictures produto={produto}/>
                </Col>
                <Col xs={24} sm={13} md={8} lg={8} xl={8}>
                    <Info produto={produto}/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Description produto={produto}/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Specification/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Rating produto={produto}/>
                </Col>
            </Row>
        }
        </Sessao>
        {
            loading ? 
                ""
            :
                <Footer/> 
        }
                  
        </>
    )
}
