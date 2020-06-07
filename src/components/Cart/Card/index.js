import React, { Component } from 'react';
import { Cartao, Picture, Content, Description, Remover, Valor, Quantidade, InputNumber } from './Style';
import { MdRemove, MdAdd} from "react-icons/md";
import { Tooltip, message } from 'antd';

export default class Index extends Component {
//export default function Index({produto}) {

   constructor(props){
       super(props);
   }

    removerItemCarrinho = () => {
        
        let carrinho =[];        
        
        carrinho = JSON.parse(localStorage.getItem("cart"));

        let carrinho_temp = [];
        let that = this;
        carrinho.forEach(function(item) {
            if (that.props.produto.id !== item.id) {
                carrinho_temp.push(item);
            }
        });

        localStorage.setItem("cart", JSON.stringify(carrinho_temp));

        this.props.handleUpdate();

        message.success('Item removido do carrinho', 0.9);
        
    }

    addSubItem = (acao) => {
        
        let carrinho =[];        
        
        carrinho = JSON.parse(localStorage.getItem("cart"));

        let carrinho_temp = [];
        let that = this;
        carrinho.forEach(function(item) {
            if (that.props.produto.id === item.id) {
                if(acao === 'add'){
                    item.qtde += 1; 
                }else if(acao === 'sub'){
                    let qtde = item.qtde;
                    if((qtde - 1) > 0){
                        item.qtde -= 1; 
                    }                    
                }
                               
            }
            carrinho_temp.push(item);
        });

        localStorage.setItem("cart", JSON.stringify(carrinho_temp));

        this.props.handleUpdate();
        
    }

    render(){
    return (
        <>
        <Cartao>
            <a href={`/product/` + this.props.produto.id} > 
                <Picture src={`/produtos/${this.props.produto.id_img_01}.png`} />
            </a>
            <Content>
                <Description>
                    <a href={`/product/` + this.props.produto.id} >
                        <h2>{this.props.produto.nome}</h2>
                    </a>
                    <Tooltip placement="topRight" title={"Remover item do carrinho"}>
                        <Remover size={22} onClick={(event) => {
                                event.stopPropagation();
                                this.removerItemCarrinho()
                            } }/>
                    </Tooltip>
                </Description>
                <Valor>
                    <h2>R$ {this.props.produto.preco_formatado}</h2>
                </Valor>
                <Quantidade>
                    <h2>Quantidade: </h2>
                    <span>
                        <Tooltip placement="topRight" title={"Adicionar"}>
                            <MdAdd size={25} style={{'cursor': 'pointer'}}
                                onClick={
                                    () => {
                                        this.addSubItem('add');
                                    }
                                }
                            />
                        </Tooltip>
                    </span>
                    <span>
                        <InputNumber disabled min="1" max="8"
                            value={this.props.produto.qtde}
                        />
                    </span>
                    <span>
                        <Tooltip placement="top" title={"Remover"}>
                            <MdRemove size={25} style={{'cursor': 'pointer'}}
                                onClick={
                                    () => {
                                        this.addSubItem('sub');
                                    }
                                }
                            />
                        </Tooltip>
                    </span>
                </Quantidade>
            </Content>
        </Cartao>
        </>
    )
    }
}
