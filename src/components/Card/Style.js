import styled from 'styled-components';
import { Card } from 'antd';

export const Cartao = styled(Card)`
/*

    width: 100% audo !important;
    Abaixo indica quantas colunas o componente atual irá ocupar do container.
    Como no container só foram definidas 6 colunas, então caso esse componente
    queira ocupar todas as colunas ele deve ir de 1 a 7 (Algo equivalente ao bootstrap: col-md-12)
    grid-column-start: 1;
    grid-column-end: 7;

    /*Existe um modo mais simples de definir as duas linhas acima:
    grid-column: 1/7;
    */

    /*
    O mesmo que foi feito com as colunas também podem ser feito com as rows,
    grid-row-start    
    */
    
   

   
    /*
        self é exatamente a mesma coisa do items, potem o justify-items e align-items são aplicados no container
        no caso do self ele se aplica apenas ao item especifico, isso ajuda por exemlo caso queira alinhar apenas
        um item especifico do grid...
    */
   /*justify-self: center; posiciona os itens do conteiner referenciando na posição horizontal*/
   /*align-self: center; posiciona os itens do conteiner referenciando na posição vertical*/
   /*
   No caso do justify-self e align-self existem as seguintes possibilidades de posicionamento:
   start - "Os itens ficam alinhados a direita"
   end - "Os itens ficam alinhados a esquerda"
   center - "Os itens ficam centralizados"
   stretch - 
   
   */

*/
`;