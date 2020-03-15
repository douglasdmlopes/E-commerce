import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Buy from './pages/Buy';
import Request from './pages/Request';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/product/:id_produto" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/request" component={Request}/>
            </Switch>
        </BrowserRouter>
    );
}