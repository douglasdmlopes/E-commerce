import React from 'react'
//import {Card} from 'antd';
import {Cartao} from './Style';

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
                    <Button type="ghost " icon="shopping-cart" >
                        Adicionar
                    </Button>
                </ButtonGroup>
            </Cartao>
        </>
    )
}
