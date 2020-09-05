import React, { Component } from 'react';
import { Cartao, Picture, Content, Description, Remover, Valor, Quantidade, InputNumber } from './Style';
import { MdRemove, MdAdd} from "react-icons/md";
import { Tooltip, message } from 'antd';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

//export default class Index extends Component {
export default function Index(props) {

   /*constructor(props){
       super(props);
   }*/

    function alertaRemocaoItemFavoritos() {
        confirm({
            title: 'Atenção!',
            icon: <ExclamationCircleOutlined />,
            content: 'Deseja remover o item da lista de favoritos?',
            okText: 'Sim',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk() {
                removerItemFavoritos()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    function removerItemFavoritos() {
        
        let favoritos =[];        
        
        favoritos = JSON.parse(localStorage.getItem("favorites"));

        let favoritos_temp = [];
        
        favoritos.forEach(function(item) {
            if (props.produto.id != item.id) {
                favoritos_temp.push(item);
            }
        });

        localStorage.setItem("favorites", JSON.stringify(favoritos_temp));

        props.handleUpdate();

        message.success('Item removido dos favoritos', 0.9);
        
    }

    //render(){
        return (
            <>
            <Cartao>
                <a href={`/product/` + props.produto.id} > 
                    <Picture src={`/produtos/${props.produto.id_img_01}.png`} />
                </a>
                <Content>
                    <Description>
                        <a href={`/product/` + props.produto.id} >
                            <h2>{props.produto.nome}</h2>
                        </a>
                        <Tooltip placement="topRight" title={"Remover item dos favoritos"}>
                            <Remover size={22} onClick={(event) => {
                                    event.stopPropagation();
                                    alertaRemocaoItemFavoritos()
                                } }/>
                        </Tooltip>
                    </Description>
                    <Valor>
                        <h2>R$ {props.produto.preco_formatado}</h2>
                    </Valor>
                </Content>
            </Cartao>
            </>
        )
    //}
}
