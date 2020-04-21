import React, { useState } from 'react';
import {Cabecalho, MobileCabecalho, MobileCabecalhoBusca, Submenu, Lupa, Fechar, Logo, UserMenu, BuscaMobile, Listagem} from './style';

import Cart from '../Cart';
import Favorites from '../Favorites';
import User from '../User';
import Categorias from '../Categorias';
import Headroom from 'react-headroom';
import { IoIosMenu } from "react-icons/io";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

import { Drawer, Input, Row, Col, Menu, Icon } from 'antd';

const { SubMenu } = Listagem;

export default function Index() {

    //const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    //const [visible, setVisible] = useState(true);
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [showSearch, setShowSearch] = useState(false);

    const { Search } = Input;
    const content = (
        <div>
          <p><Link to={`/product/1`} >Smartphones</Link></p>
          <p><Link to={`/product/1`} >Computadores</Link></p>
          <p><Link to={`/product/1`} >Notebooks</Link></p>
          <p><Link to={`/product/1`} >Tablets</Link></p>
        </div>
      );
    
    function showDrawer() {
        setVisible(true);
    };

    function onClose() {
        setVisible(false);
    };

    function showSearchBar() {
        
        setShowSearch(!showSearch);
    };

    function search(){
        console.log("Redirecionar para a página de resultados e realizar busca na API");
    }

    return (
        
        <>
        <Headroom> 
            <Cabecalho>
                <Row>
                    <Col xs={8} sm={6} md={6} lg={6} xl={5}>
                        <Link to={`/`} >
                            <Logo src="/logo.svg" alt="Tech Store" draggable="false"/>
                        </Link>
                        </Col>
                    <Col xs={10} sm={12} md={13} lg={14} xl={16}>
                        <Search
                            placeholder="Faça uma busca"
                            onSearch={value => console.log(value)}
                            style={{ width: '90%'}}
                            icon="user"
                        />
                    </Col>
                    <Col xs={6} sm={6} md={5} lg={4} xl={3} style={{textAlign: 'right'}}>
                        <UserMenu>
                            <Favorites/>
                            <Cart/>
                            <User/>                           
                        </UserMenu>
                    </Col>
                </Row>
                
            </Cabecalho>
            <Submenu>
                
                    <ul>
                        <Categorias/>
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
            {
            
            !showSearch &&
            <MobileCabecalho>
                <div>
                <Row>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                            <IoIosMenu size={36} color="#fff" onClick={showDrawer}/>
                        </Col>
                        <Col xs={20} sm={22} md={22} lg={22} xl={22}>
                        <Link to={`/`} >
                            <Logo src="/logo.svg" alt="Tech Store" draggable="false"/>
                        </Link>
                        </Col> 
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                        
                            <Lupa size={32} color="#fff" onClick={() => showSearchBar()} />
                        </Col>
                        
                    </Row>
                </div>
                
            </MobileCabecalho>
            }
            {
            
            showSearch && (
            
            <MobileCabecalhoBusca>
                    
                    <Row>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                            <Fechar size={36} color="#fff"  onClick={() => showSearchBar()}/>
                        </Col>
                        <Col xs={20} sm={22} md={22} lg={22} xl={22}>
                            
                                <BuscaMobile type="text" placeholder="Buscar por produto..." />
                                
                        </Col>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                        
                            <Lupa size={32} color="#fff" onClick={() => search()}/>
                        </Col>
                    </Row>
            </MobileCabecalhoBusca>
            )}
        </Headroom>
        <Drawer
            title="Menu"
            width={300}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ padding: 0}}
            placement="left"
        >
        <Menu
          theme={"light"}
          style={{ width: 300 }}
          selectedKeys={[current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="menu" />
                <span>Categorias</span>
              </span>
            }
          >
            <Menu.Item key="1">Smartphones</Menu.Item>
            <Menu.Item key="2">Computadores</Menu.Item>
            <Menu.Item key="3">Notebooks</Menu.Item>
            <Menu.Item key="4">Tablets</Menu.Item>
            <Menu.Item key="4">Hardware</Menu.Item>
          </SubMenu>
          <Menu.Item><Link to={`/favorites`} >Samsung</Link></Menu.Item>
          <Menu.Item><Link to={`/favorites`} >Xiaomi</Link></Menu.Item>
          <Menu.Item><Link to={`/favorites`} >Motorola</Link></Menu.Item>
          <Menu.Item><Link to={`/favorites`} >Lenovo</Link></Menu.Item>
          <Menu.Item><Link to={`/favorites`} >Apple</Link></Menu.Item>
    
          <Menu.Item><Link to={`/favorites`} ><Icon type="heart" /><span>Favoritos</span></Link></Menu.Item>
          <Menu.Item><Link to={`/cart`} ><span><TiShoppingCart size={17} />   Carrinho</span></Link></Menu.Item>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                <span>Usuário</span>
              </span>
            }
          >
            <Menu.Item key="1">Ajustes</Menu.Item>
            <Menu.Item key="2">Endereços</Menu.Item>
            <Menu.Item key="3">Sair</Menu.Item>
          </SubMenu>
        </Menu>
        </Drawer>
        </>
    )
}
