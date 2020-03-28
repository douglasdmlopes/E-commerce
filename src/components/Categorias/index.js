import React from 'react'
import { IoIosMenu} from "react-icons/io";
import { Popover } from 'antd';
import { ListaPopOver } from '../../styles/global';
import { Link } from 'react-router-dom';

const content = (
    <ListaPopOver style={{maxHeight: 200, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>
      <Link to={`/product/1`} ><li>Smartphones</li></Link>
      <Link to={`/product/1`} ><li>Computadores</li></Link>
      <Link to={`/product/1`} ><li>Notebooks</li></Link>
      <Link to={`/product/1`} ><li>Tables</li></Link>
      <Link to={`/product/1`} ><li>Hardware</li></Link>
    </ListaPopOver>
  );

export default function index() {
    return (
        <>
            <Popover placement="bottom" content={content} title="Todas as categorias" trigger="hover">
                <li>
                    <IoIosMenu size={18}/><span>&nbsp;Categorias</span>
                </li>
            </Popover>
        </>
    )
}