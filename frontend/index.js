import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { composeWithDevTools } from 'redux-devtools-extension';
import callAPIMiddleware from './middlewares/callApi';
import rootReducer from './reducers';
import App from './containers/App';


const history = createHistory();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, callAPIMiddleware, routerMiddleware(history))),
);


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <App />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};


render(App);


if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App); });
}
