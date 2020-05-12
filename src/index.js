import React from 'react';
import ReactDOM from 'react-dom';
import './custom-bootstrap.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = document.getElementById('root')

ReactDOM.render(<App />, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
