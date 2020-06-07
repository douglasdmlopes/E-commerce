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
                    <Link to={`/favorites`} style={{marginLeft : '5px'}} >
                        <BotaoPadraoVerde style={{width : '97.5%', marginTop : '15px', marginBottom : '8px' }}>Ir para Favoritos</BotaoPadraoVerde>
                    </Link>
                }
            
            </Drawer> 
        </>
    )
}
