import React, { useState } from 'react';
import {Cabecalho, MobileCabecalho, MobileCabecalhoBusca, Submenu, Lupa, Fechar, Logo, UserMenu, BuscaMobile, Listagem} from './style';

import Cart from '../Cart';
import Favorites from '../Favorites';
import User from '../User';
import Categorias from '../Categorias';
import Headroom from 'react-headroom';
import { IoIosMenu } from "react-icons/io";
import { TiHeartOutline, TiShoppingCart } from "react-icons/ti";
import { Link, Redirect } from 'react-router-dom';

import { Drawer, Input, Row, Col, Menu, Icon } from 'antd';

const { SubMenu } = Listagem;

export default function Index() {

    //const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    //const [visible, setVisible] = useState(true);
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [showSearch, setShowSearch] = useState(false);
    const [termoBusca, setTermoBusca] = useState('');

    const { Search } = Input;
        
    function showDrawer() {
        setVisible(true);
    };

    function onClose() {
        setVisible(false);
    };

    function showSearchBar() {
        
        setShowSearch(!showSearch);
    };

    function search(termo){
        console.log(termoBusca);
        if(termoBusca != "" && termoBusca != null){
            var busca = '/search/termo=' + termoBusca;
            window.location.replace(busca);
        }
        
    }

    function updateInputValue(evt){
        setTermoBusca(evt.target.value);
        
    }

    return (
        
        <>
        <Headroom> 
            <Cabecalho>
                <Row>
                    <Col xs={8} sm={6} md={6} lg={6} xl={5}>
                        <Link to={`/`} >
                            <Logo src="/logo.png" alt="Tech Store" draggable="false"/>
                        </Link>
                        </Col>
                    <Col xs={10} sm={12} md={13} lg={14} xl={16}>
                        <Search
                            placeholder="Faça uma busca"
                            
                            value={termoBusca} 
                                onChange={updateInputValue} 
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        search(termoBusca)
                                    }
                                  }}
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
                        <a href="/search/marca=Samsung">
                            <li>
                                Samsung
                            </li>
                        </a>
                        <a href="/search/marca=Xiaomi" >
                            <li>
                                Xiaomi
                            </li>
                        </a>
                        <a href="/search/marca=Motorola" >
                            <li>
                                Motorola
                            </li>
                        </a>
                        <a href="/search/marca=Lenovo" >
                            <li>
                                Lenovo
                            </li>
                        </a>
                        <a href="/search/marca=Apple" >
                            <li>
                                Apple
                            </li>
                        </a>

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
                            <Logo src="/logo.png" alt="Tech Store" draggable="false"/>
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
                            
                                <BuscaMobile type="text" placeholder="Buscar por produto..." value={termoBusca} 
                                autoFocus
                                onChange={updateInputValue} 
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        search(termoBusca)
                                    }
                                  }}/>
                                
                                
                        </Col>
                        <Col xs={2} sm={1} md={1} lg={1} xl={1}>
                        
                            <Lupa size={32} color="#fff" onClick={() => {
                                if(showSearch == true){
                                    search('value')
                                }                                
                            }}/>

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
          ><Menu.Item key="1"><a href="/search/categoria=smartphone">Smartphones</a></Menu.Item>
            <Menu.Item key="2"><a href="/search/categoria=computadores">Computadores</a></Menu.Item>
            <Menu.Item key="3"><a href="/search/categoria=notebook">Notebooks</a></Menu.Item>
            <Menu.Item key="4"><a href="/search/categoria=hardware">Hardware</a></Menu.Item>
          </SubMenu>
          <Menu.Item><a href="/search/marca=Samsung" >Samsung</a></Menu.Item>
          <Menu.Item><a href="/search/marca=Xiaomi" >Xiaomi</a></Menu.Item>
          <Menu.Item><a href="/search/marca=Motorola" >Motorola</a></Menu.Item>
          <Menu.Item><a href="/search/marca=Lenovo" >Lenovo</a></Menu.Item>
          <Menu.Item><a href="/search/marca=Apple" >Apple</a></Menu.Item>
    
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
