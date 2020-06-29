import React, {useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';
import LogoSlide from '../../components/LogoSlide';
import MiniSlideProducts from '../../components/MiniSlideProducts';
import Card from '../../components/Card';
import {Sessao, TitleHome} from './style';
import { Row, Col } from 'antd';

import {todosOsProdutos, produtosRecentes, produtosMaisPesquisados, produtosMelhorDesempenho} from '../../services/dados';

import { Loader } from 'semantic-ui-react'

export default function Index() {
    
    const [loading, setLoading] = useState(false);
    const [produtosRec,setProdutosRec]= useState([]);
    const [produtosMaisBuscados, setProdutosMaisBuscados]= useState([]);
    const [produtosMelhorDes, setProdutosMelhorDes]= useState([]);

    useEffect(() => {
        setLoading(true);
        
        let produtos = todosOsProdutos();
        
        localStorage.setItem("produtos", JSON.stringify(produtos));
        window.setTimeout(() => {setLoading(false)}, 250);

        let produtos_recentes = produtosRecentes();
        setProdutosRec(produtos_recentes);
        
        let produtos_mais_pesquisados = produtosMaisPesquisados();
        setProdutosMaisBuscados(produtos_mais_pesquisados);

        let produtos_melhor_desempenho = produtosMelhorDesempenho();
        setProdutosMelhorDes(produtos_melhor_desempenho);
    }, []);
    
    return (
        <>
        <Header/>
        <Slide/>
        <TitleHome>Principais Marcas</TitleHome>
        <LogoSlide/>
        <TitleHome>Em Destaque</TitleHome>        
        {
            loading ? 
            
            <Loader active inline='centered' size='large' size='large' style={{marginTop: '65px', marginBottom: '85px'}}/>
            :
            <MiniSlideProducts produtos={produtosMaisBuscados}/>
            
            
        }
        <TitleHome>Melhor Desempenho</TitleHome>        
        {
            loading ? 
            
            <Loader active inline='centered' size='large' size='large' style={{marginTop: '65px', marginBottom: '85px'}}/>
            :
            <MiniSlideProducts produtos={produtosMelhorDes}/>
            
            
        }

        <TitleHome>Adicionados Recentemente</TitleHome>  
        <Sessao>
            <Row>
                {
                    loading ? 
                    
                    <Loader active inline='centered' size='large'/>
                         :
                    produtosRec.map(produto => (
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
