import React from 'react'
import { Popover } from 'antd';
import { TiHeartFullOutline} from "react-icons/ti";
import { ListaPopOver, BotaoPadrao, BotaoRemover } from '../../styles/global';
import { MdClose} from "react-icons/md";
import { Row, Col  } from 'antd';
import { Link } from 'react-router-dom';

  const content = (<>
    <ListaPopOver style={{maxHeight: 350, overflowY: "auto", overflowX: "hidden", marginTop: -8, marginLeft: -16,marginButton: -8, marginRight: -16}}>     
        
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>
        <li>
            <Row>
                <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Link to={`/product/1`} >
                    <img src="/produto.png" alt="produto" draggable="false"/>
                    <span>Xiaomi Mi mix Aupha 2020</span>
                    </Link>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <BotaoRemover>
                        <MdClose size={22} color="#515151" cursor="pointer"/>
                    </BotaoRemover>
                </Col>
            </Row>
        </li>  
    </ListaPopOver>
    <div style={{marginTop: 20, textAlign: "center"}}>
        <Link to={`/favorites`} ><BotaoPadrao>Todos os Favoritos</BotaoPadrao></Link>
    </div>
    </>);
export default function index() {
    return (
        <>
            <Popover placement="bottom" content={content} title="Favoritos" trigger="click">
                <TiHeartFullOutline size={40} color="#fff" cursor="pointer"/>
            </Popover>
        </>
    )
}
