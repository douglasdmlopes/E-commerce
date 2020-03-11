import React from 'react';
import { Popover } from 'antd';
import { ListaPopOver, BotaoPadrao, BotaoRemover } from '../../styles/global';
import { TiShoppingCart } from "react-icons/ti";
import { MdClose} from "react-icons/md";
import { Row, Col  } from 'antd';
import { Link } from 'react-router-dom';
import { InputNumber } from 'antd';


export default function index() {

    const content = (<>
        <ListaPopOver style={{maxHeight: 350, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>     
        <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
            <Link to={`/product/1`} >
            <li>
                <Row>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <img src="/produto.png" alt="produto" draggable="false"/>
                        <span>Xiaomi Mi mix Aupha 2020</span>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                        <BotaoRemover>
                            <MdClose size={22} color="#515151" cursor="pointer"/>
                        </BotaoRemover>
                    </Col>
                </Row>
            </li>
            </Link>
        </ListaPopOver>
        <div style={{marginTop: 20, textAlign: "center"}}>
            <Link to={`/cart`} ><BotaoPadrao>Abrir Carrinho</BotaoPadrao></Link>
        </div>
        </>);


    return (
        <>
            <Popover placement="bottom" content={content} title="Carrinho" style="max-height: 200px !important;" trigger="click">
                <TiShoppingCart size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
