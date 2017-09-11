import * as actionTypes from '../constants/ActionTypes';


export function fetchWordList() {
  return {
    type: actionTypes.FETCH_WORD_LIST,
    url: '/api/words/',
  };
}


export function fetchWord(id) {
  return {
    type: actionTypes.FETCH_WORD,
    url: `/api/words/${id}/`,
  };
}
