import React from 'react'
//import {Card} from 'antd';
import {Cartao, FavCard, CarrinhoCard} from './Style';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Rate/*, Button */} from 'antd';

export default function index() {
    return (
        <>
        <Link to={`/product/1`} >
            

        <Cartao>
            <Link to={`/favorites`} >
               <FavCard size="28" title="Favoritar"/>
            </Link>
            <img src='./produto.png' alt="Produto" />            
            <Cartao.Content>
            <Cartao.Header>Xiaomi MI MIX AUPHA</Cartao.Header>
            <Cartao.Meta>
                <Rate size='small' allowHalf defaultValue={2.5} disabled />
            </Cartao.Meta>
            <Cartao.Description>
                R$ 500,00
            </Cartao.Description>
            </Cartao.Content>
            <Cartao.Content extra >
                <CarrinhoCard size='mini' icon labelPosition='left'>
                    <Icon name='cart'  style={{fontSize: 12}}/><span style={{fontSize: 12}}>Adicionar</span>
                </CarrinhoCard>
            </Cartao.Content>
        </Cartao>
        </Link>
        </>
    )
}
