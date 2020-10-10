import React, {useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from "react-router-dom";
import { SessaoListaProdutos, Titulo} from '../../styles/global';
import { Row, Col } from 'antd';
import { Detalhes, Itens } from './Styles';
import CardFavoriteMobile from '../../components/CardFavoriteMobile';

export default function Index() {
    
    let { pedido } = useParams();
    const [itens, setItens] = useState(null);

    useEffect(() => {
        handleUpdate();
        
    }, []);

    function handleUpdate(){
            
        let pedidos_realizados = JSON.parse(localStorage.getItem("requests"));
            
        if(pedido != undefined && pedidos_realizados != undefined){
                
            console.log('pedidos');
            console.log(pedidos_realizados);

            if(pedidos_realizados != null){
                //pedidos_realizados.map( x => {
                pedidos_realizados.forEach(function(x) {
                    if(x.numero == pedido){
                        setItens([x]);
                        console.log('x');
                        console.log(x);
                    }
                });
            }
        }else{
            window.location.replace('/');
        }

        console.log('itens');
        console.log(itens);

    }

    function exibe() {
        console.log('itens teste');
        console.log(itens);
        itens.map( x => {
            console.log(x.status);
        });
    }

    return (
        
        <>
            <Header/>
            
                <SessaoListaProdutos style={{'minHeight': 'calc(100vh - 165px)'}}>
                    <Titulo>Pedido</Titulo>
                    <Row>
                    <Detalhes>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 14 }} xl={{ span: 14 }}>
                        <h2>Detalhes</h2>
                        <h3>Número: <span>{itens != null ? itens[0].numero : ''}</span></h3>
                        <h3>Data: <span>{itens != null ? itens[0].data : ''}</span></h3>                        
                        <h3>Situação: <span>{itens != null ? itens[0].status : ''}</span></h3>
                        <h3>Total: <span>R$ {itens != null ? itens[0].total : ''}</span></h3>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 14 }} md={{ span: 14 }} lg={{ span: 10 }} xl={{ span: 10 }}>
                        <h2>Itens</h2>
                        <Itens>
                        {   
                            itens != null ?
                            itens[0].itens.map(item => (
                                <CardFavoriteMobile key={itens.numero} produto={item} remover={false}/>
                            ))
                            
                            :
                            ''
                        }
                        </Itens>
                    </Col>
                    </Detalhes>
                        
                    </Row>
                </SessaoListaProdutos>            
            <Footer/>
        </>
    )
}
