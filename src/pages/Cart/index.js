import React from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, BotaoListagem, Titulo, FormControl, BotaoPadraoVerde} from '../../styles/global';
import { Row, Col, Tooltip, Select  } from 'antd';
import { Link } from 'react-router-dom';
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";
import Footer from '../../components/Footer';
import {FloatRight} from './Style';
import { Icon } from 'semantic-ui-react';
import CardMobile from '../../components/CardMobile';

function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  const { Option } = Select;

   

export default function index() {
    
    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Carrinho</Titulo>
            <Row>
            
                <CardMobile>
                
                </CardMobile>
                <CardMobile>
                
                </CardMobile>
                <CardMobile>
                
                </CardMobile>
                <CardMobile>
                
                </CardMobile>
                <CardMobile>
                
                </CardMobile>
                <CardMobile>
                
                </CardMobile>


                
            </Row>
            <Row>
                <FloatRight>
                    <Link to={`/request`} >
                        <BotaoPadraoVerde size='medium' class="ui active button">
                                <span style={{fontSize: 12}}>Finalizar Pedido</span>
                        </BotaoPadraoVerde>
                    </Link>
                </FloatRight>
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