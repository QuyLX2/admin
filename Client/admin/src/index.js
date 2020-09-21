import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';
import setAuthToken from '../src/utils/setAuthToken';
import { loadUser } from './actions/auth'; import 'antd/dist/antd.css';
import store from '../src/store/store';

import * as serviceWorker from './serviceWorker';
if (localStorage.token) {
    setAuthToken(localStorage.token)
}
store.dispatch(loadUser())
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LoginPage />, document.getElementById('root'));

serviceWorker.unregister();
