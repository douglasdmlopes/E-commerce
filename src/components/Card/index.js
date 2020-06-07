import React, {useState, useEffect} from 'react';
import {Cartao, FavCard, FavoritadoCard, CarrinhoCard} from './Style';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Rate, Tooltip, message} from 'antd';

export default function Index({produto}) {
    
    const [botao, setBotao] = useState('adicionar');//adicionar - carregando - remover
    const [fav, setFav] = useState('favoritar');//favoritar - favoritando - desfavoritar
    
    message.config({
        maxCount: 3,
    });

    useEffect(() => {

        let cart = JSON.parse(localStorage.getItem("cart"));
        let favorites = JSON.parse(localStorage.getItem("favorites"));

        if(cart == null){
            localStorage.setItem("cart", JSON.stringify([]));
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        if(favorites == null){
            localStorage.setItem("favorites", JSON.stringify([]));
            favorites = JSON.parse(localStorage.getItem("favorites"));
        }
        
        cart.forEach(function(item) {
            if (produto.id == item.id) {
                setBotao('remover');
            }
        });

        favorites.forEach(function(item) {
            if (produto.id == item.id) {
                setFav('desfavoritar');
            }
        });

    }, []);


    function favoritarItem() {
        
        let favoritos = {};
                
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        favoritos.push(produto);
                
        localStorage.setItem("favorites", JSON.stringify(favoritos));
        
        setFav('desfavoritar');

        message.success('Item adicionado aos favoritos', 0.9);

    }

    function desfavoritarItem(){

        let favoritos =[];        
        
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        let favoritos_temp = [];

        favoritos.forEach(function(item) {
            if (produto.id != item.id) {
                favoritos_temp.push(item);
            }
        });

        localStorage.setItem("favorites", JSON.stringify(favoritos_temp));
        
        setFav('favoritar');

        message.success('Item removido dos favoritos', 0.9);

    }

    function adicionarItemCarrinho() {

        let carrinho = {};
                
        carrinho = JSON.parse(localStorage.getItem("cart"));
        
        produto.qtde = 1;

        carrinho.push(produto);

        localStorage.setItem("cart", JSON.stringify(carrinho));
        
        setBotao('carregando');

        window.setTimeout(() => {
            setBotao('remover');
            message.success('Item adicionado ao carrinho', 0.9);
        }, 950);
                
    }

    function removerItemCarrinho(){
        
        let carrinho =[];        
        
        carrinho = JSON.parse(localStorage.getItem("cart"));

        let carrinho_temp = [];

        carrinho.forEach(function(item) {
            if (produto.id != item.id) {
                carrinho_temp.push(item);
            }
        });

        localStorage.setItem("cart", JSON.stringify(carrinho_temp));

        setBotao('carregando');

        window.setTimeout(() => {
            setBotao('adicionar');
            message.success('Item removido do carrinho', 0.9);
        }, 950);
        
    }

    return (
        <>
        <Link to={`/product/` + produto.id} >            

        <Cartao>

            <a href="#!">
                
                {
                    fav == "favoritar"  ?
                        <Tooltip placement="top" title={"Adicionar aos favoritos"}>
                            <FavCard size="26" title="Favoritar" onClick={(event) => {
                                        event.stopPropagation();
                                        favoritarItem()
                                    } }/>
                        </Tooltip>
                    :

                    (

                        fav == "favoritando"  ?
                            <FavCard size="26" title="Favoritar" onClick={(event) => {
                                event.stopPropagation();
                            } }/>
                        :
                            <Tooltip placement="top" title={"Remover dos favoritos"}>
                                <FavoritadoCard size="26" title="Favoritar" onClick={(event) => {
                                            event.stopPropagation();
                                            desfavoritarItem()
                                        } }/>
                            </Tooltip>
                        
                    )
                }
            </a>

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
                
                    <a href="#!">
                    {
                        botao == 'adicionar' ? 
                        <Tooltip placement="top" title={"Adicionar ao carrinho"}>
                            <CarrinhoCard size='mini' icon labelPosition='left' onClick={(event) => {
                                event.stopPropagation();
                                adicionarItemCarrinho()
                            } }>
                                <Icon name='cart'  style={{fontSize: 12}}/><span style={{fontSize: 12}}>Adicionar</span>
                            </CarrinhoCard>
                        </Tooltip>
                    :
                    (
                        botao == 'carregando' ? 
                            <CarrinhoCard size='mini' disabled icon labelPosition='left' onClick={(event) => {
                                event.stopPropagation();
                            } }>
                                <Icon loading name='spinner' style={{fontSize: 12}}/><span style={{fontSize: 12}}>Aguarde</span>
                                
                            </CarrinhoCard>
                        :
                        <Tooltip placement="top" title={"Remover do carrinho"}>
                            <CarrinhoCard size='mini' icon labelPosition='left' onClick={(event) => {
                                event.stopPropagation();
                                removerItemCarrinho()
                            } }>
                                <Icon name='close'  style={{fontSize: 12}}/><span style={{fontSize: 12}}>Remover</span>
                            </CarrinhoCard>
                        </Tooltip>
                    )
                    }
                    </a>
            </Cartao.Content>
        </Cartao>
        </Link>
        </>
    )
}
