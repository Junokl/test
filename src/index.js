import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import './styles/base.css';
import './styles/cards.css'
import App from './components/App.js';
import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;
ReactDOM.render(
    <Router>
        <App /> 
    </Router>,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
