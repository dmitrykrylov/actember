import { combineReducers } from 'redux'
import auth from './auth'
import texts from './texts'
import words from './words'


const rootReducer = combineReducers({
  auth,
  texts,
  words
})


export default rootReducer