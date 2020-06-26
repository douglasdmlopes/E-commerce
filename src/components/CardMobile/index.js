import React, { Component }  from 'react'
import { Container, Remover, Picture, Description, Valor, Quantidade, InputNumber } from './Style';
import { Row, Col } from 'antd';
import { Tooltip, message } from 'antd';
import { MdRemove, MdAdd} from "react-icons/md";

export default class Index extends Component {
//export default function index() {

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
                <Container>
                    <Row>
                        <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }} xl={{ span: 23 }}>                        
                            <Col xs={{ span: 8 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 6 }} xl={{ span: 6 }}>
                                <a href={`/product/` + this.props.produto.id} > 
                                    <Picture src={`/produtos/${this.props.produto.id_img_01}.png`} />
                                </a>
                            </Col>
                            <Col xs={{ span: 16 }} sm={{ span: 18 }} md={{ span: 20 }} lg={{ span: 18 }} xl={{ span: 18 }}>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Description>
                                        <a href={`/product/` + this.props.produto.id} >
                                            <h2>{this.props.produto.nome}</h2>
                                        </a>
                                    </Description>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Valor>
                                        <h2>R$ {this.props.produto.preco_formatado}</h2>
                                    </Valor>
                                </Col>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                    <Quantidade>
                                        <h2>Quantidade: </h2>
                                        <span>
                                            <Tooltip placement="topRight" title={"Adicionar"}>
                                                <MdAdd size={25} style={{'cursor': 'pointer'}}
                                                    onClick={
                                                        () => {
                                                            this.addSubItem('add');
                                                        }
                                                    }/>
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
                                                    }/>
                                            </Tooltip>
                                        </span>
                                    </Quantidade>
                                </Col>
                            </Col>
                        </Col>
                        <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }}>
                            <Remover size={22} onClick={(event) => {
                                event.stopPropagation();
                                this.removerItemCarrinho()
                            } } />
                        </Col>
                    </Row>            
                </Container>
                
            </>
        )
    }
}
