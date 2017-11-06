import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import App from './containers/App';
import rootSaga from './sagas';


let composeEnhancers;
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

console.log('NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'development') {
  composeEnhancers = compose;
} else {
  composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    port: 3000,
  });
}


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

store.sagaTask = sagaMiddleware.run(rootSaga);


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


render();


if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App); });
}
