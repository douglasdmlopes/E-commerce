import React, { Component } from 'react';
import { Cartao, Picture, Content, Description, Remover, Valor, Quantidade, InputNumber } from './Style';
import { MdRemove, MdAdd} from "react-icons/md";
import { Tooltip, message } from 'antd';

export default class Index extends Component {
//export default function Index({produto}) {

   constructor(props){
       super(props);
   }

    removerItemFavoritos = () => {
        
        let favoritos =[];        
        
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        let favoritos_temp = [];
        let that = this;
        favoritos.forEach(function(item) {
            if (that.props.produto.id != item.id) {
                favoritos_temp.push(item);
            }
        });

        localStorage.setItem("favorites", JSON.stringify(favoritos_temp));

        this.props.handleUpdate();

        message.success('Item removido dos favoritos', 0.9);
        
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
                        <Tooltip placement="topRight" title={"Remover item dos favoritos"}>
                            <Remover size={22} onClick={(event) => {
                                    event.stopPropagation();
                                    this.removerItemFavoritos()
                                } }/>
                        </Tooltip>
                    </Description>
                    <Valor>
                        <h2>R$ {this.props.produto.preco_formatado}</h2>
                    </Valor>
                </Content>
            </Cartao>
            </>
        )
    }
}
