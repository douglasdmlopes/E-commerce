import React, {useState, useEffect } from 'react'
import { Slider, ArrowLeft, ArrowRight } from './style';
//import Slider from "react-slick";
import { Loader } from 'semantic-ui-react'
import Card from '../../components/Card/Optimized';
import { FaChevronLeft, FaChevronRight } from  "react-icons/fa";

export default function Index({produtos}) {
    
    const [loading, setLoading] = useState(false);
    const [colunas, setColunas] = useState(6);
    const [screen, setScreen] = useState(window.innerWidth);
    const [ botoes, setBotoes] = useState(true);

    useEffect(() => {
        if(screen <= 350){
            setColunas(1);
            setBotoes(false);
        }else if(screen >= 351 && screen <= 600){
            setBotoes(false);
            setColunas(2);
        }else if(screen >= 601 && screen <= 700){
            setBotoes(false);
            setColunas(3);
        }else if(screen >= 701 && screen <= 860){
            setColunas(4);
        }else if(screen >= 861 && screen <= 960){
            setColunas(5);
        }else if(screen >= 961){
            setColunas(6);
        }
    },[screen]);
    return (
        <>
            <Slider             
            autoPlay={5000}
            animationSpeed={1200}
            slidesPerPage={colunas}
            arrows={botoes}
            arrowLeft={ botoes ? <ArrowLeft name="angle-double-left"><FaChevronLeft size="18"/></ArrowLeft> : ""}
            arrowLeftDisabled={ botoes ? <ArrowLeft name="angle-double-left"><FaChevronLeft size="18"/></ArrowLeft> : ""}
            arrowRight={ botoes ? <ArrowRight name="angle-double-right"><FaChevronRight size="18"/></ArrowRight> : ""}
            arrowRightDisabled={ botoes ? <ArrowRight name="angle-double-right"><FaChevronRight size="18"/></ArrowRight> : ""}
            addArrowClickHandler

            infinite
             >
                {
                    loading ? 
                    
                    <Loader active inline='centered' size='large' style={{marginTop: '105px', marginBottom: '130px'}}/>
                         :
                    produtos.map(produto => (
                        
                        <Card key={produto.id} produto={produto}/>
                        
                    ))

                }
                
            </Slider>
        </>
    )
}
