import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './utils/Store';

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));

