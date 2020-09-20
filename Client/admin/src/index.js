import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';
import LoginPage from './views/LoginPage';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LoginPage />, document.getElementById('root'));

serviceWorker.unregister();
