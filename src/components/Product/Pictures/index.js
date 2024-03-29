import React, {useState} from 'react';
import { Pictures } from './Style';
import {SubSessao} from '../../../styles/global';
  
export default function Index({produto}) {

    return (
        <>
        <SubSessao>
            <Pictures
                infinite
                autoPlay={5000}
                animationSpeed={1500}
                >
                {
                    produto.id_img_01 != null ?
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_01}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    :
                        ""
                    
                }

                {
                    produto.id_img_02 != null ?
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_02}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    :
                        ""
                    
                }

                {
                    (produto.id_img_03 != null && produto.id_img_03 != "") ?
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_03}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    :
                    <div>
                        <h3><img src={`/produtos/${produto.id_img_01}.png`} alt={produto.nome} draggable="false"/></h3>
                    </div>
                    
                }

                {
                    (produto.id_img_04 != null && produto.id_img_04 != "") ?
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_04}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    :
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_02}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    
                }

                {
                    (produto.id_img_05 != null && produto.id_img_05 != "") ?
                        <div>
                            <h3><img src={`/produtos/${produto.id_img_05}.png`} alt={produto.nome} draggable="false"/></h3>
                        </div>
                    :
                    <div>
                    <h3><img src={`/produtos/${produto.id_img_01}.png`} alt={produto.nome} draggable="false"/></h3>
                    </div>
                    
                }

            </Pictures>
        </SubSessao>
        </>
    )
}