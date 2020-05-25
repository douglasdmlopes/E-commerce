import React, {useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/Slide';
import LogoSlide from '../../components/LogoSlide';
import Card from '../../components/Card';
import {Sessao, TitleHome} from './style';
import { Row, Col, notification } from 'antd';

import api from '../../services/api';

import { Loader } from 'semantic-ui-react'

export default function Index() {
    
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        
        let produtos = [
            {
                "id": 1,
                "nome": "Samsung Galaxy A11",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "799.99",
                "avaliacao": "3.8",
                "descricao": "O Samsung Galaxy A11 é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.4 polegadas com uma resolução de 1560x720 pixel que não é das mais elevadas. Sobre as características deste Samsung Galaxy A11 na verdade não falta nada. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS. Tem também leitor multimídia, rádio, videoconferência e bluetooth. Enfatizamos a boa memória interna de 32 GB com a possibilidade de expansão.\nO Samsung Galaxy A11 é um produto com poucos concorrentes em termos de multimídia graças à câmera de 13 megapixels que permite ao Samsung Galaxy A11 tirar fotos fantásticas com uma resolução de 4128x3096 pixels e gravar vídeos em alta definição (Full HD) com uma resolução de 1920x1080 pixels. Muito fino, 8 milímetros, o que torna o Samsung Galaxy A11 realmente interessante.",
                "frete": "24.99",
                "id_img_01": "galaxy-A11-1",
                "id_img_02": "galaxy-A11-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "799,99"
            },
            {
                "id": 2,
                "nome": "Samsung Galaxy A21",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1500.00",
                "avaliacao": "3.4",
                "descricao": "O Galaxy A21 é um smartphone básico que tem uma quantidade considerável de qualidades, entre elas a tela AMOLED, ainda que com resolução HD, um conjunto com 4 câmeras traseiras e bateria com 4000 mAh de capacidade.",
                "frete": "24.99",
                "id_img_01": "galaxy-A21-1",
                "id_img_02": "galaxy-A21-2",
                "id_img_03": "galaxy-A21-3",
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.500,00"
            },
            {
                "id": 3,
                "nome": "Samsung Galaxy A31",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1800.00",
                "avaliacao": "3.7",
                "descricao": "O Galaxy A31 vem com algumas mudanças importantes em relação aos seus irmãos mais velhos, o Galaxy A30 e o A30s, focando em autonomia de bateria, tela grande e um conjunto de quatro câmeras traseiras.",
                "frete": "24.99",
                "id_img_01": "galaxy-A31-1",
                "id_img_02": "galaxy-A31-2",
                "id_img_03": "galaxy-A31-3",
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.800,00"
            },
            {
                "id": 4,
                "nome": "Samsung Galaxy A41",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1500.00",
                "avaliacao": "3.8",
                "descricao": "O Galaxy A41 vem com algumas poucas melhorias em relação ao Galaxy A40, trazendo um processador bastante competente e um conjunto interessante de câmeras, além da tela Super AMOLED de 6.1 polegadas da Samsung.",
                "frete": "24.99",
                "id_img_01": "galaxy-A41-1",
                "id_img_02": "galaxy-A41-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.500,00"
            },
            {
                "id": 5,
                "nome": "Samsung Galaxy M11",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1200.00",
                "avaliacao": "3.8",
                "descricao": "O Galaxy M11 vem com um bom conjunto de novidades, mantendo a proposta de ser um modelo básico com boa relação custo-benefício e vendido apenas de forma on-line para manter o seu preço mais acessível.",
                "frete": "24.99",
                "id_img_01": "galaxy-M11-1",
                "id_img_02": "galaxy-M11-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.200,00"
            },
            {
                "id": 6,
                "nome": "Samsung Galaxy Note 10 Lite",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "2300.00",
                "avaliacao": "4.3",
                "descricao": "O Galaxy Note10 Lite vem com uma configuração típica de um top de linha de 2019, além de já adiantar uma nova identidade visual que será utilizada pela Samsung em 2020, especialmente na região das câmeras.",
                "frete": "24.99",
                "id_img_01": "galaxy-note-10-lite-1",
                "id_img_02": "galaxy-note-10-lite-2",
                "id_img_03": "galaxy-note-10-lite-3",
                "id_img_04": "galaxy-note-10-lite-4",
                "id_img_05": null,
                "preco_formatado": "2.300,00"
            },
            {
                "id": 7,
                "nome": "Samsung Galaxy S10 Lite",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "2600.00",
                "avaliacao": "4.2",
                "descricao": "O Galaxy S10 Lite vem, ao que tudo indica, com as mesmas especificações do Galaxy S10 original, trazendo apenas uma tela menor de 5,8 polegadas. Virá com carregador rápido de 15 watts tanto via cabo quanto sem fios.",
                "frete": "24.99",
                "id_img_01": "galaxy-s10-lite-1",
                "id_img_02": "galaxy-s10-lite-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.600,00"
            },
            {
                "id": 8,
                "nome": "Samsung Galaxy S20",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "4899.99",
                "avaliacao": "4.3",
                "descricao": "O Galaxy S20 vem com um conjunto aprimorado de câmeras, trazendo um conjunto com periscópio com zoom óptico de 5x e um quatro módulo com câmera ToF (Time of Flight), além de ter uma das configurações mais potentes de 2020.",
                "frete": "24.99",
                "id_img_01": "galaxy-s20-5G-1",
                "id_img_02": "galaxy-s20-5G-2",
                "id_img_03": "galaxy-s20-5G-3",
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "4.899,99"
            },
            {
                "id": 9,
                "nome": "Samsung Galaxy S20 Ultra",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "7199.99",
                "avaliacao": "4.5",
                "descricao": "O Galaxy S20 Ultra 5G oferece basicamente as mesmas características do Galaxy S20 \"normal\", basicamente diferenciando-se pelo conjunto de câmeras, uma delas com 108 megapixels projetada para gerar fotos de 12 MP.",
                "frete": "24.99",
                "id_img_01": "galaxy-s20-ultra-5g-1",
                "id_img_02": "galaxy-s20-ultra-5g-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "7.199,99"
            },
            {
                "id": 10,
                "nome": "Samsung Galaxy A01",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "999.99",
                "avaliacao": "3.7",
                "descricao": "O Galaxy A01 é um dos smartphones mais básicos da empresa, trazendo um conjunto mínimo de especificações para que o usuário tenha uma experiência inicial para quem busca economizar o máximo possível.",
                "frete": "24.99",
                "id_img_01": "galaxy-A01-1",
                "id_img_02": "galaxy-A01-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "999,99"
            },
            {
                "id": 11,
                "nome": "Samsung Galaxy A10",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "849.99",
                "avaliacao": "4.0",
                "descricao": "O Galaxy A10 é o modelo mais básico dessa nova geração da Samsung, trazendo todos os quesitos de um modelo básico sem deixar o consumidor na mão. Seu quesito mais básico é trazer 2 GB de memória RAM.",
                "frete": "24.99",
                "id_img_01": "galaxy-A10-1",
                "id_img_02": "galaxy-A10-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "849,99"
            },
            {
                "id": 12,
                "nome": "Samsung Galaxy A20",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "949.99",
                "avaliacao": "4.2",
                "descricao": "O Galaxy A20 é um modelo mais ou menos básico que tem o grande diferencial de trazer uma tela com a tecnologia Super AMOLED da Samsung, ainda que com uma resolução mais baixa. Ainda assim vem com uma qualidade bem acima da média para o segmento.",
                "frete": "24.99",
                "id_img_01": "galaxy-A20-1",
                "id_img_02": "galaxy-A20-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "949,99"
            },
            {
                "id": 13,
                "nome": "Samsung Galaxy A30",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1099.00",
                "avaliacao": "4.0",
                "descricao": "O Galaxy A30 é um modelo que pode ser classificado como um \"básico poderoso\", trazendo especificações interessantes e uma tela acima da média, além de um poderoso conjunto de câmeras, uma delas com 16 megapixels.",
                "frete": "24.99",
                "id_img_01": "galaxy-A30-1",
                "id_img_02": "galaxy-A30-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.099,00"
            },
            {
                "id": 14,
                "nome": "Samsung Galaxy A40",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1399.99",
                "avaliacao": "4.0",
                "descricao": "O Galaxy A40 é um modelo que pode ser considerado um \"super intermediário de 2019\", trazendo um chip próprio da Samsung, tela com tecnologia Super AMOLED de alta qualidade e carregamento rápido de 15 watts.",
                "frete": "24.99",
                "id_img_01": "galaxy-A40-1",
                "id_img_02": "galaxy-A40-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.399,99"
            },
            {
                "id": 15,
                "nome": "Samsung Galaxy A50",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "1599.99",
                "avaliacao": "4.1",
                "descricao": "O Galaxy A50 e um modelo intermediário da Samsung que se propõe a oferecer um \"gostinho\" do segmento top de linha da empresa, seja o Galaxy S ou o Galaxy Note mais recente. Vem com câmera tripla, uma delas TOF, e bateria de 4000 mAh.",
                "frete": "24.99",
                "id_img_01": "galaxy-A50-1",
                "id_img_02": "galaxy-A50-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.599,99"
            },
            {
                "id": 16,
                "nome": "Samsung Galaxy A80",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "2417.99",
                "avaliacao": "4.3",
                "descricao": "O Galaxy A80 é um modelo intermediário com um pé no segmento top de linha. Tem um enorme aproveitamento da área frontal para tela sem fazer uso de orifícios, mas sim uma câmera pop mecânica para selfies.",
                "frete": "24.99",
                "id_img_01": "galaxy-A80-1",
                "id_img_02": "galaxy-A80-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.417,99"
            },
            {
                "id": 17,
                "nome": "Samsung Galaxy Fold",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "11499.99",
                "avaliacao": "3.8",
                "descricao": "O Galaxy Fold, como o nome indica, é o smartphone dobrável da Samsung. Quando \"fechado\" ele conta somente com 4.8 polegadas. Porém, quando aberto, oferece generosas 7,3 polegadas abastecidas pelo poderoso Snapdragon 855.",
                "frete": "24.99",
                "id_img_01": "galaxy-Fold-1",
                "id_img_02": "galaxy-Fold-2",
                "id_img_03": "galaxy-Fold-3",
                "id_img_04": "galaxy-Fold-4",
                "id_img_05": null,
                "preco_formatado": "11.499,99"
            },
            {
                "id": 18,
                "nome": "Samsung Galaxy Note 10",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "3400.99",
                "avaliacao": "4.8",
                "descricao": "Fugindo um pouco da identidade visual do Galaxy S10, mas ainda mantendo o \"DNA Samsung\", o Galaxy Note 10 virá, o que tudo indica, com uma tela de impressionantes 6.75 polegadas, além de um conjunto de recursos de ponta para os usuários mais exigentes.",
                "frete": "24.99",
                "id_img_01": "galaxy-Note-10-1",
                "id_img_02": "galaxy-Note-10-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.400,99"
            },
            {
                "id": 19,
                "nome": "Samsung Galaxy S10",
                "marca": "Samsung",
                "tipo": "Smartphone",
                "preco": "2900.00",
                "avaliacao": "4.6",
                "descricao": "O Samsung Galaxy S10 é um smartphone Android com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.1 polegadas coloca esse Samsung no topo de sua categoria. Além disso a resolução é das mais altas atualmente em circulação: 3040x1440 pixel. As funcionalidades oferecidas pelo Samsung Galaxy S10 são muitas e todas top de linha. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 128 GB com a possibilidade de expansão. Câmera de 12 megapixel. A espessura de apenas 7.8 milímetros torna o Samsung Galaxy S10 um dos telefones mais finos que existem.",
                "frete": "24.99",
                "id_img_01": "galaxy-S10-1",
                "id_img_02": "galaxy-S10-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.900,00"
            },
            {
                "id": 20,
                "nome": "Xiaomi Mi 10 5G",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "3499.99",
                "avaliacao": "4.8",
                "descricao": "O Xiaomi Mi 10 5G, apesar de não trazer o \"Pro\" como a versão mais cara, é um dos smartphones mais poderosos de 2020, trazendo um conjunto bastante completo de câmeras e o chip Snapdragon 865 com até 12 GB de memória RAM.",
                "frete": "24.99",
                "id_img_01": "mi-10-5G-1",
                "id_img_02": "mi-10-5G-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.499,99"
            },
            {
                "id": 21,
                "nome": "Xiaomi Mi 10 Lite 5G",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "1999.99",
                "avaliacao": "4.1",
                "descricao": "O Mi 10 Lite 5G mantém a tradição dos aparelhos \"lite\" da linha Mi, sendo um aparelho que quase pode ser considerado um modelo top de linha, trazendo um conjunto de especificações bastante poderoso com suporte a 5G.",
                "frete": "24.99",
                "id_img_01": "mi-10-lite-5G-1",
                "id_img_02": "mi-10-lite-5G-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.999,99"
            },
            {
                "id": 22,
                "nome": "Xiaomi Mi 10 Pro 5G ",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "4299.99",
                "avaliacao": "4.6",
                "descricao": "O Mi 10 Pro 5G tem tantos destaques que é difícil escolher o que priorizar. Vem com o Snapdragon 865 com até 16 GB de memória RAM e 512 GB de memória interna, além de um carregamento rápido de 65 watts.",
                "frete": "24.99",
                "id_img_01": "mi-10-pro-5G-1",
                "id_img_02": "mi-10-pro-5G-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "4.299,99"
            },
            {
                "id": 23,
                "nome": "Xiaomi Poco X2",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "2000.00",
                "avaliacao": "4.0",
                "descricao": "O Poco X2 é um intermediário premium com uma baita configuração, trazendo o chip Snapdragon 730G com até 256 GB de memória interna e 8 GB de memória RAM, além de trazer um bom conjunto de câmeras e uma bateria com 4500 mAh de capacidade.",
                "frete": "24.99",
                "id_img_01": "poco-x2-1",
                "id_img_02": "poco-x2-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.000,00"
            },
            {
                "id": 24,
                "nome": "Xiaomi Redmi K30 Pro",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "2399.99",
                "avaliacao": "4.8",
                "descricao": "O Redmi K30 Pro tem a proposta de trazer uma configuração digna de um modelo top de linha com um preço mais acessível, trazendo o chip Snapdragon 865 com até 12 GB de memória RAM e 256 GB de memória interna.",
                "frete": "24.99",
                "id_img_01": "redmi-k30-pro-1",
                "id_img_02": "redmi-k30-pro-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.399,99"
            },
            {
                "id": 25,
                "nome": "Xiaomi Mi 9",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "2499.99",
                "avaliacao": "4.8",
                "descricao": "O Xiaomi Mi 9 mantém a boa fama da linha e adiciona os recursos mais recentes disponíveis. Entre eles a câmera de 48 megapixels tripla, tela com maior precisão de cor, sensor digital embutido na tela e o chip Snapdragon 855.",
                "frete": "24.99",
                "id_img_01": "mi-9-1",
                "id_img_02": "mi-9-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.499,99"
            },
            {
                "id": 26,
                "nome": "Xiaomi Mi 9 SE",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "1700.00",
                "avaliacao": "4.2",
                "descricao": "O Xiaomi Mi 9 SE é uma versão mais básica do poderosíssimo Xiaomi Mi 9, seguindo a mesma nomenclatura utilizada pela Apple. Isso não significa que seja um modelo básico, trazendo um poderoso conjunto de câmeras e um chip respeitável.",
                "frete": "24.99",
                "id_img_01": "mi-9-se-1",
                "id_img_02": "mi-9-se-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.700,00"
            },
            {
                "id": 27,
                "nome": "Xiaomi Mi 9T",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "2500.00",
                "avaliacao": "5.0",
                "descricao": "O Xiaomi Mi 9T precisaria apenas de um empurrãozinho para ser classificado como um modelo top de linha, sendo um modelo intermediário bastante acima da média tanto em configuração quanto em qualidade de câmera.",
                "frete": "24.99",
                "id_img_01": "mi-9t-1",
                "id_img_02": "mi-9t-2",
                "id_img_03": "mi-9t-3",
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.500,00"
            },
            {
                "id": 28,
                "nome": "Xiaomi Mi A3",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "1599.99",
                "avaliacao": "4.0",
                "descricao": "O Xiaomi Mi A3 foi anunciado como um modelo intermediário que entrega um bom pacote de recursos e configuração por um preço interessante. Além disso, vem com o Android One, uma versão mais leve do sistema do Google.",
                "frete": "24.99",
                "id_img_01": "mi-a3-1",
                "id_img_02": "mi-a3-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "1.599,99"
            },
            {
                "id": 29,
                "nome": "Xiaomi Mi Mix Alpha",
                "marca": "Xiaomi",
                "tipo": "Smartphone",
                "preco": "11000.00",
                "avaliacao": "4.9",
                "descricao": "O Xiaomi Mi Mix Alpha é um modelo \"premium\" em todos os aspectos, trazendo uma tela flexível que vai até a parte traseira, construção em titânio e cerâmica e um conjunto de câmeras contando com uma de 108 megapixels.",
                "frete": "24.99",
                "id_img_01": "mi-mix-alpha-1",
                "id_img_02": "mi-mix-alpha-2",
                "id_img_03": "mi-mix-alpha-3",
                "id_img_04": "mi-mix-alpha-4",
                "id_img_05": "mi-mix-alpha-5",
                "preco_formatado": "11.000,00"
            },
            {
                "id": 30,
                "nome": "Apple SE (2020)",
                "marca": "Apple",
                "tipo": "Smartphone",
                "preco": "3699.99",
                "avaliacao": "4.5",
                "descricao": "O iPhone SE 2, conhecido antes de seu lançamento como iPhone 9, trazem basicamente a mesma proposta do iPhone SE de primeira geração, trazendo um design diferenciado e um preço mais acessível sem deixar de lado as especificações atualizadas.",
                "frete": "24.99",
                "id_img_01": "iphone-se-1",
                "id_img_02": "iphone-se-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.699,99"
            },
            {
                "id": 31,
                "nome": "Apple iPhone 11",
                "marca": "Apple",
                "tipo": "Smartphone",
                "preco": "3500.00",
                "avaliacao": "4.5",
                "descricao": "Segundo os principais rumores, o iPhone XI chegará ao mercado em 11 de setembro com um conjunto de câmeras triplas na parte traseira otimizada para realidade aumentada e tela de 5.8 polegadas com tecnologia OLED.",
                "frete": "24.99",
                "id_img_01": "iphone-11-1",
                "id_img_02": "iphone-11-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.500,00"
            },
            {
                "id": 32,
                "nome": "Apple iPhone 11 Pro",
                "marca": "Apple",
                "tipo": "Smartphone",
                "preco": "5200.00",
                "avaliacao": "4.5",
                "descricao": "O iPhone 11 Pro vem com uma tela maior e mais autonomia de bateria e oferece basicamente o mesmo conjunto de especificações do irmão menor, o iPhone 1. Acrescenta uma terceira camera teleobjetiva ao conjunto.",
                "frete": "24.99",
                "id_img_01": "iphone-11-pro-1",
                "id_img_02": "iphone-11-pro-1",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "5.200,00"
            },
            {
                "id": 33,
                "nome": "Apple iPhone 11 Pro Max",
                "marca": "Apple",
                "tipo": "Smartphone",
                "preco": "6000.00",
                "avaliacao": "4.5",
                "descricao": "O iPhone 11 Pro Max é o maior e mais avançado smartphone anunciado pela Apple em 2019, trazendo o conjunto de câmeras do iPhone 11 Pro com uma tela maior e mais capacidade de bateria, completando os lançamentos da empresa do ano.",
                "frete": "24.99",
                "id_img_01": "iphone-11-pro-max-1",
                "id_img_02": "iphone-11-pro-max-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "6.000,00"
            },
            {
                "id": 34,
                "nome": "Apple iPhone XS",
                "marca": "Apple",
                "tipo": "Smartphone",
                "preco": "4700.00",
                "avaliacao": "4.5",
                "descricao": "O iPhone XS, junto com o iPhone XS Max, são os sucessores do iPhone X anunciado em 2017, trazendo melhorias significativas de tela, um conjunto de câmeras de primeira linha e o poderoso chip Apple A12 Bionic.",
                "frete": "24.99",
                "id_img_01": "iphone-xs-1",
                "id_img_02": "iphone-xs-1",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "4.700,00"
            },
            {
                "id": 35,
                "nome": "Huawei Honor 30",
                "marca": "Huawei",
                "tipo": "Smartphone",
                "preco": "3000.00",
                "avaliacao": "4.3",
                "descricao": "O Honor 30 é um modelo base da nova geração de Huawei, trazendo um kit \"top de linha básico\", trazendo um chip um pouco menos potente, mas ainda assim capaz de oferecer uma experiência esperada de um modelo avançado.",
                "frete": "24.99",
                "id_img_01": "honor-30-1",
                "id_img_02": "honor-30-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.000,00"
            },
            {
                "id": 36,
                "nome": "Huawei Honor 30 Pro",
                "marca": "Huawei",
                "tipo": "Smartphone",
                "preco": "3500.00",
                "avaliacao": "4.4",
                "descricao": "O Honor 30 Pro oferece o que a Huawei tem de mais moderno, trazendo seu chip mais poderoso, com suporte a redes 5G, um conjunto avançado de câmeras com sensor TOF 3D tanto na parte frontal quanto traseira, além da tela OLED.",
                "frete": "24.99",
                "id_img_01": "honor-30-pro-1",
                "id_img_02": "honor-30-pro-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.500,00"
            },
            {
                "id": 37,
                "nome": "Huawei Honor 20i",
                "marca": "Huawei",
                "tipo": "Smartphone",
                "preco": "2600.00",
                "avaliacao": "4.2",
                "descricao": "O Honor 20i é um modelo intermediário \"premium\" da Huawei, trazendo boa configuração, design bastante diferenciado e até 256 GB de memória interna, sendo uma boa opção para quem busca custo-benefício com \"algo a mais\".",
                "frete": "24.99",
                "id_img_01": "honor-20-i-1",
                "id_img_02": "honor-20-i-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.600,00"
            },
            {
                "id": 38,
                "nome": "Lenovo Z6",
                "marca": "Lenovo",
                "tipo": "Smartphone",
                "preco": "2200.00",
                "avaliacao": "4.0",
                "descricao": "O Lenovo Z6 é um modelo que não vem com os chips mais potentes do momento, mas chama a atenção pelo conjunto bastante completo de recursos, como a tela com 120 Hz, câmera tripla e bateria com 4000 mAh de capacidade.",
                "frete": "24.99",
                "id_img_01": "Z6-1",
                "id_img_02": "Z6-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.200,00"
            },
            {
                "id": 39,
                "nome": "Lenovo Z6 Pro",
                "marca": "Lenovo",
                "tipo": "Smartphone",
                "preco": "2600.00",
                "avaliacao": "4.3",
                "descricao": "O Lenovo Z6 Pro é um aparelho para quem busca o melhor possível do Android em um aparelho com uma ficha técnica de respeito, trazendo 4 câmeras traseiras, até 12 GB de memória RAM e 512 GB de memória interna.",
                "frete": "24.99",
                "id_img_01": "Z6-pro-1",
                "id_img_02": "Z6-pro-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.600,00"
            },
            {
                "id": 40,
                "nome": "SSD Kingston A400 - 240GB",
                "marca": "Kingston",
                "tipo": "Hardware",
                "preco": "300.00",
                "avaliacao": "4.0",
                "descricao": "Conheça o SSD A400 da Kingston. Performance incrível e tecnologia de ponta! Este SSD possui com a tecnologia 3D NAND (também chamada de V-NAND). Performance não será problema com este SSD. Ele possui uma controladora de última geração para velocidades de leitura e gravação de até 500MB\/s e 350MB\/s, este SSD é 10x mais rápido do que um HD tradicional para melhor desempenho, resposta ultrarrápida em multitarefas e um computador mais rápido de modo geral. O seu desktop merece esse grande upgrade de velocidade! Comparados a discos rígidos mecânicos, o SSD A400 aumenta de forma drástica a resposta do seu PC com tempos maravilhosos de inicialização, carregamento e transferência. Além dessa performance incrível, este SSD também é mais confiável e durável do que um disco rígido comum. Este A400 possui 240GB de capacidade, o tamanho certo para o que você precisa no dia a dia.",
                "frete": "24.99",
                "id_img_01": "kingston-1",
                "id_img_02": "kingston-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "300,00"
            },
            {
                "id": 41,
                "nome": "SSD Kingston A400 - 960GB",
                "marca": "Kingston",
                "tipo": "Hardware",
                "preco": "900.00",
                "avaliacao": "4.2",
                "descricao": "SSD A400 da Kingston é o upgrade que você precisa! Esta unidade de estado sólido, comparada a discos rígidos mecânicos, aumenta de forma drástica a resposta do seu PC com tempos maravilhosos de inicialização, carregamento e transferência. É reforçado com uma controladora de última geração para velocidades de leitura e gravação de até 500MB\/s e 450MB\/s, este SSD é 10x mais rápido do que um disco rígido tradicional para melhor desempenho, resposta ultrarrápida em multitarefas e um computador mais rápido de modo geral. O seu desktop merece esse grande upgrade de velocidade! Este SSD também conta com a tecnologia 3D NAND (também chamada de V-NAND). Uma estrutura de circuitos integrados capazes de guardar dados que preveem a criação de módulos com várias camadas de chips de silício empilhadas. Esse empilhamento de camadas dá o aspecto tridimensional que foi usado para batizar esse recurso. Além dessa performance incrível, este SSD também é mais confiável e durável do que um disco rígido comum. Este A400 foi produzido com 960GB de capacidade. Para que você não se preocupe com espaço e fique no que importa em sua utilização.",
                "frete": "24.99",
                "id_img_01": "kingston-1",
                "id_img_02": "kingston-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "900,00"
            },
            {
                "id": 42,
                "nome": "Intel Core i5-9400F",
                "marca": "Intel",
                "tipo": "Hardware",
                "preco": "999.99",
                "avaliacao": "4.1",
                "descricao": "Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!",
                "frete": "24.99",
                "id_img_01": "core-i5-1",
                "id_img_02": "core-i5-1",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "999,99"
            },
            {
                "id": 43,
                "nome": "Memória HyperX Fury, 8GB",
                "marca": "HyperX",
                "tipo": "Hardware",
                "preco": "384.99",
                "avaliacao": "4.1",
                "descricao": "A Memória RAM HyperX FURY DDR4 apresenta um visual incrível com um dissipador de calor atualizado. Com um potencial incrível para você performar em alto nível, ela conta com overclock automático Plug & Play para módulos de velocidades até 2666MHz, sendo compatível com as mais recentes CPUs Intel e AMD. A Memória RAM HyperX FURY DDR4 possui garantia vitalícia, sendo uma atualização excelente e com preço acessível para fazer com que você tenha um desempenho incrível no seu jogo preferido. Sinta a verdadeira fúria das Memórias HyperX e tenha uma experiência jamais vivenciada antes.",
                "frete": "24.99",
                "id_img_01": "memoria-8gb-1",
                "id_img_02": "memoria-8gb-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "384,99"
            },
            {
                "id": 44,
                "nome": "Notebook Asus Vivobook X510UA",
                "marca": "Asus",
                "tipo": "Notebook",
                "preco": "2599.99",
                "avaliacao": "4.1",
                "descricao": "O ASUS VivoBook é a combinação perfeita de beleza e desempenho. A tecnologia ASUS SonicMaster é uma otimização de hardware e software para entregar o melhor sistema de som em um notebook. Um codec profissional garante precisão e desempenho de áudio, um amplificador otimizado para notebook proporciona ainda mais volume, enquanto caixas de som e câmaras de ressonância aprimoram os graves, provocando uma experiência mais imersiva.",
                "frete": "24.99",
                "id_img_01": "asus-vivobook-x510ua-1",
                "id_img_02": "asus-vivobook-x510ua-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.599,99"
            },
            {
                "id": 45,
                "nome": "Notebook Lenovo Ideapad S145",
                "marca": "Lenovo",
                "tipo": "Notebook",
                "preco": "3700.00",
                "avaliacao": "4.1",
                "descricao": "O notebook Lenovo Ideapad S145 tem um design mais fino, compacto e sofisticado, com acabamento metálico na cor prata. A tela Full HD de 15.6\" é antirreflexo e as bordas ultrafinas do notebook permitem uma tela infinita, para você ter um notebook com design muito mais elegante e sofisticado. O modelo vem equipado com placa de Vídeo dedicada NVIDIA GeForce MX110 GDDR5 2GB, que resulta em mais agilidade e performance para a edição de fotos e vídeos.Desempenho de ponta com processador Intel Core i7-8565U; memória RAM de 8GB; capacidade do HD de 1TB, além do sistema operacional Windows 10 home assegura um notebook de alta tecnologia.Alto falantes com certificação Dolby Áudio garantem som alto e definido. Conte com o WiFi AC ultrarrápido para mais velocidade de navegação, e também com conexões como 02 USB 3.1, 01 USB 2.0, 01 Porta combo para Headset\/Smartphone e 01 HDMI.",
                "frete": "24.99",
                "id_img_01": "ideapad-s145-i7-1",
                "id_img_02": "ideapad-s145-i7-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "3.700,00"
            },
            {
                "id": 46,
                "nome": "Notebook Ideapad 330",
                "marca": "Lenovo",
                "tipo": "Notebook",
                "preco": "2200.00",
                "avaliacao": "5.0",
                "descricao": "O Lenovo Ideapad 330 é um modelo intermediário que vem com a oitava geração de processadores Intel de baixa voltagem, sendo uma opção para quem busca maximizar a relação custo-benefício e gosta da marca.",
                "frete": "24.99",
                "id_img_01": "ideapad-0330-1",
                "id_img_02": "ideapad-0330-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.200,00"
            },
            {
                "id": 47,
                "nome": "Notebook LG Ultra Slim 14U380",
                "marca": "LG",
                "tipo": "Notebook",
                "preco": "2200.00",
                "avaliacao": "4.2",
                "descricao": "O novo notebook Ultra Slim com display de 14 polegadas HD LED LCD tem apenas 1,40Kg e é o mais leve da categoria com Processador Intel® Celeron®. Desfrute de entretenimento em casa ou em movimento.",
                "frete": "24.99",
                "id_img_01": "lg-quad-core-4gb-1",
                "id_img_02": "lg-quad-core-4gb-2",
                "id_img_03": null,
                "id_img_04": null,
                "id_img_05": null,
                "preco_formatado": "2.200,00"
            }
        ];
        
        localStorage.setItem("produtos", JSON.stringify(produtos));
        console.log(JSON.parse(localStorage.getItem("produtos")));
        setProdutos(produtos);
        window.setTimeout(() => {setLoading(false)}, 300);
        /*
        async function fetchData() {
            setLoading(true);

            await api.post(`/api`)
            .then(response => {
                const dados = response.data;z
                if(dados.error == 0){
                    setProdutos(dados.data);                
                }else{
                    setProdutos([]);
                }

            })
            .catch(e => {
                console.error(e);
                console.log("Erro ao tentar se conectar com o servidor");
                notification['error']({
                    message: 'Desculpe',
                    description:
                      'Ocorreu um erro ao tentar se conectar ao servidor, tente novamente mais tarde.',
                    placement: 'bottomRight'
                  });
                
            });
            
            setLoading(false);
        }
        fetchData();*/
        
    }, []);
    
    return (
        <>
        <Header/>
        <Slide/>
        <TitleHome>Principais Marcas</TitleHome>
        <LogoSlide/>
        <TitleHome>Produtos</TitleHome>
        <Sessao>
            <Row>
                {
                    loading ? 
                    
                    <Loader active inline='centered' size='large'/>
                         :
                    produtos.map(produto => (
                        <Col key={produto.id} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 4 }}>
                            <Card produto={produto}/>
                        </Col>
                    ))

                }

            </Row>
        </Sessao>
        
        {
            loading ? "" : <Footer/>
        }
        
        </>
    )
}
