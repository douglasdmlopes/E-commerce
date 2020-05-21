import React from 'react'
import { IoIosMenu} from "react-icons/io";
import { Popover } from 'antd';
import { PopOverEcommerce } from './Style';
import { ListaPopOver } from '../../styles/global';
import { Link } from 'react-router-dom';

const content = (
    <ListaPopOver style={{maxHeight: 200, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>
      <a href="/search/categoria=Smartphone"><li>Smartphones</li></a>
      <a href="/search/categoria=Computadores"><li>Computadores</li></a>
      <a href="/search/categoria=Notebook"><li>Notebooks</li></a>
      <a href="/search/categoria=Hardware"><li>Hardware</li></a>
    </ListaPopOver>
  );

export default function index() {
    return (
        <>
            <PopOverEcommerce placement="bottom" content={content} title="Todas as categorias" trigger="hover">
                <li>
                    <IoIosMenu size={18}/><span>&nbsp;Categorias</span>
                </li>
            </PopOverEcommerce>
        </>
    )
}
