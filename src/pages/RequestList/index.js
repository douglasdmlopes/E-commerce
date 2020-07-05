import React, { useState, useEffect } from 'react';
import {Sessao} from '../../styles/global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardRequest from './CardRequest';
import { CarrinhoVazio } from "./Style";
import { FiBox } from "react-icons/fi";

export default function Index() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {

        handleUpdate();

    }, []);

    function handleUpdate(){

        let pedidos_realizados = JSON.parse(localStorage.getItem("requests"));
        console.log('pedidos');
        console.log(pedidos_realizados);
        if(pedidos_realizados == null || pedidos_realizados == []){
            window.location.replace('/');
        }

        setPedidos(pedidos_realizados);

    }

    return (
        <>
            <Header/>
            <Sessao style={{'minHeight': 'calc(100vh - 200px)'}}>
                {   
                    pedidos.length == 0 ?
                    <CarrinhoVazio>
                    <FiBox size={150}/>
                    <h2>Não há pedidos realizados</h2>
                    </CarrinhoVazio>
                    
                    :
                    pedidos.map(produto => (
                        <CardRequest key={produto.id} produto={produto}/>
                        ))
                }
            </Sessao>
            <Footer/>
        </>
    )
}
