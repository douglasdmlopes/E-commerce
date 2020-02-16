import styled from 'styled-components';


export const Sessao = styled.section`
    /*
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 10px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 3rem;
    align-items: center;*/

    display: grid;
    /*
        grid-template-columns: A quantidade de colunas que o container terá,
        exemplo: no bootstrap por padrão são 12 colunas,
        então para recriar o bootstrap aqui seria 
        "grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;"
    */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    
    //grid-template-rows: 30vh 30vh 30vh; //Nesse exemplo esse container teria 3 grids com tamanho de 30vh cada
    grid-gap: 15px;/*Equivalente a "grid-row-gap: 15px;" e "grid-column-gap: 15px"*/

    justify-items: center; /*posiciona os itens do conteiner referenciando na posição horizontal*/
    align-items: center; /*posiciona os itens do conteiner referenciando na posição vertical*/

    /*

    No caso do justify-items e align-items existem as seguintes possibilidades de posicionamento:
    start - "Os itens ficam alinhados a direita"
    end - "Os itens ficam alinhados a esquerda"
    center - "Os itens ficam centralizados"
    stretch - 
    
    */
    /*No caso atual não terá efeito pois os itens (cards) estão ocupando 100% do espaço do grid disponivel*/

    padding-top: 25px; 
    padding-bottom: 25px;



    @media (max-width: 671px) {
        transform: scale(0.97);
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3px;
    }

    @media (min-width: 672px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 8px;
        grid-column-gap: 3px;
    }

    @media (min-width: 872px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-row-gap: 8px;
        grid-column-gap: 3px;
    }

    @media (min-width: 1040px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-row-gap: 8px;
        grid-column-gap: 3px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5px;
    }

    @media (min-width: 768px) {
        
        padding-left: 20px;
        padding-right: 20px;
    }

`;