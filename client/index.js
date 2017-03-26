import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from "redux-thunk";
import createLogger from 'redux-logger';
import { BrowserRouter, Route } from 'react-router-dom'

import rootReducer from './reducers';
import App from './containers/App';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

// console.log(roo)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
