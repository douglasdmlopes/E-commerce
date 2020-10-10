import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Buy from './pages/Buy';
import Request from './pages/Request';
import Finished from './pages/Finished';
import Search from './pages/Search';
import RequestList from './pages/RequestList';
import RequestDetails from './pages/RequestDetails';
import Account from './pages/Account';

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
                <Route path="/finished" component={Finished}/>
                <Route path="/search/:termo" component={Search}/>
                <Route path="/requests/:pedido" component={RequestDetails}/>
                <Route path="/requests" component={RequestList}/>
                <Route path="/Account" component={Account}/>                
            </Switch>
        </BrowserRouter>
    );
}