import * as actionTypes from '../constants/ActionTypes';


export function addText(params) {
  return {
    url: '/api/texts/',
    options: { method: 'POST', body: JSON.stringify(params) },
    type: actionTypes.ADD_TEXT,
  };
}


export function fetchText(id) {
  return {
    url: `/api/texts/${id}/`,
    type: actionTypes.FETCH_TEXT,
  };
}


export function fetchTextList() {
  return {
    url: '/api/texts/',
    type: actionTypes.FETCH_TEXT_LIST,
  };
}


export function fetchTextWords(id) {
  return {
    url: `/api/texts/${id}/words`,
    type: actionTypes.FETCH_TEXT_WORD_LIST,
  };
}
