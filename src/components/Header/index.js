import React, { useState } from 'react';
import {Cabecalho, MobileCabecalho, Submenu, Lupa, Logo, UserMenu} from './style';
import Headroom from 'react-headroom';

import { TiShoppingCart, TiUser, TiHeartFullOutline} from "react-icons/ti";

import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';


import { Popover, Input, Row, Col, Layout } from 'antd';

const { Search } = Input;

const { Header } = Layout;

export default function index() {

    //const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    //const [visible, setVisible] = useState(true);

    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
      
    return (
        <Headroom> 
            <Cabecalho>
                <Row>
                    <Col xs={8} sm={6} md={6} lg={4} xl={4}>
                        <Link to={`/`} >
                            <Logo src="/logo.png" alt="Tech Store" draggable="false"/>
                        </Link>
                        </Col>
                    <Col xs={10} sm={12} md={13} lg={16} xl={16}>
                        <Search
                            placeholder="Faça uma busca"
                            onSearch={value => console.log(value)}
                            style={{ width: '90%'}}
                        />
                    </Col>
                    <Col xs={6} sm={6} md={5} lg={4} xl={4}>
                        <UserMenu>
                            <Popover placement="bottom" content={content} title="Favoritos" trigger="hover">
                                <TiHeartFullOutline size={40} color="#fff" cursor="pointer"/>
                            </Popover>
                            <Popover placement="bottom" content={content} title="Carrinho" trigger="hover">
                                <TiShoppingCart size={40} color="#fff" cursor="pointer"/>
                            </Popover>
                            <Popover placement="bottom" content={content} title="Usuário" trigger="hover">
                                <TiUser size={40} color="#fff" cursor="pointer"/>
                            </Popover>

                            
                        </UserMenu>
                    </Col>
                </Row>
                
            </Cabecalho>
            <Submenu>
                
                    <ul>
                        <Popover placement="bottom" content={content} title="Carrinho" trigger="hover">
                            <li>
                                <IoIosMenu size={18}/><span>&nbsp;Categorias</span>
                            </li>
                        </Popover>
                        <li>
                            Samsung
                        </li>
                        <li>
                            Xiaomi
                        </li>
                        <li>
                            Motorola
                        </li>
                        <li>
                            Lenovo
                        </li>
                        
                        <li>
                            Apple
                        </li>

                    </ul>
                    
            </Submenu>
            <MobileCabecalho>
                <Row>
                    <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                        <IoIosMenu size={36} color="#fff"/>
                    </Col>
                    <Col xs={20} sm={22} md={22} lg={22} xl={22}>
                    <Link to={`/`} >
                        <Logo src="/logo.png" alt="Tech Store" draggable="false"/>
                    </Link>
                    </Col> 
                    <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                    
                        <Lupa size={32} color="#fff" />
                    </Col>
                </Row>
            </MobileCabecalho>
        </Headroom>
    )
}
