import React from 'react';
import {Cartao, CarrinhoCard} from './Style';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Rate } from 'antd';

export default function Index({produto}) {
    
    return (
        <>
        <Link to={`/product/` + produto.id} >
            <Cartao>
                <img src={`/produtos/${produto.id_img_01}.png`} alt="Produto" />            
                <Cartao.Content>
                    <Cartao.Header>{produto.nome}</Cartao.Header>
                    <Cartao.Meta>
                        <Rate size='small' allowHalf defaultValue={produto.avaliacao == null ? 0 : parseFloat(produto.avaliacao)} disabled />
                    </Cartao.Meta>
                    <Cartao.Description>
                        R$ {produto.preco_formatado}
                    </Cartao.Description>
                </Cartao.Content>
                <Cartao.Content extra >
                        <CarrinhoCard size='mini' icon labelPosition='left' >
                            <Icon name='eye'  style={{fontSize: 12}}/><span style={{fontSize: 12}}>Visualizar</span>
                        </CarrinhoCard>
                </Cartao.Content>
            </Cartao>
        </Link>
        </>
    )
}
