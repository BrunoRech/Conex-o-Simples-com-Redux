import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/myAccount" component={MyAccount}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;