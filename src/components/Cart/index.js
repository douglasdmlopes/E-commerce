import React from 'react';
import { Popover } from 'antd';
import { ListaPopOver, BotaoPadrao } from '../../styles/global';
import { TiShoppingCart} from "react-icons/ti";


export default function index() {

    const content = (<>
        <ListaPopOver style={{maxHeight: 350, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>     
            <li><img src="./produto.png" alt="produto" draggable="false"/><span>Xiaomi Mi mix Aupha 2020</span></li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>
            <li>Produto</li>       
        </ListaPopOver>
        <div style={{marginTop: 20, textAlign: "center"}}>
            <BotaoPadrao>Abrir Carrinho</BotaoPadrao>
        </div>
        </>);


    return (
        <>
            <Popover placement="bottom" content={content} title="Carrinho" style="max-height: 200px !important;" trigger="click">
                <TiShoppingCart size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
