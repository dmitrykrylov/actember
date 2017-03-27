import { combineReducers } from 'redux';
import auth from './auth';
import texts from './texts';
import words from './words';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth,
  texts,
  words,
  router: routerReducer,
});


export default rootReducer;
