import React from 'react';
import Header from '../../components/Header';

export default function index() {
    return (
        <div>
            <Header/>
            Carrinho:
            Possui botão realizar pedido que manda para a página "Pedido"
            Na página de pedido (request) deve conter:

            Listagem de produtos (com quantidade) selecionados
            Endereço (Não editavel)
            Forma de pagamento
            botão "finalizar pedido"

        </div>
    )
}
