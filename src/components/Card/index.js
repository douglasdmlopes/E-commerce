import React from 'react'
//import {Card} from 'antd';
import {Cartao} from './Style';
import { Link } from 'react-router-dom';

import { Rate, Button } from 'antd';

const { Meta } = Cartao;

const ButtonGroup = Button.Group;

export default function index() {
    return (
        <>
            <Cartao
                hoverable
                cover={<img alt="example" src="./produto.png" />}
            > 
                <Meta title="Xiaomi" description="R$ 500,00" />
                <Rate allowHalf defaultValue={2.5} disabled />
                <ButtonGroup>
                    <Button type="ghost " icon="heart" >
                    </Button>
                    <Link to={`/product/1`}>
                        <Button type="ghost " icon="shopping-cart" >
                        Adicionar
                            
                        </Button>
                    </Link>
                </ButtonGroup>
            </Cartao>
        </>
    )
}
