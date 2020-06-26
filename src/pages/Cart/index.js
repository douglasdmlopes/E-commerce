import React, { useState, useEffect }  from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, BotaoListagem, Titulo, FormControl, BotaoPadraoVerde} from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Link } from 'react-router-dom';
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";
import Footer from '../../components/Footer';
import {FloatRight, CarrinhoVazio, TotalCarrinho, ListagemItens} from './Style';
import { Icon } from 'semantic-ui-react';
import CardMobile from '../../components/CardMobile';
import { FiShoppingCart } from "react-icons/fi";


function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  const { Option } = Select;

   

export default function Index() {
    
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
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Carrinho</Titulo>
            <Row>
            
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


                
            </Row>
            </SessaoListaProdutos>
            <Footer/>
        </>
    )
}
/*
 Carrinho:
            Possui botão realizar pedido que manda para a página "Pedido"
            Na página de pedido (request) deve conter:

            Listagem de produtos (com quantidade) selecionados
            Endereço (Não editavel)
            Forma de pagamento
            botão "finalizar pedido"
*/