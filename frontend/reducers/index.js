import { combineReducers } from 'redux';
import auth from './auth';
import texts from './texts';
import words from './words';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  texts,
  words,
  router: routerReducer,
  form: formReducer,
});


export default rootReducer;
