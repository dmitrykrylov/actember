import * as actionTypes  from '../constants/ActionTypes';


const initialState = {
  wordList: [],
}

export default function words(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WORD_LIST_SUCCESS':
      return {...state, wordList: action.textList}
    default:
      return {
        ...state
      }
  }
};