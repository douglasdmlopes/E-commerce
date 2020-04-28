import React from 'react'
//import {Card} from 'antd';
import {Cartao, FavCard, CarrinhoCard} from './Style';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Rate, Tooltip} from 'antd';

export default function index({produto}) {
    
    return (
        <>
        <Link to={`/product/` + produto.id} >
            

        <Cartao>
            
                <Tooltip placement="top" title={"Favoritar"}>
                <FavCard size="26" title="Favoritar"/>
                </Tooltip>

            <img src='./produto.png' alt="Produto" />            
            <Cartao.Content>
            <Cartao.Header>{produto.name}</Cartao.Header>
            <Cartao.Meta>
                <Rate size='small' allowHalf defaultValue={produto.rate} disabled />
            </Cartao.Meta>
            <Cartao.Description>
                R$ {produto.value.toLocaleString('pt-BR')}
            </Cartao.Description>
            </Cartao.Content>
            <Cartao.Content extra >
                <Tooltip placement="top" title={"Adicionar ao carrinho"}>
                    <CarrinhoCard size='mini' icon labelPosition='left'>
                        <Icon name='cart'  style={{fontSize: 12}}/><span style={{fontSize: 12}}>Adicionar</span>
                    </CarrinhoCard>
                </Tooltip>
            </Cartao.Content>
        </Cartao>
        </Link>
        </>
    )
}
