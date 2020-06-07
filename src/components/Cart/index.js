import React, { useState, useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import Card from './Card';
import { Drawer, Menu, Icon, Select } from 'antd';
import { BotaoPadraoVerde } from '../../styles/global';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CarrinhoVazio } from "./Style";

const { SubMenu } = Menu;

export default function Index({acao}) {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {

        handleUpdate();

    }, []);

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);

    function showDrawer() {
        
        handleUpdate();        
        setVisible(true);

    };

    function onClose() {
        setVisible(false);
    };

    function handleUpdate(){

        let cart = JSON.parse(localStorage.getItem("cart"));
        
        if(cart == null){
            localStorage.setItem("cart", JSON.stringify([]));
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        setCarrinho(cart);

    }

    return (
        <>
            <TiShoppingCart size={40} color="#fff" onClick={showDrawer} cursor="pointer"/>
            <Drawer
                title="Carrinho"
                width={400}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ padding: 0}}
                placement="right"
            >
            <div>
                {   
                    carrinho.length == 0 ?
                    <CarrinhoVazio>
                        <FiShoppingCart size={150}/>
                        <h2>Carrinho Vazio</h2>
                    </CarrinhoVazio>
                    
                    :
                    carrinho.map(produto => (
                        <Card key={produto.id} produto={produto} handleUpdate={ () => {handleUpdate()}}/>
                    ))
                }
            </div>
            {
                carrinho.length == 0 ?
                ""
                :
                <Link to={`/cart`} style={{marginLeft : '5px'}} >
                    <BotaoPadraoVerde style={{width : '97.5%', marginTop : '15px', marginBottom : '8px' }}>Ir para o Carrinho</BotaoPadraoVerde>
                </Link>
            }
            
            </Drawer>            
        </>
    )
}
