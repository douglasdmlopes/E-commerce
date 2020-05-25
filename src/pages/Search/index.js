import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {SessaoSearch,  Titulo, BotaoPadraoVerde, DefaultSelect, DefaultInput} from '../../styles/global';
import { Row, Col, Drawer, notification} from 'antd';
import api from '../../services/api';
import { FormFiltros, FormFiltrosMobile, Rotulo, NotFound } from './Style';
import { Icon } from 'semantic-ui-react';
import { useParams } from "react-router-dom";
import Card from '../../components/Card';
import { BsSearch } from "react-icons/bs";

import { Loader } from 'semantic-ui-react';

export default function Index() {

    const [visible, setVisible] = useState(false);

    let { termo } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [termoBusca, setTermoBusca] = useState('')

    const [filtroMarca, setFiltroMarca] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroAvaliacao, setFiltroAvaliacao] = useState('');
    const [filtroPrecoInicial, setFiltroPrecoInicial] = useState('');
    const [filtroPrecoFinal, setFiltroPrecoFinal] = useState('');

    useEffect(() => {

        setLoading(true);

        let produtos = JSON.parse(localStorage.getItem("produtos"));

        let separador = termo.indexOf("=") + 1;

        let tipo = termo.substring(0,termo.indexOf("="));

        termo = termo.substr(separador);

        let busca = {};

        if(tipo == 'marca'){
            let dados_temp = [];
            produtos.forEach(function(produto) {
                if (produto.marca == termo) {
                    dados_temp.push(produto);
                }
            });
            setProdutos(dados_temp);
            setTermoBusca(termo);
        }else if(tipo == 'termo'){
            let dados_temp = [];
            produtos.forEach(function(produto) {
                if (produto.nome.toUpperCase().indexOf(termo.toUpperCase()) != -1) {
                    dados_temp.push(produto);
                }
            });
            setProdutos(dados_temp);
            setTermoBusca(termo);
        }else if(tipo == 'categoria'){
            let dados_temp = [];
            produtos.forEach(function(produto) {
                if (produto.tipo.toUpperCase().indexOf(termo.toUpperCase()) != -1) {
                    dados_temp.push(produto);
                }
            });
            setProdutos(dados_temp);
            setTermoBusca(termo);
        }

        window.setTimeout(() => {setLoading(false)}, 300);
        
        














/*
        async function fetchData() {
            
            let separador = termo.indexOf("=") + 1;
            let tipo = termo.substring(0,termo.indexOf("="))
            termo = termo.substr(separador);
            let busca = {};

            if(tipo == 'marca'){
                busca = {
                    marcas : termo
                }
                setTermoBusca(termo);
            }else if(tipo == 'termo'){
                busca = {
                    nome : termo
                }
                setTermoBusca(termo);
            }else if(tipo == 'categoria'){
                busca = {
                    tipo : termo
                }
            }

            setLoading(true);

            if(termo != undefined){
                await api.post(`/api`, busca)
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
                    
                    notification['error']({
                        message: 'Desculpe',
                        description:
                        'Ocorreu um erro ao tentar se conectar ao servidor, tente novamente mais tarde.',
                        placement: 'bottomRight'
                    });
                    
                });
                setLoading(false);
            }else{
                setLoading(false);
            }            
            
        }
        fetchData();*/
        
    }, []);

    function showDrawer() {
        setVisible(true);
    };

    function onClose() {
        setVisible(false);
    };

    async function filtrarDados() {
        
        setVisible(false);
        
        let busca = {
            marcas : filtroMarca,//
            tipo: filtroTipo,//
            avaliacao: filtroAvaliacao,
            preco_min: filtroPrecoInicial,
            preco_max: filtroPrecoFinal,
        }


        let separador = termo.indexOf("=") + 1;
        let tipo = termo.substring(0,termo.indexOf("="))
        termo = termo.substr(separador);
        
        if(filtroMarca != ''){
            setTermoBusca(filtroMarca);
        }

        
        setLoading(true);

        let produtos = JSON.parse(localStorage.getItem("produtos"));

        let dados_temp = [];

        if(tipo == 'marca' && filtroMarca == ''){            
            
            produtos.forEach(function(produto) {
                if (produto.marca == termo) {
                    dados_temp.push(produto);
                }
            });
            setTermoBusca(termo);
            
        }else if(tipo == 'termo' && filtroTipo == ''){
            
            produtos.forEach(function(produto) {
                if (produto.nome.toUpperCase().indexOf(termo.toUpperCase()) != -1) {
                    dados_temp.push(produto);
                }
            });
            setTermoBusca(termo);
        }else if(tipo == 'categoria' && filtroTipo == ''){
            produtos.forEach(function(produto) {
                if (produto.tipo.toUpperCase().indexOf(termo.toUpperCase()) != -1) {
                    dados_temp.push(produto);
                }
            });
            setTermoBusca(termo);
        }else{
            dados_temp = produtos;
        }

        let dados_temp_prod = [];

        /*
        let busca = {
            marcas : filtroMarca,//
            tipo: filtroTipo,//
            avaliacao: filtroAvaliacao,
            preco_min: filtroPrecoInicial,
            preco_max: filtroPrecoFinal,
        }
        */

        dados_temp.forEach(function(produto) {
            
            let adicionar = false;
            let ignorar = false;
            if (busca.marcas != "" && busca.marcas != null) {console.log(1)
                if (produto.marca.toUpperCase().indexOf(busca.marcas.toUpperCase()) != -1) {
                    adicionar = true;
                }else{
                    adicionar = false;
                    ignorar = true;
                }
            }

            if (busca.tipo != "" && busca.tipo != null && !ignorar) {console.log(2)
                if (produto.tipo.toUpperCase().indexOf(busca.tipo.toUpperCase()) != -1) {
                    adicionar = true;
                }else{
                    adicionar = false
                    ignorar = true;
                }
            }

            if (busca.avaliacao != "" && busca.avaliacao != null && !ignorar) {console.log(3)
                
                if (parseInt(produto.avaliacao) == parseInt(busca.avaliacao) ) {
                    adicionar = true;
                }else{
                    adicionar = false;
                    ignorar = true;
                }
            }
            
            if (busca.preco_min != "" && busca.preco_min != null && !ignorar) {
                
                if (parseFloat(produto.preco) >= parseFloat(busca.preco_min) ) {
                    adicionar = true;
                }else{
                    adicionar = false;
                    ignorar = true;
                }
            }

            if (busca.preco_max != "" && busca.preco_max != null && !ignorar) {
                
                if (parseFloat(produto.preco) <= parseFloat(busca.preco_max) ) {
                    adicionar = true;
                }else{
                    adicionar = false;
                    ignorar = true;
                }
            }
            
            if(adicionar == true || (busca.avaliacao == "" && busca.tipo == ""  && busca.marcas == "" && busca.preco_min == "" && busca.preco_max == "")){
                dados_temp_prod.push(produto);
            }
            
        });
        
        setProdutos(dados_temp_prod);
        window.setTimeout(() => {setLoading(false)}, 300);
        
        
    }  

    return (
        <>
            <Header/>
            <SessaoSearch>
                <Titulo>{termoBusca}</Titulo>
                
                    <FormFiltrosMobile>
                        <BotaoPadraoVerde onClick={showDrawer}>
                            <Icon name='filter'  style={{fontSize: 14, color: '#fff'}}/>
                            <span style={{fontSize: 14}}>Filtrar</span>
                        </BotaoPadraoVerde>
                        <Drawer
                            title="Filtrar busca"
                            width={270}
                            onClose={onClose}
                            visible={visible}
                            bodyStyle={{ padding: 0}}
                            placement="right"
                            
                        >
                            <div style={{paddingLeft: '5px', paddingTop: '10px'}}>
                                <Rotulo>Marca</Rotulo>
                                <DefaultSelect placeholder='Marca' value={filtroMarca} onChange={
                                    (event) =>{
                                        setFiltroMarca(event.target.value)
                                    }
                                }>
                                    <option value="">Selecione</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Lenovo">Lenovo</option>
                                    <option value="Motorola">Motorola</option>
                                    <option value="LG">LG</option>
                                    <option value="Positivo">Positivo</option>
                                    <option value="Sony">Sony</option>
                                    <option value="Dell">Dell</option>
                                    <option value="Multilaser">Multilaser</option>
                                </DefaultSelect>
                                <Rotulo>Tipo</Rotulo>
                                <DefaultSelect placeholder='Tipo' value={filtroTipo} onChange={
                                (event) =>{
                                    setFiltroTipo(event.target.value)
                                }
                            }>
                                    <option value="">Selecione</option>
                                    <option value="Notebook">Notebook</option>
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Computadores">Computadores</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Tablet">Tablet</option>
                                </DefaultSelect>
                                <Rotulo>Avaliação</Rotulo>
                                <DefaultSelect placeholder='Avaliação' value={filtroAvaliacao} onChange={
                                (event) =>{
                                    setFiltroAvaliacao(event.target.value)
                                }
                            }>
                                    <option value="">Selecione</option>
                                    <option value="1">1 Estrela</option>
                                    <option value="2">2 Estrelas</option>
                                    <option value="3">3 Estrelas</option>
                                    <option value="4">4 Estrelas</option>
                                    <option value="5">5 Estrelas</option>
                                </DefaultSelect>
                                <Rotulo>Faixa de preço</Rotulo>
                                <DefaultInput type="number" placeholder="Preço minimo" 
                                value={filtroPrecoInicial}
                                onChange={
                                    (event) =>{
                                        setFiltroPrecoInicial(event.target.value)
                                    }
                                }/>
                                <DefaultInput type="number" placeholder="Preço máximo" 
                                value={filtroPrecoFinal}
                                onChange={
                                    (event) =>{
                                        setFiltroPrecoFinal(event.target.value)
                                    }
                                }/>
                                <BotaoPadraoVerde onClick={filtrarDados} style={{width: '98%'}}>
                                    <span style={{fontSize: 16}}>Buscar</span>
                                </BotaoPadraoVerde>
                            </div>
                        </Drawer>
                    </FormFiltrosMobile>
                
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                        <FormFiltros>
                            <Rotulo>Marca</Rotulo>
                            <DefaultSelect placeholder='Marca' value={filtroMarca} onChange={
                                (event) =>{
                                    setFiltroMarca(event.target.value)
                                }
                            } >
                                <option value="">Selecione</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Motorola">Motorola</option>
                                <option value="LG">LG</option>
                                <option value="Positivo">Positivo</option>
                                <option value="Sony">Sony</option>
                                <option value="Dell">Dell</option>
                                <option value="Multilaser">Multilaser</option>
                            </DefaultSelect>
                            <Rotulo>Tipo</Rotulo>
                            <DefaultSelect placeholder='Tipo' value={filtroTipo} onChange={
                                (event) =>{
                                    setFiltroTipo(event.target.value)
                                }
                            }>
                                <option value="">Selecione</option>
                                <option value="Notebook">Notebook</option>
                                <option value="Smartphone">Smartphone</option>
                                <option value="Computadores">Computadores</option>
                                <option value="Hardware">Hardware</option>
                                <option value="Tablet">Tablet</option>
                            </DefaultSelect>
                            <Rotulo>Avaliação</Rotulo>
                            <DefaultSelect placeholder='Avaliação' value={filtroAvaliacao} onChange={
                                (event) =>{
                                    setFiltroAvaliacao(event.target.value)
                                }
                            }>
                                <option value="">Selecione</option>
                                <option value="1">1 Estrela</option>
                                <option value="2">2 Estrelas</option>
                                <option value="3">3 Estrelas</option>
                                <option value="4">4 Estrelas</option>
                                <option value="5">5 Estrelas</option>
                            </DefaultSelect>
                            <Rotulo>Faixa de preço</Rotulo>
                            <DefaultInput 
                                type="number" 
                                placeholder="Preço minimo"
                                value={filtroPrecoInicial}
                                onChange={
                                    (event) =>{
                                        setFiltroPrecoInicial(event.target.value)
                                    }
                                }
                            />
                            <DefaultInput 
                                type="number"
                                placeholder="Preço máximo"
                                value={filtroPrecoFinal}
                                onChange={
                                    (event) =>{
                                        setFiltroPrecoFinal(event.target.value)
                                    }
                                }    
                            />
                            <BotaoPadraoVerde onClick={filtrarDados} style={{width: '98%'}}>
                                <span style={{fontSize: 16}}>Buscar</span>
                            </BotaoPadraoVerde>
                        </FormFiltros>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                        {
                            loading ? 
                            
                            <Loader active inline='centered' size='large'/>
                            :
                            (produtos.length > 0 ?
                            produtos.map(produto => (
                                <Col key={produto.id} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                                    <Card produto={produto}/>
                                </Col>
                            ))
                            :
                            <NotFound>
                                <BsSearch size="120"/>
                                <h1>Nenhum registro encontrado</h1>
                            </NotFound>
                            
                            )                   
                        }
                    </Col>
                    
                </Row>
            </SessaoSearch>
        </>
    )
}

/* <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 20 }}>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                           <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                        <Col xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card/>
                        </Col>
                    </Col>*/