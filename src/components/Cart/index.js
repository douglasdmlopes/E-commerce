import React, { useState, useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import CardMobile from '../././CardMobile';
import { Drawer, Menu, Icon, Select } from 'antd';
import { BotaoPadraoVerde } from '../../styles/global';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CarrinhoVazio, TotalCarrinho, ListagemItens} from "./Style";

const { SubMenu } = Menu;

export default function Index({acao}) {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {

        handleUpdate();

    }, []);

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);

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

        let total = 0;

        cart.map(produto => (
            total += (parseFloat(produto.qtde) * parseFloat(produto.preco))
        ));

        setTotal(total);

    }

    return (
        <>
            <TiShoppingCart size={40} color="#fff" onClick={showDrawer} cursor="pointer"/>
            <Drawer
                title="Carrinho"
                width={450}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ padding: 0, paddingRight : 4}}
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
                    <ListagemItens>
                    {carrinho.map(produto => (
                        <CardMobile key={produto.id} produto={produto} handleUpdate={ () => {handleUpdate()}}/>
                    ))}
                    </ListagemItens>
                }
            </div>
            {
                carrinho.length == 0 ?
                ""
                :

                <div>
                    <TotalCarrinho>
                        <h2><span>TOTAL: R$</span>{total.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h2>
                    </TotalCarrinho>
                    <Link to={`/request`} style={{marginLeft : '5px'}} >
                        <BotaoPadraoVerde style={{width : '97.5%', marginTop : '15px', marginBottom : '8px' }}>Fechar Pedido</BotaoPadraoVerde>
                    </Link>
                </div>
                
                
            }
            
            </Drawer>            
        </>
    )
}
