import React from 'react'
import { Popover } from 'antd';
import { TiHeartFullOutline} from "react-icons/ti";
import { ListaPopOver, BotaoPadrao } from '../../styles/global';

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
        <BotaoPadrao>Todos os Favoritos</BotaoPadrao>
    </div>
    </>);
export default function index() {
    return (
        <>
            <Popover placement="bottom" content={content} title="Favoritos" trigger="click">
                <TiHeartFullOutline size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
