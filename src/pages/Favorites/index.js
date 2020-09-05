import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {SessaoListaProdutos, BotaoPadraoVerde, Titulo} from '../../styles/global';
import { Row, Col, Tooltip  } from 'antd';
import { Link } from 'react-router-dom';
import { MdClose} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";
import Footer from '../../components/Footer';
import CardFavoriteMobile from '../../components/CardFavoriteMobile';
import { CarrinhoVazio } from "./Style";
import { FiHeart } from "react-icons/fi";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function Index() {

    const [favoritos, setFavoritos] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        handleUpdate();

    }, []);

    function onClose() {
        setVisible(false);
    };

    function handleUpdate(){

        let favorites = JSON.parse(localStorage.getItem("favorites"));
        
        if(favorites == null){
            localStorage.setItem("favorites", JSON.stringify([]));
            favorites = JSON.parse(localStorage.getItem("favorites"));
        }
        
        setFavoritos(favorites);

    }

    function alertaLimparFavoritos() {
        confirm({
            title: 'Atenção!',
            icon: <ExclamationCircleOutlined />,
            content: 'Deseja limpar a lista de favoritos?',
            okText: 'Sim',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk() {
                cleanFavorites()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function cleanFavorites(){
        
        localStorage.setItem("favorites", JSON.stringify([]));
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        
        setFavoritos(favorites);
    }

    function showDrawer() {
        
        handleUpdate();        
        setVisible(true);

    };

    return (
        <>
            <Header/>
            <SessaoListaProdutos>
            <Titulo>Favoritos</Titulo>
            <Row>
                <div>
                    {   
                        favoritos.length == 0 ?
                        <CarrinhoVazio>
                            <FiHeart size={150}/>
                            <h2>Não há favoritos</h2>
                        </CarrinhoVazio>
                        
                        :
                        favoritos.map(produto => (
                            <CardFavoriteMobile key={produto.id} produto={produto} handleUpdate={ () => {handleUpdate()}}/>
                        ))
                    }
                </div>
                {
                    favoritos.length == 0 ?
                    ""
                    :
                    
                    <BotaoPadraoVerde style={{width : '97.5%', marginTop : '15px', marginBottom : '8px', marginLeft : '5px' }}
                    onClick={ () => {alertaLimparFavoritos()}}
                    >Limpar Favoritos</BotaoPadraoVerde>
                    
                }
                
            </Row>
            </SessaoListaProdutos>
            <Footer/>
        </>
    )
}
