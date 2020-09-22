import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from '../src/store/store';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
// ReactDOM.render(<LoginPage />, document.getElementById('root'));

serviceWorker.unregister();
