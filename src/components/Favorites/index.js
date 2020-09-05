import React, { useState, useEffect } from 'react'
import { Popover } from 'antd';
import { TiHeartFullOutline} from "react-icons/ti";
import { ListaPopOver, BotaoPadraoVerde, BotaoRemover } from '../../styles/global';
import { MdClose} from "react-icons/md";
import { Row, Col  } from 'antd';
import { Link } from 'react-router-dom';
import { Drawer, Menu, Icon, Select } from 'antd';
import { FiHeart } from "react-icons/fi";
import Card from './Card';
import { CarrinhoVazio } from "./Style";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { SubMenu } = Menu;

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
            <TiHeartFullOutline size={40} color="#fff" onClick={showDrawer}  cursor="pointer"/>
            <Drawer
                title="Favoritos"
                width={400}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ padding: 0}}
                placement="right"
            >
            <div>
                {   
                    favoritos.length == 0 ?
                    <CarrinhoVazio>
                        <FiHeart size={150}/>
                        <h2>Não há favoritos</h2>
                    </CarrinhoVazio>
                    
                    :
                    favoritos.map(produto => (
                        <Card key={produto.id} produto={produto} handleUpdate={ () => {handleUpdate()}}/>
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
            
            </Drawer> 
        </>
    )
}
