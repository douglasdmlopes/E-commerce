import React from 'react'
import { TiUser} from "react-icons/ti";
import { Popover } from 'antd';
import { ListaPopOver } from '../../styles/global';

const content = (
    <ListaPopOver style={{maxHeight: 200, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>
      <li>Ajustes</li>
      <li>Endereços</li>
      <li>Sair</li>
    </ListaPopOver>
  );

export default function index() {
    return (
        <>
            <Popover placement="bottom" content={content} title="Minha Conta" trigger="click">
                <TiUser size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
