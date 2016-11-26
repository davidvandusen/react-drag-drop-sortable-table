require("../styles/application.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import {createStore} from 'redux';
import rootReducer from './reducers';
import demoData from './demoData'
console.log(demoData);
const store = createStore(rootReducer, demoData);

var root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
