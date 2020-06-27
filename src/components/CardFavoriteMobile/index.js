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
                                
                            </Col>
                        </Col>
                        <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1 }} xl={{ span: 1 }}>
                            <Remover size={22} onClick={(event) => {
                                event.stopPropagation();
                                this.removerItemFavoritos()
                            } } />
                        </Col>
                    </Row>            
                </Container>
                
            </>
        )
    }
}
