import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import createLogger from 'redux-logger';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'

import rootReducer from './reducers';
import App from './containers/App';


const logger = createLogger();

const history = createHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger, routerMiddleware(history))
)


const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <App/>
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}


render(App)


if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}