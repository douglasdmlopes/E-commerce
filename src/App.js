import React from 'react';
//import logo from './logo.svg';
//import { Button, Divider, Form, Grid, Segment, Icon} from 'semantic-ui-react'

import './App.css';
import Pagina from './layouts/pages/pagina/index';

class App extends React.Component {
        
    render(){
      return (
        <div>
          <Pagina>
          <div><h>ola</h></div>
          </Pagina>
        </div>
        );
      }
}

export default App;