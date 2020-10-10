import React from 'react'
import { TiUser} from "react-icons/ti";
import { Popover } from 'antd';
import { ListaPopOver } from '../../styles/global';
import { Link } from 'react-router-dom';

const content = (
    <ListaPopOver style={{maxHeight: 200, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>
      <Link to={`/Account`} ><li>Conta</li></Link>
      <Link to={`/requests`} ><li>Pedidos</li></Link>
    </ListaPopOver>
  );

export default function index() {
    return (
        <>
            <Popover placement="bottomRight" content={content} title="Minha Conta" trigger="hover">
                <TiUser size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
