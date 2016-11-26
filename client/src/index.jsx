require("../styles/application.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, {
  ui: {
    fieldOrder: [1, 2, 3],
    itemOrder: [1, 2, 3],
    draggedFieldId: null,
    draggedItemId: null,
    offsetX: 0,
    offsetY: 0
  },
  // these are objectives
  fields: [{
    id: 1,
    name: 'Field 1'
  }, {
    id: 2,
    name: 'Field 2'
  }, {
    id: 3,
    name: 'Field 3'
  }],
  // these are alternatives
  items: [{
    id: 1,
    name: 'Item 1',
    fieldData: [{
      id: 1,
      fieldId: 1,
      value: 11
    }, {
      id: 2,
      fieldId: 2,
      value: 21
    }, {
      id: 3,
      fieldId: 3,
      value: 31
    }]
  }, {
    id: 2,
    name: 'Item 2',
    fieldData: [{
      id: 4,
      fieldId: 1,
      value: 12
    }, {
      id: 5,
      fieldId: 2,
      value: 22
    }, {
      id: 6,
      fieldId: 3,
      value: 32
    }]
  }, {
    id: 3,
    name: 'Item 3',
    fieldData: [{
      id: 7,
      fieldId: 1,
      value: 13
    }, {
      id: 8,
      fieldId: 2,
      value: 23
    }, {
      id: 9,
      fieldId: 3,
      value: 33
    }]
  }]
});

var root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
