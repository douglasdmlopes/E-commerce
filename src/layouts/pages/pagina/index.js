import React from 'react';
import './style.css';
import Header from '../../../layouts/components/header/index';
import Footer from '../../../layouts/components/footer/index';

class Pagina extends React.Component {
    
    render(){
        return (
            <div>
                <Header/>
                    <div>{this.props.children}</div>
                <Footer/>
            </div>
            
        );
    }
}

export default Pagina;