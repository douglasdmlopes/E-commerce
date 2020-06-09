import React from 'react'
import { AiOutlineProfile } from "react-icons/ai";
import { TituloStessao } from '../../../styles/global';
import {SubSessao} from '../../../styles/global';
import { Icon, Table } from 'semantic-ui-react';

export default function index() {
    return (
        <>
            <SubSessao>
                <TituloStessao>ESPECIFICAÇÕES</TituloStessao>
                <Table celled style={{background : '#efefef'}}>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Marca</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Modelo</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Processador</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Memória</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Tela</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Câmera</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Bateria</Table.Cell>
                            <Table.Cell style={{textAlign: 'center'}}>-</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </SubSessao>
        </>
    )
}
